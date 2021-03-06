import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { makeStyles } from '@material-ui/core/styles';
import {
	AppBar,
	Avatar,
	Toolbar,
	Typography,
	Button,
	IconButton,
	SwipeableDrawer,
	Divider,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Breadcrumbs,
} from '@material-ui/core/';
import MenuIcon from '@material-ui/icons/Menu';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import FloatingButton from './FloatingButton.js';

import { getCurrentProfile } from '../../Helpers.js';

const useStyles = makeStyles(theme => ({
    appBar: {
      zIndex: theme.zIndex.drawer,
	  color: 'white',
    },
    drawer: {
      zIndex: theme.zIndex.drawer,
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
}));

const NavBar = (props) => {
	const classes = useStyles();
	const [state, setState] = useState(false);
	const location = useLocation();

	const toggleDrawer = open => event => {
		if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift'))
			return;
		setState(open);
	};

	const Menu = () => (
		<div className={classes.list} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
			<List>
				<NavLink to="/packages" className={classes.link} activeClassName="activeLink" isActive={(match, loc) => loc.pathname.startsWith('/package')}>
					<ListItem button key={0}>
						<ListItemIcon className="iconNavbar"><FontAwesomeIcon icon="cube" size="2x"/></ListItemIcon>
						<ListItemText primary="Packages" />
					</ListItem>
				</NavLink>

				<NavLink to="/assets" className={classes.link} activeClassName="activeLink" isActive={(match, loc) => loc.pathname.startsWith('/asset')}>
					<ListItem button key={1}>
						<ListItemIcon className="iconNavbar"><FontAwesomeIcon icon="image" size="2x"/></ListItemIcon>
						<ListItemText primary="Assets" />
					</ListItem>
				</NavLink>
			</List>


			<div className={classes.footer}>
				{ getCurrentProfile() ?
					<a href="/logout" style={{marginLeft: 'auto', textDecoration: 'none', color: 'inherit'}} aria-label="logout" rel="noopener noreferrer">
						<Button color="inherit" aria-label="logout" className={classes.logout}><FontAwesomeIcon icon="sign-out-alt" style={{marginRight: '5px'}}/>Logout</Button>
					</a>
				:
					<a href={process.env.REACT_APP_API_URL + '/auth/steam'} style={{marginLeft: 'auto', textDecoration: 'none', color: 'inherit'}} aria-label="logout" rel="noopener noreferrer">
						<Button color="inherit" aria-label="logout" className={classes.logout}><FontAwesomeIcon icon={['fab', 'steam']} style={{marginRight: '5px'}}/>Login</Button>
					</a>
				}
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

    const theme = useTheme();
    const desktop = useMediaQuery(theme.breakpoints.up('sm'));

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
					<Typography style={{verticalAlign: 'middle'}}>{location.pathname.split('/')[1]}</Typography>
				  </Link>
				</Breadcrumbs>

				{ getCurrentProfile() ? (
					<Link to={'/user/' + getCurrentProfile().id} style={{marginLeft: 'auto', textDecoration: 'none', color: '#eee'}} color="inherit" aria-label="login">
						<div style={{marginLeft: 'auto', display: 'flex'}}>
							{desktop ? <h3>{getCurrentProfile().displayName}</h3> : null}
							<Avatar alt={getCurrentProfile().displayName} src={getCurrentProfile().photos[1].value} style={{marginTop: (desktop ? '7px' : '0px'), marginLeft: (desktop ? '10px' : '0px')}}/>
						</div>
					</Link>
				) : (
					<a href={process.env.REACT_APP_API_URL + '/auth/steam'} style={{marginLeft: 'auto', textDecoration: 'none', color: '#eee'}} color="inherit" aria-label="login" rel="noopener noreferrer">
						{desktop ? (
						<Button style={{marginLeft: 'auto'}} color="inherit" aria-label="login"><FontAwesomeIcon icon={['fab', 'steam']} /><span className={classes.loginText}>Login</span></Button>
					) : (
						<IconButton onClick={handleLogin} style={{marginLeft: 'auto'}} color="inherit" aria-label="login"><FontAwesomeIcon icon={['fab', 'steam']} /></IconButton>
					)}
						</a>
				)}
			</Toolbar>
		</AppBar>

		{ getCurrentProfile() ? <FloatingButton /> : null }

		<SwipeableDrawer swipeAreaWidth={50} open={state} onOpen={toggleDrawer(true)} onClose={toggleDrawer(false)} className={classes.drawer}>
			<Menu />
		</SwipeableDrawer>
	</>
}

export default NavBar;
