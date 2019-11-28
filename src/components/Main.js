import React from 'react';
import Biografia from './Biografia';
import Proyectos from './Proyectos';
import LandingPage from './LandingPage.js';
import { Switch, Route } from 'react-router-dom';

const Main = () =>(
    <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route path="/biografia" component={Biografia}/>
        <Route path="/proyectos" component={Proyectos}/>
    </Switch>
)

export default Main;