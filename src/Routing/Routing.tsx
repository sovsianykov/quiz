import React, { FunctionComponent } from 'react';
import { BrowserRouter as Router , Switch, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import LimitedTime from "../pages/LimitedTime/LimitedTime";
import LearnMode from "../pages/LearnMode/LearnMode";
import Navigation from "../components/Navigation/Navigation";


const Routing:FunctionComponent = () => {
    return (
        <Router>
            <Navigation/>
            <Switch>
                <Route exact path='/' component={ Home } />
                <Route path='/limited-time' component={ LimitedTime } />
                <Route path='/learn-mode' component={ LearnMode } />
            </Switch>
        </Router>
    );
};

export default Routing;
