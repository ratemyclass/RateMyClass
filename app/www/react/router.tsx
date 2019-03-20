import * as React from "react";
import { Switch, Route } from "react-router-dom";

/** App will be the main container for the entire front end **/
export const App = () => (
    <Switch>
        <Route exact path='/' component={HelloWorld} />
    </Switch>
);

// This component will be rendered when the user navigates to the '/' route (the home page)
const HelloWorld = () => <h1>Hello World! Rate my class.</h1>;