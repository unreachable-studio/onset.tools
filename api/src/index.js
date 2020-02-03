const express = require('express');
const passport = require('passport');
const SteamStrategy = require('passport-steam');
const jwt = require('jsonwebtoken');
const app = express();

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

//app.use(session({
//    secret: 'onset',
//    name: 'namesessid',
//    resave: true,
//    saveUninitialized: true
//}));

app.use(passport.initialize());
app.use(passport.session());

app.get('/', function (req, res) {
  res.send('Hello World!')
})

passport.use(new SteamStrategy({
  returnURL: 'http://unreachable.fr:4001/auth/steam/return',
  realm: 'http://unreachable.fr:4001/',
  apiKey: '5461922463F2C0C67244481E77B2C103'
},
  function(identifier, profile, done) {
	//User.findByOpenID({ openId: identifier }, function (err, user) {
	//  return done(err, user);
	//});
	return done(null, profile);
  }
));

app.get('/auth/steam',
  passport.authenticate('steam'),
  function(req, res) {
	// The request will be redirected to Steam for authentication, so
	// this function will not be called.
  });

app.get('/auth/steam/return',
  passport.authenticate('steam', { failureRedirect: '/packages' }), //TODO: change failure url
  function(req, res) {
	const token = jwt.sign({ user: req.user }, /*process.env.SECRET_KEY*/"onset", { expiresIn: '2h' });
	  res.cookie('token', token);
	  res.redirect('http://unreachable.fr:3001/');
  });

app.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

app.listen(4000, function () {
  console.log('Example app listening on port 4000!')
})
