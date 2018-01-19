import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import MatchCard from '../childcomponents/MatchCard';

export class BetList extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div>
            <h1>Hello, world!</h1>
            <MatchCard />
        </div>;
    }
}
