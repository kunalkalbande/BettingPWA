import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Betting } from './components/Betting';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { Dashboard } from './components/Dashboard';
import { Scoreboard } from './components/Scoreboard';
import { PlayerList } from './components/PlayerList';
<<<<<<< HEAD
import { Login } from './components/Login';
=======
import { Login } from './components/login';
import { Register } from './components/Register';
>>>>>>> a13ae0758eed063f1cab155e3f3040b0ed3e90e4

export const routes = <Layout>
    <Route exact path='/Home' component={Home} />
    <Route path='/counter' component={Counter} />
    <Route path='/fetchdata' component={FetchData} />
<<<<<<< HEAD
    <Route path='/' component={Dashboard} >        
    </Route>
    <Route path='/Scoreboard' component={Scoreboard} />
    <Route path='/PlayerList' component={PlayerList} />
=======
    <Route path='/Dashboard' component={Dashboard} />
    <Route path='/Scoreboard' component={Scoreboard} />
    <Route path='/PlayerList' component={PlayerList} />
    <Route path='/Register' component={Register} />
>>>>>>> a13ae0758eed063f1cab155e3f3040b0ed3e90e4
</Layout>;
