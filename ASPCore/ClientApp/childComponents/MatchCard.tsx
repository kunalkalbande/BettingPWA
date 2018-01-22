import * as React from 'react';
import { RouteComponentProps } from 'react-router';


interface DashboardExampleState {
    IMatches: MatchDetails[];
    loading: boolean;
}

export default class MatchCard extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = { Name: this.props.Name };
    }
    public render() {
       
        return <div>
            <h1>Match</h1>
            {this.props.Name}
        </div>;
    }
}
interface MatchDetails {
    Details: string;
    Name: string;
    Status: string;
    URL: string;
}