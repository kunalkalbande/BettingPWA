import * as React from 'react';
import { RouteComponentProps } from 'react-router';


interface DashboardExampleState {
    PScore: Object;
    str: string;

}

export class Child extends React.Component<any, DashboardExampleState> {
    constructor(props: any) {
        super(props);
        this.state = { PScore: new Object(), str: "test" };
        fetch('http://172.25.29.70:92/API/Cricket/Mashrafe%20Mortaza/18738/GetPlayerScore')
            .then(response => response.json() as Promise<PlayerScore>)
            .then(data => {
                this.setState({ PScore: data as PlayerScore });
                this.setState({ str: data.Name });
                console.log(this.state.PScore);
            });
    }

    public render() {
        return <div>
            <p>{this.props.name}- - {(this.state.PScore as PlayerScore).MatchId}</p>
        </div>;
    }

  
}
interface PlayerScore {
    MatchId: string;
    Name: string;
    Runs: string;
    Wickets: string;
}