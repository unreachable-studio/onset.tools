import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";

import Packages from '../components/Packages/Packages';
import PackageView from "../components/Packages/PackageView";

const Router = () => (
    <Switch>
		<Route exact path="/packages" component={Packages} />
        <Route exact path="/package/:id" component={PackageView} />
		<Route exact path="/logout"  component={() => { cookie.remove('token'); return <Redirect to="/" />} }/>
        <Redirect to="/packages" />
    </Switch>
)

export default Router;
