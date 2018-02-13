import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import 'isomorphic-fetch';

import { Doughnut, Bar, Line, Pie } from 'react-chartjs-2';

//import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'bootstrap';


interface DashboardExampleState {
    Sscoreboard: any;
    loading: boolean;
    MID: string;
    MName: string;
    Runs: string[];
    PName: string[];
    piedata: any;
}

export class Stats extends React.Component<RouteComponentProps<{}>, DashboardExampleState> {
    constructor() {
        super();
        this.state = { Sscoreboard: null, loading: true, MID: '', MName: '', Runs: [], PName: [], piedata: null };
        
    }

  
    componentWillMount() {

        var purl = window.location.href;
        var pindex = purl.indexOf('=');
        //var strp = purl.substring(pindex + 1);
        var M_URL = purl.substring(purl.split("=", 1).join("=").length + 1);
        var M_Name = purl.substring(purl.split("=", 2).join("=").length + 1);
        M_URL = M_URL.substring(0, M_URL.indexOf('&'));
        //console.log('Name : ' + M_Name);
        //console.log('URL : ' + M_URL);
        this.setState({ MID: M_URL });
        this.setState({ MName: M_Name });
        this.getScore(M_URL, M_Name);
        //console.log("Scoreboard Props : " + this.props.params);
    }

    getScore(mURL: string, mName: string) {
        fetch('http://172.25.29.70:92/API/Cricket/' + mURL + '/' + mName + '/GetMatchScore')
            .then(response => response.json() as Promise<IScoreboard>)
            .then(data => {
                this.setState({ Sscoreboard: data, loading: false });
            });
    }

    newpiData = function () {
        return parseFloat('sadasd');
};

    public render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.renderMatchCard(this.state.Sscoreboard.InningInfo);

        return <div>
            <div className='row' style={{ margin: '10px' }}>
                <h1>Scorecard</h1>
                {this.setState({
                    piedata: {
                        labels: this.state.PName,
                        datasets: [{
                            data: this.state.Runs,
                            backgroundColor: [
                                '#FF6384',
                                '#36A2EB',
                                '#FFCE56',
                                '#4286f4',
                                '#6bc625',
                                '#646b75',
                                '#d60823',
                                '#16e2e2',
                                '#b6d6d6',
                                '#2d47d8',
                                '#a6aedb'
                            ],
                            hoverBackgroundColor: [
                                '#FF6384',
                                '#36A2EB',
                                '#FFCE56',
                                '#4286f4',
                                '#6bc625',
                                '#646b75',
                                '#d60823',
                                '#16e2e2',
                                '#b6d6d6',
                                '#2d47d8',
                                '#a6aedb'
                            ]
                        }]
                    }
                })}
                
            </div>
            <div >
                {contents}
            </div>

        </div>;
    }


    private renderMatchCard(innings: InningInfo[]) {
        var run : any[] = [] ;
        var name: any[] = [];
        var newStr = '';
        return <div className='container'>
            <div>
                {innings.map(inning =>
                    <div key={inning.WhosInning}>
                        <br />
                        <h3 className='card-title truncate' style={{ color: '#005694' }}><span className='label label-default'>{inning.WhosInning}</span></h3>
                        <table className='table table-sm'>
                            
                            <tbody>
                                {inning.Batsmen.map(BM =>
                                    <tr key={BM.Name}>
                                        <td>{BM.Name}</td>
                                        <td>{BM.Runs}</td>
                                    </tr>
                                )}
                            </tbody>

                        </table>



                        <div className='hidden'>
                            {inning.Batsmen.map(BM =>
                                <div>
                                    {run.push(BM.Runs)}
                                    {name.push(BM.Name)}
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
           
            {this.setState({ Runs: run, PName: name })}
            {console.log(this.state.Runs)}
            {console.log(this.state.PName)}
            <div>
                <Doughnut data={this.state.piedata}/>
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