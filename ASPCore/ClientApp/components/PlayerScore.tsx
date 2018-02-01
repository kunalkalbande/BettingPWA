import * as React from 'react';
import { RouteComponentProps } from 'react-router';


interface DashboardExampleState {
    PScore: Object;
    str: string;

}

export class PlayrScore extends React.Component<any, DashboardExampleState> {
    constructor(props: any) {
        super(props);
        this.state = { PScore: new Object(), str: "test" };
        fetch('http://172.25.29.70:92/API/Cricket/' + this.props.name + '/' + this.props.matchId + '/GetPlayerScore')
            .then(response => response.json() as Promise<PlayerScore>)
            .then(data => {
                this.setState({ PScore: data as PlayerScore });
                this.setState({ str: data.Name });
                console.log(this.state.PScore);
            });
    }

    public render() {
        return <div style={{ backgroundColor: "green" }}>
            <tr key={this.props.name} style={{ backgroundColor: "gray", width: "250" }}>
                <td>
                    <img src={this.props.image} className="img-circle img-responsive" style={{ maxWidth: 100, maxHeight: 100, minHeight: 100, minWidth: 100 }}>
                    </img>
                </td>
                <td>
                    <label style={{ fontSize: '17', color: '#82a0c6' }}>{this.props.name}</label>
                    <table>
                        <tr>
                            <td>
                                <label style={{ fontSize: 10 }}>Runs</label>
                            </td>
                            <td>
                                <label style={{ fontSize: 10 }}>Wickets</label>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className='text-center'>
                                    {(this.state.PScore as PlayerScore).Runs}
                                </div>
                            </td>
                            <td>
                                <div>
                                    {(this.state.PScore as PlayerScore).Wickets}
                                </div>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </div>;
    }


}
interface PlayerScore {
    MatchId: string;
    Name: string;
    Runs: string;
    Wickets: string;
}