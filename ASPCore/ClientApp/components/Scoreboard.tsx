import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import 'isomorphic-fetch';
//import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'bootstrap';


interface DashboardExampleState {
    Sscoreboard: any;
    loading: boolean;
}

export class Scoreboard extends React.Component<RouteComponentProps<{}>, DashboardExampleState> {
    constructor() {
        super();
        this.state = { Sscoreboard: null, loading: true };

        fetch('http://172.25.29.70:92/API/Cricket/19352/ban-vs-zim-5th-match-sri-lanka-and-zimbabwe-in-bangladesh-tri-series-2018/GetMatchScore')
            .then(response => response.json() as Promise<IScoreboard>)
            .then(data => {
                this.setState({ Sscoreboard: data, loading: false });
            });
    }

    public render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : Scoreboard.renderMatchCard(this.state.Sscoreboard.InningInfo);

        return <div>
            <div className='row' style={{ margin: '10px' }}>
                <h1>Scorecard</h1>
            </div>
            <div >
                {contents}
            </div>

        </div>;
    }


    private static renderMatchCard(innings: InningInfo[]) {
        return <div className='container'>
            <div>
                {innings.map(inning =>
                    <div>
                        <br />
                        <h3 className='card-title truncate' style={{ color: '#005694' }}><span className='label label-default'>{inning.WhosInning}</span></h3>

                        <div>
                            <table className='table table-sm'>
                                <thead>
                                    <tr className='bg-info'>
                                        <th>Batsman</th>
                                        <th></th>
                                        <th>R</th>
                                        <th>B</th>
                                        <th>4s</th>
                                        <th>6s</th>
                                        <th>SR</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {inning.Batsmen.map(BM =>
                                        <tr key={BM.Name}>
                                            <td>{BM.Name}</td>
                                            <td>{BM.WicketTakerInfo}</td>
                                            <td>{BM.Runs}</td>
                                            <td>{BM.Balls}</td>
                                            <td>{BM.TotalFours}</td>
                                            <td>{BM.TotalSixes}</td>
                                            <td>{BM.SR}</td>
                                        </tr>
                                    )}
                                    <tr>
                                        <td colSpan={7}>
                                            {inning.Extras}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan={7} className='table-active'>
                                            {inning.Total}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan={7}>
                                            {inning.DidNotBat}
                                        </td>
                                    </tr>
                                </tbody>

                            </table>
                        </div>


                        <div>
                            <table className='table table-sm'>
                                <thead>
                                    <tr className='bg-info'>
                                        <th>Bowler</th>
                                        <th>O</th>
                                        <th>M</th>
                                        <th>R</th>
                                        <th>W</th>
                                        <th>NB</th>
                                        <th>WD</th>
                                        <th>ECO</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {inning.BowlersInfo.map(BM =>
                                        <tr key={BM.Name}>
                                            <td>{BM.Name}</td>
                                            <td>{BM.Over}</td>
                                            <td>{BM.Maiden}</td>
                                            <td>{BM.Runs}</td>
                                            <td>{BM.Wickets}</td>
                                            <td>{BM.NoBall}</td>
                                            <td>{BM.WideBall}</td>
                                            <td>{BM.Economy}</td>
                                        </tr>
                                    )}
                                    <tr>
                                        <td colSpan={8}>
                                        </td>
                                    </tr>
                                </tbody>

                            </table>
                        </div>
                    </div>
                )}
            </div>
        </div>;
    }

}


interface IScoreboard {
    InningInfo: InningInfo[];
    MatchName: string;
    MatchURL: string;
}

interface InningInfo {
    WhosInning: string;
    Batsmen: Batsman[];
    BowlersInfo: BowlersInfo[];
    Total: string;
    Extras: string;
    DidNotBat: string;
    MatchId: string;
}

interface Batsman {
    Name: string;
    WicketTakerInfo: string;
    IsNotOut: boolean;
    Runs: string;
    Balls: string;
    TotalFours: string;
    TotalSixes: string;
    SR: string;
    MatchId: string;
}

interface BowlersInfo {
    Name: string;
    Over: string;
    Maiden: string;
    Runs: string;
    Wickets: string;
    NoBall: string;
    WideBall: string;
    Economy: string;
    MatchId: string;
}