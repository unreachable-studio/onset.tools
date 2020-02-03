import React from "react";
import { Switch, Redirect } from "react-router-dom";

const Router = () => (
    <Switch>
        <Redirect to="/" />
    </Switch>
)

export default Router;