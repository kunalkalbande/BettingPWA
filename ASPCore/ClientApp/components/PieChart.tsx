import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Doughnut, Bar, Line, Pie } from 'react-chartjs-2';
import 'isomorphic-fetch';

interface DashboardExampleState {
    //Sscoreboard: any;
    //loading: boolean;
    //data: any;
    //doughData: any;
    predictions: any;
    Sscoreboard: any;
    loading: boolean;
    MID: string;
    MName: string;
    fowData: any;
    doughData: any;
    team1: string;
    team2: string;

        
    MVenue: string;
    MDate: string;
}

const options = {
    title: {
        display: true,

        text: "Predicted Win Probability",
        fontFamily: "Roboto",
        fontSize: 20,
    }
}

export class PieChart extends React.Component<RouteComponentProps<{}>, DashboardExampleState> {
    constructor() {
        super();
        //this.state = { data: [], Sscoreboard: null, loading: true };
        this.state = { predictions: [], fowData: null, doughData: null, Sscoreboard: null, loading: true, MID: '', MName: '', team1: '', team2: '', MVenue: '', MDate: ''  };
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
        M_URL = '19161';
        M_Name = 'rsa-vs-ind-2nd-odi-india-tour-of-south-africa-2017-18';
        this.getScore(M_URL, M_Name);

        //var M_Name = purl.substring(purl.split("=", 2).join("=").length + 1);
        
        var M_Venue = purl.substring(purl.split("=", 4).join("=").length + 1);
        var M_Date = purl.substring(purl.split("=", 5).join("=").length + 1);
        //this.getPrediction(M_Name, M_Venue, M_Date);
        //this.getScore();

        //debugger;
        //let Score = this.state.Sscoreboard as IScoreboard;
        console.log("This is score : " + this.state.Sscoreboard);


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
    }

    getScore(mURL: string, mName: string) {

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

        console.log("Match Nae" + this.state.MName);


        debugger;
        fetch('http://172.24.10.237:555/GetPredictedWinProbability?Team1=' + t1 + '&Team2=' + t2 + '&Ground=' + ground + '&MatchDate=' + date + '&Innings_Team1=1')
            .then(response => response.json() as Promise<any[]>)
            .then(data => {
                this.setState({ predictions: data, loading: false });
                console.log(data);
            });

        //   http://172.24.10.237:555/GetPredictedWinProbability?Team1=&Team2=&Ground=Dubai&MatchDate=Feb%2023,%2003:30%20PM%20LOCAL&Innings_Team1=1


        //fetch('http://172.25.29.70:92/API/Cricket/' + mURL + '/' + mName + '/GetTeams')
        //    .then(response => response.json() as Promise<any[]>)
        //    .then(data => {
        //        this.setState({ forecasts: data, loading: false });
        //    });
    }

    public render() {

        

        this.setState({

            
            doughData: {
                
                labels: [
                    'India',                    
                    'South Africa'
                    //this.state.team1,
                    //this.state.team2
                ],
                datasets: [{
                    //data: [300, 50, 100],
                    //data: ['80%', '20%'],
                    data: [80, 20],
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

        return <div className="chart">
            <Pie data={this.state.doughData} height={100} options={options}/>

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