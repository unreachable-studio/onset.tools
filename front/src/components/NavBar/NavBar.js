import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
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
} from '@material-ui/core/';
import MenuIcon from '@material-ui/icons/Menu';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const useStyles = makeStyles({
  list: {
    width: 270,
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
});

const NavBar = () => {
  const classes = useStyles();
  const [state, setState] = useState(false);

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
              <ListItemIcon className="iconNavbar"><FontAwesomeIcon icon="cube" size="1x"/></ListItemIcon>
              <ListItemText primary="Packages" />
            </ListItem>
        </NavLink>

        <NavLink to="/assets" className={classes.link} activeClassName="activeLink">
          <ListItem button key={1}>
            <ListItemIcon className="iconNavbar"><FontAwesomeIcon icon="image" size="1x"/></ListItemIcon>
            <ListItemText primary="Assets" />
          </ListItem>
        </NavLink>
      </List>


      <div className={classes.footer}>
        <Divider />
        <div className={classes.externalLinks}>
          <a href="https://discordapp.com/invite/C8qSa2K" className={classes.externalLinksBtn}><FontAwesomeIcon icon={['fab', 'discord']} size="2x"/></a>
          <a href="https://github.com/unreachable-studio/onset.tools" className={classes.externalLinksBtn}><FontAwesomeIcon icon={['fab', 'github']} size="2x"/></a>
        </div>
        <div className={classes.unreachable}><a href="https://unreachable.studio/" className={classes.unreachableBtn}>Unreachable Studio</a></div>
      </div>
    </div>
  );

  return <>
    <AppBar position="static">
      <Toolbar>
        <IconButton onClick={toggleDrawer(true)} edge="start" color="inherit" aria-label="menu"><MenuIcon /></IconButton>
        <Typography variant="h6">Onset.tools</Typography>
        <Button style={{marginLeft: 'auto'}} color="inherit" aria-label="login"><FontAwesomeIcon icon={['fab', 'steam']} /> <span className={classes.loginText}>Login</span></Button>
      </Toolbar>
    </AppBar>

    <Drawer open={state} onClose={toggleDrawer(false)}>
      <Menu /> 
    </Drawer>
  </>
}

export default NavBar;
