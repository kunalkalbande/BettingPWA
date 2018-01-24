import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import 'isomorphic-fetch';
//import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'bootstrap';


interface DashboardExampleState {
    forecasts: any;
    loading: boolean;
    runs: any;
}

export class PlayerList extends React.Component<RouteComponentProps<{}>, DashboardExampleState> {
    constructor() {
        super();

        this.state = { forecasts: [], loading: true, runs:[] };
        
        fetch('http://172.25.29.70:92/API/Cricket/19352/BangladeshvsZimbabwe/GetTeams')
            .then(response => response.json() as Promise<any[]>)
            .then(data => {
                this.setState({ forecasts: data, loading: false });
            });
        console.log(this.state.forecasts);

        fetch('http://172.25.29.70:92/API/Cricket/Hamilton%20Masakadza/19352/GetPlayerScore')
            .then(response => response.json() as Promise<any>)
            .then(data => {
                this.setState({ runs: data, loading: false });
            });

    }
    

    public render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : PlayerList.renderMatchCard(this.state.forecasts, this.state.runs);

        return <div>
            <div className='row' style={{ margin: '10px' }}>
                <h1>Current Matches</h1>
            </div>
            <div >
                {contents}
            </div>

        </div>;
    }


    private static renderMatchCard(Matches: Teams, score: PlayerName) {
        debugger
        return <div className='container'>
            <div className='row'>
                {Matches.Team.map(Match =>
                    <div className='col-lg-6' style={{ padding: '1px' }}>
                        <div className='card text-center' style={{ backgroundColor: 'white', }}>
                            <div className='card-header'>
                                <h3 className='card-title truncate' style={{ color: '#005694' }}>{Match.TeamName} (Playing 11)</h3>
                            </div>
                            {Match.Playing.map(play =>
                                <div className='card-block' style={{ textAlign: 'center'}}>
                                    <div className="col-lg-6-sm-2">
                                    <div className="truncate" >
                                        <label style={{ fontSize: '20', color: '#82a0c6' }}>{play.Name}</label>
                                    </div>
                                        <img src={play.ImageURL} className="img-circle img-responsive" style={{ maxWidth: 100, maxHeight: 100, minHeight:100,minWidth:100 }}>
                                        </img>
                                    </div>
                                    <div className="col-lg-3-sm-2">
                                        <label style={{ fontSize: 10 }}>Runs Scored</label><br />
                                        <label style={{ fontSize: '20', color: '#333232' }}>{score.Runs}</label>
                                    </div>
                                    <div className="col-lg-3-sm-2">
                                    <label style={{ fontSize: 10 }}>Wickets Taken</label><br />
                                        <label style={{ fontSize: 20, color: '#333232' }}>{score.Wickets}</label>
                                    </div>
                                    </div>
                                )}
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
