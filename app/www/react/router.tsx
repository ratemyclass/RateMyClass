import * as React from "react";
import { Switch, Route } from "react-router-dom";

import { Dashboard } from "./dashboard";

/** App will be the main container for the entire front end **/
export const App = () => (
    <Switch>
        <Route exact path='/' render={(props) => <Dashboard currentView={0} /> } />
        <Route path='/classes/:class' render={(props) => <Dashboard currentView={2} /> } />
        <Route path='/classes' render={(props) => <Dashboard currentView={1} /> } />
        <Route path='/professors/:instance' render={(props) => <Dashboard currentView={4} /> } />
        <Route path='/professors' render={(props) => <Dashboard currentView={3} /> } />
    </Switch>
);