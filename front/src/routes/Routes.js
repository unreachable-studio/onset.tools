import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import cookie from 'react-cookies';

import Main from '../components/Main/Main';
import Packages from '../components/Packages/Packages';
import PackageView from "../components/Packages/PackageView";
import PackageNew from "../components/Packages/PackageNew";

const Router = () => (
    <Switch>
		<Route exact path="/packages" component={Packages} />
        <Route exact path="/package/new" component={PackageNew} />
        <Route path="/package/:id" component={PackageView} />
		<Route exact path="/logout"  component={() => { cookie.remove('token'); return <Redirect to="/" />} }/>
		<Route exact path="/" component={Main} />
    </Switch>
)

export default Router;
