import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faSteam, faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCube, faImage, faDownload, faEye, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ReactBreakpoints from 'react-breakpoints';

import NavBar from './components/NavBar/NavBar';
import Router from './routes/Routes';

library.add(faSteam, faDiscord, faGithub, faCube, faUser, faImage, faDownload, faEye, faSignOutAlt);

const breakpoints = {
  mobile: 320,
  mobileLandscape: 480,
  tablet: 768,
  tabletLandscape: 1024,
  desktop: 1200,
  desktopLarge: 1500,
  desktopWide: 1920,
}

const App = () => {
  return (
	<ReactBreakpoints breakpoints={breakpoints}>
	  <NavBar />
	  <section name="offset" style={{paddingTop: '80px'}}></section>
	  <Router />
	</ReactBreakpoints>
  )
}

export default App;
