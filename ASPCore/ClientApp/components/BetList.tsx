import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import BetCard from '../childcomponents/betcard';

export class BetList extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div>
            <h1>Hello, world!</h1>
            <BetCard />
        </div>;
    }
}
