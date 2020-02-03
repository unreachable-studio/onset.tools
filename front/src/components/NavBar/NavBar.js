import React, { useState } from "react";

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
    width: 250,
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
        <ListItem button key={0}>
          <ListItemIcon><FontAwesomeIcon icon="cube" size="1x"/></ListItemIcon>
          <ListItemText primary="Packages" />
        </ListItem>

        <ListItem button key={1}>
          <ListItemIcon><FontAwesomeIcon icon="image" size="1x"/></ListItemIcon>
          <ListItemText primary="Assets" />
        </ListItem>
      </List>

      <Divider />

      <FontAwesomeIcon icon={['fab', 'discord']} size="2x"/>
      <FontAwesomeIcon icon={['fab', 'github']} size="2x"/>
      <br />
      Unreachable Studio
    </div>
  );

  return <>
    <AppBar position="static">
      <Toolbar>
        <IconButton onClick={toggleDrawer(true)} edge="start" color="inherit" aria-label="menu"><MenuIcon /></IconButton>
        <Typography variant="h6">Onset.tools</Typography>
        <Button style={{marginLeft: 'auto'}} color="inherit" aria-label="login"><FontAwesomeIcon icon={['fab', 'steam']} /> Login</Button>
      </Toolbar>
    </AppBar>

    <Drawer open={state} onClose={toggleDrawer(false)}>
      <Menu /> 
    </Drawer>
  </>
}

export default NavBar;
