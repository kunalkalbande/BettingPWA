import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import 'isomorphic-fetch';

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
            : Dashboard.renderForecastsTable(this.state.forecasts);

        return <div>
            <h1>Current Matches</h1>
            {contents}
        </div>;
    }

    private static renderForecastsTable(forecasts: MatchDetails[]) {
        return <table className='table'>
            <thead>
                <tr>
                    <th>Details</th>
                    <th>Name</th>
                    <th>Status</th>
                    <th>Summary</th>
                </tr>
            </thead>
            <tbody>
                {forecasts.map(forecast =>
                    <tr key={forecast.URL}>
                        <td>{forecast.Details}</td>
                        <td>{forecast.Name}</td>
                        <td>{forecast.Status}</td>
                        <td>{forecast.URL}</td>
                    </tr>
                )}
            </tbody>
        </table>;
    }
}

interface MatchDetails {
    Details: string;
    Name: string;
    Status: string;
    URL: string;
}
