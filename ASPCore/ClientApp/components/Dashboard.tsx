import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import 'isomorphic-fetch';
//import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'bootstrap';


interface DashboardExampleState {
    forecasts: MatchDetails[];
    loading: boolean;
}

export class Dashboard extends React.Component<RouteComponentProps<{}>, DashboardExampleState> {
    constructor() {
        super();
        this.state = { forecasts: [], loading: true };

        fetch('http://172.25.29.70:92/API/Cricket/GetCurrentMatches')
            .then(response => response.json() as Promise<MatchDetails[]>)
            .then(data => {
                this.setState({ forecasts: data, loading: false });
            });
    }

    public render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : Dashboard.renderMatchCard(this.state.forecasts);

        return <div>
            <div className='row' style={{ margin: '10px' }}>
                <h1>Current Matches</h1>
            </div>
            <div >
                {contents}
            </div>

        </div>;
    }


    private static renderMatchCard(Matches: MatchDetails[]) {
        return <div className='container'>
            <div className='row'>
                {Matches.map(Match =>
                    <div className='col-lg-3' style={{ padding: '1px' }}>
                        <div className='card text-center' style={{ backgroundColor: 'white', height: 280, margin: 10 }}>
                            <div className='card-header'>
                                <h3 className='card-title truncate' style={{ color: '#005694' }}>{Match.Name}</h3>
                            </div>
                            <div className='card-block'>
                                <h4>{Match.Status}</h4>
                                <hr />
                                <p className='card-text'>{Match.Details}</p>
                                
                            </div>
                            <div className='card-footer text-muted'>
                                <a href="#" className='btn btn-info btn-lg'>Teams</a>&nbsp;
                                <a href="#" className='btn btn-success btn-lg'>Score</a>&nbsp;
                                <a href="#" className='btn btn-outline-warning btn-lg'>Bet</a>
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
