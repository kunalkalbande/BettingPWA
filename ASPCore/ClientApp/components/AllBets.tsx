import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import 'isomorphic-fetch';
import { Link, NavLink, withRouter, BrowserRouter } from 'react-router-dom';
import { BetsCard } from '../childComponents/BetsCard';

//import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'bootstrap';


interface BetsExampleState {
    Bets: BetsDetails[];
    loading: boolean;
}

export class AllBets extends React.Component<RouteComponentProps<{}>, BetsExampleState > {

    constructor() {
        super();
        //this.handleClick = this.handleClick.bind(this);
        this.state = { Bets: [], loading: true };

        fetch('http://172.25.29.70:92/API/Cricket/pat/getMatchBets')
            .then(response => response.json() as Promise<BetsDetails[]>)
            .then(data => {
                this.setState({ Bets: data, loading: false });
            });
    }

    public render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : AllBets.renderBetscard(this.state.Bets);

        return <div>
            <div className='row' style={{ margin: '10px' }}>
                <h1>All Bets</h1>
            </div>
            <div >
                {contents}
            </div>

        </div>;
    }


    private static renderBetscard(Bets: BetsDetails[]) {
        return <div className='container'>
            <div className='row'>
                {Bets.map(Bet =>
                    <BetsCard Bets={Bet} key={Math.random()} />
                )}
            </div>
        </div>;
    }
}

interface BetsDetails {
    BetId: string;
    UserId: string;
    TeamOne: string;
    TeamTwo: string;
    BettedTeam: string;
    BetAmount: string;
}
