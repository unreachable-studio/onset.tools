import React, { useState } from "react";
import { Link, NavLink, useHistory, useLocation } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import {
	AppBar,
	Avatar,
	Toolbar,
	Typography,
	Button,
	IconButton,
	Drawer,
	Divider,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Breadcrumbs,
} from '@material-ui/core/';
import MenuIcon from '@material-ui/icons/Menu';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { getCurrentProfile } from '../../Helpers.js';

const useStyles = makeStyles({
    appBar: {
      zIndex: 1400,
    },
	list: {
		width: 270,
	    marginTop: '75px',
	},
	loginText: {
		marginLeft: '5px'
	},
	link: {
		textDecoration: 'none',
		color: '#202020',
	},
	footer: {
		position: 'absolute',
		display: 'block',
		width: '100%',
		bottom: '10px',
	},
	externalLinks: {
		display: 'block',
		marginLeft: 'auto',
		textAlign: 'center',
		paddingTop: '20px'
	},
	externalLinksBtn: {
		textDecoration: 'none',
		color: '#202020',
		marginLeft: '10px',
		marginRight: '10px'
	},
	unreachable: {
		textAlign: 'center',
		marginTop: '5px'
	},
	unreachableBtn: {
		textDecoration: 'none',
		color: '#202020',
	},
	logout: {
		width: '100%',
		'&:hover': {
			background: "#f4433688",
		},
	},

});

const NavBar = () => {
	const classes = useStyles();
	const [state, setState] = useState(false);
	const history = useHistory()
	const location = useLocation();

	const toggleDrawer = open => event => {
		if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift'))
			return;
		setState(open);
	};

	const Menu = () => (
		<div className={classes.list} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
			<List>
				<NavLink to="/packages" className={classes.link} activeClassName="activeLink">
					<ListItem button key={0}>
						<ListItemIcon className="iconNavbar"><FontAwesomeIcon icon="cube" size="2x"/></ListItemIcon>
						<ListItemText primary="Packages" />
					</ListItem>
				</NavLink>

				<NavLink to="/assets" className={classes.link} activeClassName="activeLink">
					<ListItem button key={1}>
						<ListItemIcon className="iconNavbar"><FontAwesomeIcon icon="image" size="2x"/></ListItemIcon>
						<ListItemText primary="Assets" />
					</ListItem>
				</NavLink>
			</List>


			<div className={classes.footer}>
				{ getCurrentProfile() ?
				  <Button onClick={() => history.push('/logout')} color="inherit" aria-label="logout" className={classes.logout}><FontAwesomeIcon icon="sign-out-alt" style={{marginRight: '5px'}}/>Logout</Button>
				: null }
				<Divider />
				<div className={classes.externalLinks}>
					<a href="https://discordapp.com/invite/C8qSa2K" className={classes.externalLinksBtn}><FontAwesomeIcon icon={['fab', 'discord']} size="2x"/></a>
					<a href="https://github.com/unreachable-studio/onset.tools" className={classes.externalLinksBtn}><FontAwesomeIcon icon={['fab', 'github']} size="2x"/></a>
				</div>
				<div className={classes.unreachable}><a href="https://unreachable.studio/" className={classes.unreachableBtn}>Unreachable Studio</a></div>
			</div>
		</div>
	);

	const handleLogin = () =>	window.location.href = process.env.REACT_APP_API_URL + '/auth/steam';

	return <>
		<AppBar position="fixed" className={classes.appBar}>
			<Toolbar>
				<IconButton onClick={toggleDrawer(true)} edge="start" color="inherit" aria-label="menu"><MenuIcon /></IconButton>

			    <Breadcrumbs aria-label="breadcrumb" style={{textDecoration: 'none', color: '#fff', verticalAlign: 'middle'}}>
				  <Link color="inherit" to="/" style={{textDecoration: 'none', color: 'white'}}>
			        <Typography variant="h6">Onset.tools</Typography>
			      </Link>
				  <Link
					color="textPrimary"
					style={{textDecoration: 'none', color: '#eeeb'}}
					to={location.pathname}
					aria-current="page"
				  >
					<Typography style={{verticalAlign: 'middle'}}>{location.pathname.substr(1)}</Typography>
				  </Link>
				</Breadcrumbs>

				{ getCurrentProfile() ? (
					<div style={{marginLeft: 'auto', display: 'flex'}}>
						<h3>{getCurrentProfile().user.displayName}</h3>
						<Avatar alt={getCurrentProfile().user.displayName} src={getCurrentProfile().user.photos[1].value} style={{marginTop: '7px', marginLeft: '10px'}}/>
					</div>
				) :
				<Button onClick={handleLogin} style={{marginLeft: 'auto'}} color="inherit" aria-label="login"><FontAwesomeIcon icon={['fab', 'steam']} /> <span className={classes.loginText}>Login</span></Button>
				}
			</Toolbar>
		</AppBar>

		<Drawer open={state} onClose={toggleDrawer(false)}>
			<Menu />
		</Drawer>
	</>
}

export default NavBar;
