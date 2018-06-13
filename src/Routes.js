import React from 'react';
import {Switch, Route} from 'react-router-dom';
//COMPONENTS
import Bin from './Components/Bin/Bin';
import Bins from './Components/Bins/Bins';
import Create from './Components/Create/Create';
import Home from './Components/Home/Home';
// W5hntcc81
export default (
    <Switch>
        <Route component = {Home} exact path = "/" />
        <Route component = {Bins} path = "/bins/:id" />
        <Route component = {Bin} path = "/read_bin/:id" />
        <Route component = {Create} path = "/create_bin/:id" />
    </Switch>
)