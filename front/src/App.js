import React from 'react';
import Router from './routes/Routes';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faSteam, faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCube, faDownload, faEye } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faSteam, faDiscord, faGithub, faCube, faUser, faDownload, faEye);

function App() {
  return (
	<>
		<Router />
	</>
  );
}

export default App;
