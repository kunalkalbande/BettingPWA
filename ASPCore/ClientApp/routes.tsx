import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Betting } from './components/Betting';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { Dashboard } from './components/Dashboard';
import { Scoreboard } from './components/Scoreboard';
import { Stats } from './components/Stats';
import { PlayerList } from './components/PlayerList';
import { Login } from './components/login';
import { Register } from './components/Register';
import { Bet } from './components/Bet';
import { AllBets } from './components/AllBets';
export const routes = <Layout>
    <Route exact path='/' component={Home} />
    <Route path='/counter' component={Counter} />
    <Route path='/fetchdata' component={FetchData} />
    <Route path='/Dashboard' component={Dashboard} />
    <Route path='/Scoreboard' component={Scoreboard} />
    <Route path='/Bet' component={Bet} />
    <Route path='/PlayerList' component={PlayerList} />
    <Route path='/Stats' component={Stats} />
    <Route path='/Register' component={Register} />
    <Route path='/AllBets' component={AllBets} />

</Layout>;
