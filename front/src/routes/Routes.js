import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";

import Packages from '../packages/Packages';

const Router = () => (
    <Switch>
		<Route exact path="/packages" component={Packages} />
        <Redirect to="/" />
    </Switch>
)

export default Router;
