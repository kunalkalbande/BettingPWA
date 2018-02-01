import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { Dashboard } from './components/Dashboard';
import { Scoreboard } from './components/Scoreboard';
import { PlayerList } from './components/PlayerList';
import { Login } from './components/Login';

export const routes = <Layout>
    <Route exact path='/Home' component={Home} />
    <Route path='/counter' component={Counter} />
    <Route path='/fetchdata' component={FetchData} />
    <Route path='/' component={Dashboard} >        
    </Route>
    <Route path='/Scoreboard' component={Scoreboard} />
    <Route path='/PlayerList' component={PlayerList} />
</Layout>;
