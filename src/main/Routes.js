import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../components/Pages/Home";
import Usuarios from "../components/Pages/Usuarios";

export default function Routes(props) {
    //const location = useLocation();
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/users" component={Usuarios} />
            <Route path="*" component={Home} />
        </Switch>
    )
}