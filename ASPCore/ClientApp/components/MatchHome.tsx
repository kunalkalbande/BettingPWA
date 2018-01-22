/// <reference path="matchlist.tsx" />
import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import MatchList from './MatchList';

interface MatchHomeState {
    Matches: MatchDetails[];
    loading: boolean;
}
export class MatchHome extends React.Component<RouteComponentProps<{}>, MatchHomeState> {

    constructor() {
        super();
        this.state = { Matches: [], loading: true };

        fetch('http://172.25.29.70:92/API/Cricket/GetCurrentMatches')
            .then(response => response.json() as Promise<MatchDetails[]>)
            .then(data => {
                this.setState({ Matches: data, loading: false });
            });
    }

    public render() {
        return <div>
            <h1>MatchHome</h1>
            <MatchList Matches={this.state.Matches} />
        </div>;
    }

    //private static renderForecastsTable(Matches: MatchDetails[]) {
    //    return <table className='table'>
    //            <thead>
    //                <tr>
    //                    <th>Details</th>
    //                    <th>Name</th>
    //                    <th>Status</th>
    //                    <th>Summary</th>
    //                </tr>
    //            </thead>
    //            <tbody>
    //                {Matches.map(Match =>
    //                    <tr key={Match.URL}>
    //                        <td>{Match.Details}</td>
    //                        <td>{Match.Name}</td>
    //                        <td>{Match.Status}</td>
    //                        <td>{Match.URL}</td>
    //                    </tr>
    //                )}
    //            </tbody>
    //        </table>;
    //}
}

interface MatchDetails {
    Details: string;
    Name: string;
    Status: string;
    URL: string;
}