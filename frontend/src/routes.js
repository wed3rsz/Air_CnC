import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import New from './pages/New';


export default function Routes(){
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Login}/>
            <Route path="/dashboard" component={Dashboard}/>
            <Route path="/new" component={New}/>
        </Switch>
        </BrowserRouter>

    );
}



// Rotas setadas para cada url digitada, buscando novas instancias do react-router-dom, como BrowserRouter, Route e Switch