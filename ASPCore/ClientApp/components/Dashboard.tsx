/// <reference path="counter.tsx" />
import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import 'isomorphic-fetch';
import * as JQuery from 'jquery';
import * as BT from 'bootstrap';
import { Link, NavLink, withRouter, BrowserRouter } from 'react-router-dom';
import { Child } from './Child';

//import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'bootstrap';


interface DashboardExampleState {
    Matches: MatchDetails[];
    loading: boolean;
    PScore: any;
}

export class Dashboard extends React.Component<RouteComponentProps<{}>, DashboardExampleState> {

    constructor() {
        super();
        //this.handleClick = this.handleClick.bind(this);
        this.state = { Matches: [], loading: true, PScore: null };

        fetch('http://172.25.29.70:92/API/Cricket/GetCurrentMatches')
            .then(response => response.json() as Promise<MatchDetails[]>)
            .then(data => {
                this.setState({ Matches: data, loading: false });
            });
    }

    public render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : Dashboard.renderMatchCard(this.state.Matches);

        return <div>
            <div className='row' style={{ margin: '10px' }}>
                <h1>Current Matches</h1>
            </div>
            <div >
                {contents}
            </div>

        </div>;
    }

    //public static test(Mname: string): PlayerScore {
    //    //return Mname + "test";
    //    let PS: PlayerScore = {
    //        MatchId: "",
    //        Name: "",
    //        Runs: "",
    //        Wickets: ""

    //    };

    //    fetch('http://172.25.29.70:92/API/Cricket/Mashrafe%20Mortaza/18738/GetPlayerScore')
    //        .then(response => response.json() as Promise<PlayerScore>)
    //        .then(data => {
    //            PS = data as PlayerScore;    
    //            //console.log(PS);
    //        });  
    //    console.log(PS);
    //    return PS;
    //}
    private static renderMatchCard(Matches: MatchDetails[]) {
        var PS: PlayerScore;
        return <div className='container'>

            <div className='row'>
                {Matches.map(Match =>
                    <div className='col-lg-3' style={{ padding: '1px' }} key={Match.URL}>
                        <div className='card text-center' style={{ backgroundColor: 'white', height: 280, margin: 10 }}>
                            <div className='card-header' data-toggle="tooltip" data-placement="bottom" title={Match.Name}>
                                <h3 className='card-title truncate' style={{ color: '#005694' }}>{Match.Name}</h3>
                            </div>
                            <div className='card-block'>
                                <h4>{Match.Status}</h4>
                                <hr />
                                <p className='card-text'>{Match.Details}</p>
                            </div>
                            <div className='card-footer text-muted' style={{}} >
                                <div className='row' style={{ paddingLeft: 22 }}>
                                    <Link to={"/PlayerList?mid=" + Match.URL + "&mname=" + Match.Name} className='btn btn-info btn-lg' disabled={Match.Status != 'Match will start soon.' ? false : true}>Teams</Link>&nbsp;
                                    <Link to={"/Scoreboard?mid=" + Match.URL + "&mname=" + Match.Name} className='btn btn-success btn-lg' disabled={Match.Status != 'Match will start soon.' ? false : true}>Score</Link>&nbsp;
                                    <Link to={"/Scoreboard?mid=" + Match.URL + "&mname=" + Match.Name} className='btn btn-outline-warning btn-lg' disabled={Match.Status != 'Match will start soon.' ? false : true}>Bet</Link>

                                </div>
                            </div>
                        </div>
                    </div>

                )}
            </div>
        </div>;
    }
}

interface MatchDetails {
    Details: string;
    Name: string;
    Status: string;
    URL: string;
}

interface PlayerScore {
    MatchId: string;
    Name: string;
    Runs: string;
    Wickets: string;
}