import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import MatchCard from '../childcomponents/MatchCard';


interface DashboardExampleState {
    IMatches: MatchDetails[];
    loading: boolean;
}

export default class MatchList extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = { Matches: this.props.Matches };
    }
    public render() {
        return <div>
            <h1>Match List</h1>

            {this.state.Matches.map((Match: any) =>
                <MatchCard Name={Match.Name} />
            )}
        </div>;
    }
}

interface MatchDetails {
    Details: string;
    Name: string;
    Status: string;
    URL: string;
}
