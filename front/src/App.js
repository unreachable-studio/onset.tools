import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faSteam, faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCube, faImage, faDownload, faEye, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import NavBar from './components/NavBar/NavBar';
import Router from './routes/Routes';

library.add(faSteam, faDiscord, faGithub, faCube, faUser, faImage, faDownload, faEye, faSignOutAlt);

const App = () => {
  return <>
    <NavBar />
	<section name="offset" style={{paddingTop: '80px'}}></section>
    <Router />
  </>
}

export default App;
