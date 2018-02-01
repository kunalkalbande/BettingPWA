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

export class PlayerList extends React.Component<RouteComponentProps<{}>, DashboardExampleState> {

    constructor() {
        super();

        this.state = { forecasts: [], loading: true, runs: null, MID: '', MName: '', score: null };

        //fetch('http://172.25.29.70:92/API/Cricket/19352/BangladeshvsZimbabwe/GetTeams')
        //    .then(response => response.json() as Promise<any[]>)
        //    .then(data => {
        //        this.setState({ forecasts: data, loading: false });
        //    });
        //console.log(this.state.forecasts);

        //fetch('http://172.25.29.70:92/API/Cricket/Hamilton%20Masakadza/19352/GetPlayerScore')
        //    .then(response => response.json() as Promise<any>)
        //    .then(data => {
        //        this.setState({ runs: data, loading: false });
        //    });

    }

    componentWillMount() {

        var purl = window.location.href;
        var pindex = purl.indexOf('=');
        //var strp = purl.substring(pindex + 1);
        var M_URL = purl.substring(purl.split("=", 1).join("=").length + 1);
        var M_Name = purl.substring(purl.split("=", 2).join("=").length + 1);
        M_URL = M_URL.substring(0, M_URL.indexOf('&'));
        //console.log('Name : ' + M_Name);
        //console.log('URL : ' + M_URL);
        this.setState({ MID: M_URL });
        this.setState({ MName: M_Name });
        this.getScore(M_URL, M_Name);
        //console.log("Scoreboard Props : " + this.props.params);
    }
    componentDidMount() {

        //this.getPlayerScore(M_Name, M_URL);

    }

    getScore(mURL: string, mName: string) {
        fetch('http://172.25.29.70:92/API/Cricket/' + mURL + '/' + mName + '/GetTeams')
            .then(response => response.json() as Promise<any[]>)
            .then(data => {
                this.setState({ forecasts: data, loading: false });
            });
    }
    //static getPlayerScore(arg0: any, arg1: any): any {
    //    fetch('http://172.25.29.70:92/API/Cricket/' + mName + '/' + mURL + '/GetPlayerScore')
    //        .then(response => response.json() as Promise<any>)
    //        .then(data => {
    //            this.setState({ score: data, loading: false });
    //        });
    //}
    getPlayerScore(mName: string, mURL: string) {
        fetch('http://172.25.29.70:92/API/Cricket/' + mName + '/' + mURL + '/GetPlayerScore')
            .then(response => response.json() as Promise<any>)
            .then(data => {
                this.setState({ score: data, loading: false });
            });
        //console.log(score);
    }

    public render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.renderMatchCard(this.state.forecasts, this.state.score, this.state.MID);

        return <div>
            <div className='row' style={{ margin: '10px' }}>
                <h1>Current Matches</h1>
            </div>
            <div >
                {contents}
            </div>

        </div>;
    }


    private renderMatchCard(Matches: Teams, score: Score, mid: string) {
        debugger
        let R;
        return <div className='container'>
            <div>
                {Matches.Team.map(inning =>
                    <div>
                        <div className='col-lg-6' style={{ padding: '1px' }} key={inning.TeamName}>
                            <div key={inning.TeamName}>
                                <br />
                                <h3 className='card-title truncate' style={{ color: '#005694' }}><span className='label label-default'>{inning.TeamName} (Playing 11)</span></h3>
                                <div>
                                    <table className='table table-sm'>
                                        <tbody>
                                            {inning.Playing.map(BM =>
                                                <div>
                                                    <PlayrScore name={BM.Name} matchId={mid} image={BM.ImageURL} />
                                                </div>
                                            )}
                                            <h3 className='card-title truncate' style={{ color: '#005694' }}><span className='label label-default'>Bench</span></h3>
                                            {inning.Bench.map(BM =>
                                                <div>
                                                    <PlayrScore name={BM.Name} matchId={mid} image={BM.ImageURL} />
                                                </div>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>;
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
