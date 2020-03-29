import React from 'react';
import { Redirect } from "react-router-dom";

import { Container, Button } from '@material-ui/core/';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { getCurrentProfile } from '../../Helpers.js';

const Main = () => {
	return getCurrentProfile() ? (
		<Redirect to="/packages" />
	) : (
		<Container style={{textAlign: 'center'}}>
			<div style={{marginTop: '15vh'}}>
				<img src="https://playonset.com/images/Onset.png" width="50%" alt="Onset logo" />
				{/* <h1 style={{color:' #212121', font: '12vh "Roboto"', fontSize: '12vh'}} >Onset.tools</h1> */}
				<h3 style={{color: '#757575', fontSize: '3vw'}} >A web platform to share and find packages, assets, tools, and more.</h3>
				<a href={process.env.REACT_APP_API_URL + '/auth/steam'} style={{marginLeft: 'auto', textDecoration: 'none', color: '#eee'}} color="inherit" aria-label="login" rel="noopener noreferrer">
					<Button variant="contained" color="primary" aria-label="login"><span style={{color: '#eee'}}><FontAwesomeIcon icon={['fab', 'steam']} /><span style={{marginLeft: '5px'}}>Login with steam</span></span></Button>
				</a>
			</div>
		</Container>
	)
}

export default Main;
