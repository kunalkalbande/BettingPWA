import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import 'isomorphic-fetch';
//import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'bootstrap';
import { PlayrScore } from './playerscore';
import { Doughnut, Bar, Line, Pie } from 'react-chartjs-2';

interface DashboardExampleState {
    predictions: any;
    loading: boolean;
    runs: any;
    MID: string;
    MName: string;
    MScore: string;
    score: any;
    selectedTeam: string;
    betAmount: string;
    MVenue: string;
    MDate: string;
    team1: string;
    team2: string;
    pieData: any;
}

const options = {
    title: {
        display: true,

        text: "Predicted Win Probability",
        fontFamily: "Roboto",
        fontSize: 20,
    }
}

export class Bet extends React.Component<RouteComponentProps<{}>, DashboardExampleState> {

    constructor() {
        super();
        this.state = { predictions: [80,20], loading: true, runs: null, MID: '', MName: '', score: null, selectedTeam: '', betAmount: '', MScore: '', MVenue: '', MDate: '', pieData: null, team1: '', team2: ''};

    }

    componentWillMount() {
        var purl = window.location.href;
        var pindex = purl.indexOf('=');
        var M_URL = purl.substring(purl.split("=", 1).join("=").length + 1);
        var M_Name = purl.substring(purl.split("=", 2).join("=").length + 1);
        var M_Score = purl.substring(purl.split("=", 3).join("=").length + 1);
        var M_Venue = purl.substring(purl.split("=", 4).join("=").length + 1);
        var M_Date = purl.substring(purl.split("=", 5).join("=").length + 1);
        M_URL = M_URL.substring(0, M_URL.indexOf('&'));
        M_Name = M_Name.substring(0, M_Name.indexOf('&mscore'));
        M_Name = M_Name.split('%20').join(' ');

        this.setState({ MID: M_URL, });
        this.setState({ MName: M_Name });
        this.setState({ MScore: M_Score });
        this.setState({ MVenue: (M_Venue.substring(M_Venue.indexOf(','), M_Venue.indexOf('&mdate=')).replace("%20", " ")).replace(",", "").trim() });
        this.setState({ MDate: M_Date });
        this.setState({ loading: false });

        this.getPrediction(M_Name, M_Venue, M_Date);
        console.log('purl ' + purl);
        console.log('M_Score ' + M_Score);
        console.log('M_URL ' + M_URL);
        console.log('Team1 ' + M_Name);

        //console.log('Ground_Country ' + (M_Venue.substring(M_Venue.indexOf(','), M_Venue.indexOf('&mdate=')).replace("%20", " ")).replace(",", "").trim());
        //console.log('M_Date ' + M_Date.replace("%20", "-").substring(0, 6));

        //var index = this.state.MName.indexOf("VS");  // Gets the first index where a space occours
        //var  team1 = this.state.MName.substring(0, index); // Gets the first part
        //var team2 = this.state.MName.substring(index + 1);  // Gets the text part 
        //  console.log(M_Name.toString());
        //console.log("team1  " + M_Name.substring(0, M_Name.indexOf("VS")));
        //console.log("team2" + M_Name.substring(M_Name.indexOf("VS"), M_Name.length));
    }

    getPrediction(mName: string, mVenue: string, mDate: string) {
        debugger;
        let teams: string[];
        //let res = this.state.MName.trim().substring(this.state.MName.indexOf(0), this.state.MName.indexOf("vs"));

        //this.state.MName.substring(0, this.state.MName.indexOf("VS"))
        //this.state.MName.substring(this.state.MName.indexOf("VS"), this.state.MName.length) 

        let ground = (mVenue.substring(mVenue.indexOf(','), mVenue.indexOf('&mdate=')).replace("%20", " ")).replace(",", "").trim()
        let date = mDate.replace("%20", "-").substring(0, 6);
        let t1 = mName.substring(0, mName.indexOf("vs")).trim();
        let t2 = mName.substring(mName.indexOf("vs") + 2, mName.length).trim();

        this.setState({ team1: t1, team2: t2 });

        console.log("Match Name" + this.state.MName);


        debugger;
        //fetch('http://172.24.10.237:555/GetPredictedWinProbability?Team1=' + t1 + '&Team2=' + t2 + '&Ground=' + ground + '&MatchDate=' + date + '&Innings_Team1=1')
        //    .then(response => response.json() as Promise<any[]>)
        //    .then(data => {
        //        this.setState({ predictions: data, loading: false });
        //        console.log(data);
        //    });

        //   http://172.24.10.237:555/GetPredictedWinProbability?Team1=&Team2=&Ground=Dubai&MatchDate=Feb%2023,%2003:30%20PM%20LOCAL&Innings_Team1=1


        //fetch('http://172.25.29.70:92/API/Cricket/' + mURL + '/' + mName + '/GetTeams')
        //    .then(response => response.json() as Promise<any[]>)
        //    .then(data => {
        //        this.setState({ forecasts: data, loading: false });
        //    });
    }




    public render() {

        

        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.renderMatchCard();

        return <div>
            <div className='row' style={{ margin: '10px' }}>
                <h1>Bet</h1>
            </div>
            <div >
                {contents}
            </div>
            
        </div>;
    }

    changeSelectedTeam(event: React.FormEvent<HTMLSelectElement>) {
        var safeSearchTypeValue: string = event.currentTarget.value;
        console.log(safeSearchTypeValue); // in chrome => B
        this.setState({
            selectedTeam: safeSearchTypeValue

        });

    }

    changeBetAmount(event: React.FormEvent<HTMLInputElement>) {
        var betAmtVal: string = event.currentTarget.value;
        console.log(betAmtVal); // in chrome => B
        this.setState({
            betAmount: betAmtVal

        });

    }


    private renderMatchCard() {

        this.setState({


            pieData: {

                labels: [
                    //'India',
                    //'South Africa'
                    this.state.team1,
                    this.state.team2
                ],
                datasets: [{
                    //data: [300, 50, 100],
                    //data: ['80%', '20%'],
                    data: [this.state.predictions[0], this.state.predictions[1]],
                    fill: true,
                    backgroundColor: [
                        '#FF6384',

                        '#FFCE56'
                    ],
                    display: true,
                    hoverBackgroundColor: [
                        '#FF6384',

                        '#FFCE56'
                    ]
                }]
            }
        });
        let R;
        return <div className='container'>


            <div className='card text-center' style={{ backgroundColor: 'white', margin: 10 }}>
                <span style={{ visibility: 'hidden' }}>
                    {R = this.state.MName.split("vs")}
                </span>
                <div className='card-header' data-toggle="tooltip" data-placement="bottom" title={this.state.MName}>
                    <h3 className='card-title truncate' style={{ color: '#005694' }}>{this.state.MName}</h3>
                </div>
                <div className='card-block'>
                    <h4>{this.state.MScore.substring(0, this.state.MScore.indexOf('&mvenue')).split('%20').join(' ')}</h4>


                    <hr />
                    <div className='card-text'>
                        <div >   <label>Select a Team to Bet</label>
                            <select className="form-control" id="searchType" onChange={e => this.changeSelectedTeam(e)} value={this.state.selectedTeam}>
                                <option > Select a Team to Bet</option>
                                <option value={R[0]}>{R[0]}</option>
                                <option value={R[1]}>{R[1]}</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Bet Amount</label>
                            <input type="tel" maxLength={5} className="form-control" id="betamount" onChange={e => this.changeBetAmount(e)} value={this.state.betAmount} aria-describedby="betamount" placeholder="Enter Bet Amount"></input>
                        </div>
                        <div className="chart" >
                            <Pie data={this.state.pieData} options={options} />

                        </div>
                    </div>
                </div>
                <div className='card-footer' style={{}} >
                    <div>
                        <button type="submit" className="btn btn-primary" >Submit</button>
                    </div>
                </div>
            </div>


        </div>;

    }

    //registerBet(selectedTeam, betAmount, teamOne, teamTwo) {
    //    //debugger;

    //    fetch('http://172.25.29.70:92/API/Cricket/RegisterMatchBet', {
    //        method: 'POST',
    //        headers: {
    //            'Accept': 'application/json',
    //            'Content-Type': 'application/json',
    //        },
    //        body: JSON.stringify({
    //            BetId: "76597875-cce5-4f8e-b3c8-22667ebb33d4",
    //            UserId: "pat",
    //            TeamOne: teamOne,
    //            TeamTwo: teamTwo,
    //            BettedTeam: selectedTeam,
    //            BetAmount: betAmount
    //        })

    //    }).then(res => {
    //        console.log(res => res.json() as Promise<any[]>);
    //        alert("Your Bet registered successfully..!");
    //        return res;
    //    }).catch(err => console.log(err));

    //}
}



interface Teams {
    MatchName: string;
    Team: Team[];
}

interface Team {
    TeamName: string;
    Bench: PlayerName[];
    Playing: PlayerName[];
}

interface PlayerName {
    ID: string;
    ImageURL: string;
    Name: string;
    ProfileURL: string;
    Runs: string;
    Wickets: string;
}
interface Score {
    MatchId: string;
    Name: string;
    Runs: string;
    Wickets: string;
}
