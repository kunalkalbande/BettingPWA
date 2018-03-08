import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Doughnut, Bar, Line, Scatter } from 'react-chartjs-2';
import 'isomorphic-fetch';

interface DashboardExampleState {
    //Sscoreboard: any;
    //loading: boolean;
    //data: any;
    //doughData: any;

    Sscoreboard: any;
    loading: boolean;
    MID: string;
    MName: string;
    fowData: any;
    doughData: any;
    teamName1: string;
    teamName2: string;
    MScore: string;
}

const options = {
    title: {
        display: true,
        text: "Fall of Wickets",
        fontFamily: "Roboto",
        fontSize: 20,
    },
    scales: {
        yAxes: [{
            scaleLabel: {
                display: true,
                labelString: 'Runs',
                fontSize: 14,
            }
        }],
        xAxes: [{
            scaleLabel: {
                display: true,
                labelString: 'Overs',
                fontSize: 14,
            }
        }]
    }
}


export class Stats extends React.Component<RouteComponentProps<{}>, DashboardExampleState> {
    constructor() {
        super();
        //this.state = { data: [], Sscoreboard: null, loading: true };
        this.state = { fowData: null, doughData: null, Sscoreboard: null, loading: true, MID: '', MName: '', teamName1: '', teamName2: '', MScore: '' };
    }

    componentWillMount() {

        //var purl = window.location.href;
        //var pindex = purl.indexOf('=');
        //var M_URL = purl.substring(purl.split("=", 1).join("=").length + 1);
        //debugger;
        //var M_Name = purl.substring(purl.split("=", 2).join("=").length + 1);

        //var M_Score = purl.substring(purl.split("=", 3).join("=").length + 1);
        //var M_Venue = purl.substring(purl.split("=", 4).join("=").length + 1);
        //var M_Date = purl.substring(purl.split("=", 5).join("=").length + 1);
        //M_URL = M_URL.substring(0, M_URL.indexOf('&'));
        ////M_Name = M_Name.substring(0, M_Name.indexOf('&mscore'));
        //M_Name = M_Name.split('%20').join(' ');

        //this.setState({ MID: M_URL, });
        //this.setState({ MName: M_Name });

        debugger;
        var purl = window.location.href;
        var pindex = purl.indexOf('=');
        var M_URL = purl.substring(purl.split("=", 1).join("=").length + 1);
        var M_Name = purl.substring(purl.split("=", 2).join("=").length + 1);
        var M_Score = purl.substring(purl.split("=", 3).join("=").length + 1);
        M_URL = M_URL.substring(0, M_URL.indexOf('&'));
        M_Name = M_Name.substring(0, M_Name.indexOf('&mscore'));
        M_Name = M_Name.split('%20').join(' ');

        this.setState({ MScore: M_Score });
        this.setState({ MID: M_URL, });
        this.setState({ MName: M_Name });
        this.setState({ loading: false });
       
        //M_URL = '19161';
        //M_Name = 'rsa-vs-ind-2nd-odi-india-tour-of-south-africa-2017-18';
        this.getScore(M_URL, M_Name);

        //this.getScore();

        //debugger;
        //let Score = this.state.Sscoreboard as IScoreboard;
        console.log("This is score : " + this.state.Sscoreboard);
        
    }

    getScore(mURL: string, mName: string) {

        debugger;
        fetch('http://172.25.29.70:92/API/Cricket/' + mURL + '/' + mName + '/GetMatchScore')
            .then(response => response.json() as Promise<IScoreboard>)
            .then(data => {
                this.setState({ Sscoreboard: data, loading: false });
            });
    }

    //getScore(mURL: string, mName: string) {
    //getScore() {
    //    debugger;
    //    fetch('http://172.25.29.70:92/API/Cricket/' + '19160' + '/' + 'rsa-vs-ind-2nd-t20i-india-tour-of-south-africa-2017-18' + '/GetMatchScore/')
    //        .then(response => response.json() as Promise<IScoreboard>)
    //        .then(dataq => {
    //            this.setState({ Sscoreboard: dataq, loading: false });
    //            console.log("data API call : " + this.state.Sscoreboard);
    //            //console.log("Sscoreboard =" + (this.state.data as RootObject).MatchName);

    //        });

    //    //fetch('http://172.25.29.70:92/API/Cricket/' + mURL + '/' + mName + '/GetTeams')
    //    //    .then(response => response.json() as Promise<any[]>)
    //    //    .then(data => {
    //    //        this.setState({ forecasts: data, loading: false });
    //    //    });

    //}



    public render() {

        
        var innOneScores = [];
        var innTwoScores = [];
        var innThreeScores = [];
        var innFourScores = [];

        var innOneWicketOvers = [];
        var innTwoWicketOvers = [];
        var innThreeWicketOvers = [];
        var innFourWicketOvers = [];

        var team1, team2, totalScoreInn1Team1, totalScoreInn1Team2, totalScoreInn2Team1, totalScoreInn2Team2, innOneWicketAtOver, innTwoWicketAtOver, innThreeWicketAtOver, innFourWicketAtOver;

        var inningOneWicketAtScore;
        var inningTwoWicketAtScore;
        var inningThreeWicketAtScore;
        var inningFourWicketAtScore;

        //let contents = this.state.loading
        //    ? <p><em>Loading...</em></p>
        //    : Stats.renderGraphFallofWickets(this.state.Sscoreboard.FOW, this.state.Sscoreboard.InningInfo);

        if (this.state.Sscoreboard != null) {

            team1 = this.state.Sscoreboard.InningInfo[0].WhosInning;
            team1 = team1.substring(0, team1.indexOf(' Innings'));

            team2 = this.state.Sscoreboard.InningInfo[1].WhosInning;
            team2 = team2.substring(0, team2.indexOf(' Innings'));

            this.setState({ teamName1: team1, teamName2: team2});
            totalScoreInn1Team1 = this.state.Sscoreboard.InningInfo[0].Total;
            //totalScoreInn1Team1 = totalScoreInn1Team1.substring(totalScoreInn1Team1.indexOf('Total '), totalScoreInn1Team1.indexOf(' ('));
            totalScoreInn1Team1 = totalScoreInn1Team1.substring(7, totalScoreInn1Team1.indexOf(' (') - 2);

            totalScoreInn1Team2 = this.state.Sscoreboard.InningInfo[1].Total;
            //totalScoreInn1Team2 = totalScoreInn1Team2.substring(totalScoreInn1Team2.indexOf('Total '), totalScoreInn1Team2.indexOf(' ('));
            totalScoreInn1Team2 = totalScoreInn1Team2.substring(7, totalScoreInn1Team2.indexOf(' (') - 2);
        }


        if (this.state.Sscoreboard != null && this.state.Sscoreboard.FOW.innOne != null) {

            for (var i = 0; i < this.state.Sscoreboard.FOW.innOne.length; i++) {

                debugger;
                inningOneWicketAtScore = this.state.Sscoreboard.FOW.innOne[i];
                //var InningOneWicketAtScore = InningOneWicketAtScore.substring(InningOneWicketAtScore.split("-", 1).join("=").length + 1);
                inningOneWicketAtScore = inningOneWicketAtScore.substring(0, inningOneWicketAtScore.indexOf('-'));
                if (i == 0) {
                    innOneScores.push(0);
                }
                innOneScores.push(inningOneWicketAtScore);

                innOneWicketAtOver = this.state.Sscoreboard.FOW.innOne[i];
                //innOneWicketAtOver = innOneWicketAtOver.substring(innOneWicketAtOver.indexOf(',') + 2, innOneWicketAtOver.length - 2);
                innOneWicketAtOver = innOneWicketAtOver.substring(innOneWicketAtOver.indexOf(',') + 2, innOneWicketAtOver.indexOf(')'));
                innOneWicketOvers.push(innOneWicketAtOver);
            }

            if (innOneScores.length < 10) {
                innOneScores.push(totalScoreInn1Team1);
            }


        }


        if (this.state.Sscoreboard != null && this.state.Sscoreboard.FOW.innTwo != null) {

            for (var i = 0; i < this.state.Sscoreboard.FOW.innTwo.length; i++) {
                inningTwoWicketAtScore = this.state.Sscoreboard.FOW.innTwo[i];

                inningTwoWicketAtScore = inningTwoWicketAtScore.substring(0, inningTwoWicketAtScore.indexOf('-'));

                if (i == 0) {
                    innTwoScores.push(0);
                }
                innTwoScores.push(inningTwoWicketAtScore);

                innTwoWicketAtOver = this.state.Sscoreboard.FOW.innTwo[i];
                innTwoWicketAtOver = innTwoWicketAtOver.substring(innTwoWicketAtOver.indexOf(',') + 2, innTwoWicketAtOver.indexOf(')'));

                innTwoWicketOvers.push(innTwoWicketAtOver);

            }

            if (innTwoScores.length < 10) {
                innTwoScores.push(totalScoreInn1Team2);
            }

        }


        if (this.state.Sscoreboard != null && this.state.Sscoreboard.FOW.innThree != null) {

            for (var i = 0; i < this.state.Sscoreboard.FOW.innThree.length; i++) {
                inningThreeWicketAtScore = this.state.Sscoreboard.FOW.innThree[i];

                inningThreeWicketAtScore = inningThreeWicketAtScore.substring(0, inningThreeWicketAtScore.indexOf('-'));
                innThreeScores.push(inningThreeWicketAtScore);
            }

        }

        if (this.state.Sscoreboard != null && this.state.Sscoreboard.FOW.innFour != null) {

            for (var i = 0; i < this.state.Sscoreboard.FOW.innFour.length; i++) {
                inningFourWicketAtScore = this.state.Sscoreboard.FOW.innFour[i];
                //var dataInningOne = dataInningOne.substring(dataInningOne.split("-", 1).join("=").length + 1);
                inningFourWicketAtScore = inningFourWicketAtScore.substring(0, inningFourWicketAtScore.indexOf('-'));
                innFourScores.push(inningFourWicketAtScore);
            }

        }

        this.setState({

            fowData: {

                //title:  this.state.chartName,
                labels: ['0', '10', '15', '20', '25', '30', '35', '40', '45', '50'],
                datasets: [
                    {
                        //labels: ['0', '10', '15', '20', '25', '30', '35', '40', '45', '50'],
                        label: team2,

                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: 'rgba(255,255,0,1)',
                        borderColor: 'rgba(255,255,0,1)',
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: 'rgba(75,192,192,1)',
                        pointBackgroundColor: '#fff',
                        pointBorderWidth: 5,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                        pointHoverBorderColor: 'rgba(220,220,220,1)',
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: [
                            { x: innTwoWicketOvers[0], y: innTwoScores[0] },
                            { x: innTwoWicketOvers[1], y: innTwoScores[1] },
                            { x: innTwoWicketOvers[2], y: innTwoScores[2] },
                            { x: innTwoWicketOvers[3], y: innTwoScores[3] },
                            { x: innTwoWicketOvers[4], y: innTwoScores[4] },
                            { x: innTwoWicketOvers[5], y: innTwoScores[5] },
                            { x: innTwoWicketOvers[6], y: innTwoScores[6] },
                            { x: innTwoWicketOvers[7], y: innTwoScores[7] },
                            { x: innTwoWicketOvers[8], y: innTwoScores[8] },
                            { x: innTwoWicketOvers[9], y: innTwoScores[9] },
                            //{ x: 59, y: 49 },
                            //{ x: 80, y: 90 },
                            //{ x: 81, y: 29 },
                            //{ x: 56, y: 36 },
                            //{ x: 55, y: 25 },
                            //{ x: 40, y: 18 },
                        ],
                        //data: [23, 35]
                        //data: innTwoScores

                    },
                    {
                        //labels: ['2', '13', '13', '23', '27', '33', '37', '42', '47', '49'],
                        label: team1,
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: 'rgba(75,192,2,1)',
                        borderColor: 'rgba(75,192,2,1)',
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: 'rgba(5,2,2,1)',
                        pointBackgroundColor: '#bbb',
                        pointBorderWidth: 5,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                        pointHoverBorderColor: 'rgba(220,220,220,1)',
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: [
                            { x: innOneWicketOvers[0], y: innOneScores[0] },
                            { x: innOneWicketOvers[1], y: innOneScores[1] },
                            { x: innOneWicketOvers[2], y: innOneScores[2] },
                            { x: innOneWicketOvers[3], y: innOneScores[3] },
                            { x: innOneWicketOvers[4], y: innOneScores[4] },
                            { x: innOneWicketOvers[5], y: innOneScores[5] },
                            { x: innOneWicketOvers[6], y: innOneScores[6] },
                            { x: innOneWicketOvers[7], y: innOneScores[7] },
                            { x: innOneWicketOvers[8], y: innOneScores[8] },
                            { x: innOneWicketOvers[9], y: innOneScores[9] }
                            //{ x: 55, y: 65 },
                            //{ x: 49, y: 39 },
                            //{ x: 70, y: 80 },
                            //{ x: 71, y: 19 },
                            //{ x: 46, y: 26 },
                            //{ x: 45, y: 15 },
                            //{ x: 30, y: 8 },
                        ]
                        //data: innOneScores
                        //data: [30, 65]
                    }
                ]
            }
        });


        debugger;
        return <div className='container'>
            <div style={{margin: 50 }} >
                <h3 >{this.state.MName}</h3>
                </div>
            <div><h4>{this.state.MScore.substring(0, this.state.MScore.indexOf('&mvenue')).split('%20').join(' ')}</h4></div>
            <div className="chart">
            <Scatter data={this.state.fowData} options={options} />

            </div>
        </div>;

        //return <div>
        //    <div className='row' style={{ margin: '10px' }}>
        //        <h1>Scorecard</h1>
        //    </div>
        //    <div >
        //        {contents}
        //    </div>

        //</div>;
    }


    private static renderGraphFallofWickets(fallWickets: FOW, innings: InningInfo[]) {
        //debugger;
        //this.setState({

        //    data: {

        //        labels: ['0', '10', '15', '20', '25', '30', '35', '40', '45', '50'],
        //        datasets: [
        //            {

        //                label: 'India',

        //                fill: false,
        //                lineTension: 0.1,
        //                backgroundColor: 'rgba(255,255,0,1)',
        //                borderColor: 'rgba(255,255,0,1)',
        //                borderCapStyle: 'butt',
        //                borderDash: [],
        //                borderDashOffset: 0.0,
        //                borderJoinStyle: 'miter',
        //                pointBorderColor: 'rgba(75,192,192,1)',
        //                pointBackgroundColor: '#fff',
        //                pointBorderWidth: 5,
        //                pointHoverRadius: 5,
        //                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        //                pointHoverBorderColor: 'rgba(220,220,220,1)',
        //                pointHoverBorderWidth: 2,
        //                pointRadius: 1,
        //                pointHitRadius: 10,
        //                data: [0, 20, 35, 47, 159, 180, 211, 256, 275, 290]
        //            },
        //            {

        //                label: 'South Africa',
        //                fill: false,
        //                lineTension: 0.1,
        //                backgroundColor: 'rgba(75,192,2,1)',
        //                borderColor: 'rgba(75,192,2,1)',
        //                borderCapStyle: 'butt',
        //                borderDash: [],
        //                borderDashOffset: 0.0,
        //                borderJoinStyle: 'miter',
        //                pointBorderColor: 'rgba(5,2,2,1)',
        //                pointBackgroundColor: '#bbb',
        //                pointBorderWidth: 5,
        //                pointHoverRadius: 5,
        //                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        //                pointHoverBorderColor: 'rgba(220,220,220,1)',
        //                pointHoverBorderWidth: 2,
        //                pointRadius: 1,
        //                pointHitRadius: 10,
        //                data: [0, 13, 35, 40, 139, 160, 201, 226, 245, 251]
        //            }
        //        ]
        //    },
        //    doughData: {
        //        labels: [
        //            'Red',
        //            'Green',
        //            'Yellow'
        //        ],
        //        datasets: [{
        //            data: [300, 50, 100],
        //            backgroundColor: [
        //                '#FF6384',
        //                '#36A2EB',
        //                '#FFCE56'
        //            ],
        //            hoverBackgroundColor: [
        //                '#FF6384',
        //                '#36A2EB',
        //                '#FFCE56'
        //            ]
        //        }]
        //    }
        //});

        //return <div className="chart">
        //    <Line data={this.state.data} height={100} />

        //</div>;

    }



}

//interface IFallWicketsStat {
//    FallOfWicket: IFallWicket[];
//}

//interface IFallWicket {
//    FallOfWickets: ID2P1String[];
//}
////d2p1:string
//interface ID2P1String {
//    d2p1: string;
//}



interface IScoreboard {
    InningInfo: InningInfo[];
    MatchName: string;
    MatchURL: string;
    OtherInfo: OtherInfo;
    FallOfWickets: any[];
    FOW: FOW;
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

interface FOW {
    innOne: string[];
    innTwo: string[];
    innThree: string[];
    innFour: string[];
}

interface OtherInfo {
    MatchVenue: string;
    MatchDate: string;
    SeriesName: string;
}