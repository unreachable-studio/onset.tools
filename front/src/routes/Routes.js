import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import cookie from 'react-cookies';

import cookie from 'react-cookies';
import Packages from '../components/Packages/Packages';

const Router = () => (
    <Switch>
		<Route exact path="/packages" component={Packages} />
		<Route exact path="/logout"  component={() => { cookie.remove('token'); return <Redirect to="/" />} }/>
        <Redirect to="/packages" />
    </Switch>
)

export default Router;
