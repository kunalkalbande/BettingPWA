import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import 'isomorphic-fetch';
//import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'bootstrap';
import { PlayrScore } from './playerscore';

interface DashboardExampleState {
    forecasts: any;
    loading: boolean;
    runs: any;
    MID: string;
    MName: string;
    score: any;
}

export class Bet extends React.Component<RouteComponentProps<{}>, DashboardExampleState> {

    constructor() {
        super();

        this.state = { forecasts: [], loading: true, runs: null, MID: '', MName: '', score: null };
        
    }

    componentWillMount() {

        var purl = window.location.href;
        var pindex = purl.indexOf('=');
        var M_URL = purl.substring(purl.split("=", 1).join("=").length + 1);
        var M_Name = purl.substring(purl.split("=", 2).join("=").length + 1);
        M_URL = M_URL.substring(0, M_URL.indexOf('&'));
        this.setState({ MID: M_URL });
        this.setState({ MName: M_Name });
        this.getScore(M_URL, M_Name);
    }

    getScore(mURL: string, mName: string) {
        fetch('http://172.25.29.70:92/API/Cricket/' + mURL + '/' + mName + '/GetTeams')
            .then(response => response.json() as Promise<any[]>)
            .then(data => {
                this.setState({ forecasts: data, loading: false });
            });
    }
   
    public render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.renderMatchCard(this.state.forecasts);

        return <div>
            <div className='row' style={{ margin: '10px' }}>
                <h1>Bet</h1>
            </div>
            <div >
                {contents}
            </div>

        </div>;
    }


    private renderMatchCard(Matches: Teams) {
        debugger
        let R;
        return <div className='container'>
            <div>
                <h3>{Matches.MatchName}</h3>
                {R = Matches.MatchName.split("vs")}

                <div>
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Select a Team to Bet
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="#">{R[0]}</a>
                            <a className="dropdown-item" href="#">{R[1]}</a>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Bet Amount</label>
                        <input type="betamount" className="form-control" id="betamount" aria-describedby="betamount" placeholder="Enter Bet Amount"></input>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={() => { this.registerBet() }}>Submit</button>
                </div>
            </div>
        </div>;
    }

    registerBet() {
        fetch('http://172.25.29.70:92/API/Cricket/RegisterMatchBet', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                BetId: "76597875-cce5-4f8e-b3c8-22667ebb33d4",
                UserId: "pat",
                TeamOne: "India",
                TeamTwo: "South Africa",
                BettedTeam: "India",
                BetAmount: "500"
            })
        }).then(res => {
            console.log(res)
                return res;
            }).catch(err => console.log(err));
    }
}

   

interface Teams {
    MatchName: string;
    Team: Team[];
}

interface Team {
    TeamName: string;
    Bench: PlayerName[];
    Playing: PlayerName[];
}

interface PlayerName {
    ID: string;
    ImageURL: string;
    Name: string;
    ProfileURL: string;
    Runs: string;
    Wickets: string;
}
interface Score {
    MatchId: string;
    Name: string;
    Runs: string;
    Wickets: string;
}
