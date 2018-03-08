import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink, withRouter, BrowserRouter } from 'react-router-dom';

interface DashboardExampleState {
    IMatches: Object;
    loading: boolean;
}

export class MatchCard extends React.Component<any, DashboardExampleState> {
    constructor(props: any) {
        super(props);
        this.state = { IMatches: new Object(), loading: true };


    }

    public preventDefault(){
        
    }


    public render() {
        return <div className='col-xs-12 col-sm-6 col-md-5 col-lg-3' style={{ padding: '0px' }} key={(this.props.Match as Match).URL}>
            <div className='card text-center' style={{ backgroundColor: 'white', height: 280, margin: 10 }}>
                <div className='card-header' data-toggle="tooltip" data-placement="bottom" title={(this.props.Match as Match).Name}>
                    <h3 className='card-title truncate' style={{ color: '#005694' }}>{(this.props.Match as Match).Name}</h3>
                </div>
                <div className='card-block'>
                    <h4>{(this.props.Match as Match).Status}</h4>
                    <hr />
                    <p className='card-text'>{(this.props.Match as Match).Details}</p>
                </div>
                <div className='card-footer' style={{}} >
                    <div>
                        <Link to={"/PlayerList?mid=" + (this.props.Match as Match).URL + "&mname=" + (this.props.Match as Match).Name} className="btn btn-info btn-lg" disabled={(this.props.Match as Match).Status != 'Match will start soon.' ? false : true} style={(this.props.Match as Match).Status != 'Match will start soon.' ? { pointerEvents: '', margin: '2px' } : { pointerEvents: 'none', margin: '2px' }}>Team</Link>
                        <Link to={"/Scoreboard?mid=" + (this.props.Match as Match).URL + "&mname=" + (this.props.Match as Match).Name} className="btn btn-success btn-lg" disabled={(this.props.Match as Match).Status != 'Match will start soon.' ? false : true} style={(this.props.Match as Match).Status != 'Match will start soon.' ? { pointerEvents: '', margin: '2px' } : { pointerEvents: 'none', margin: '2px' }}>Score</Link>
                        <Link to={"/Bet?mid=" + (this.props.Match as Match).URL + "&mname=" + (this.props.Match as Match).Name + "&mscore=" + (this.props.Match as Match).Status.replace("/", "-") + "&mvenue=" + (this.props.Match as Match).OtherInfo.MatchVenue + "&mdate=" + (this.props.Match as Match).OtherInfo.MatchDate} className="btn btn-outline-warning btn-lg" disabled={(this.props.Match as Match).Status != 'Match will start soon.' ? false : true} style={(this.props.Match as Match).Status != 'Match will start soon.' ? { pointerEvents: '', margin: '2px' } : { pointerEvents: 'none', margin: '2px' }}>Bet</Link>
                        <Link to={"/Stats?mid=" + (this.props.Match as Match).URL + "&mname=" + (this.props.Match as Match).Name + "&mscore=" + (this.props.Match as Match).Status.replace("/", "-") + "&mvenue=" + (this.props.Match as Match).OtherInfo.MatchVenue + "&mdate=" + (this.props.Match as Match).OtherInfo.MatchDate} className="btn btn-outline-warning btn-lg" disabled={(this.props.Match as Match).Status != 'Match will start soon.' ? false : true} style={(this.props.Match as Match).Status != 'Match will start soon.' ? { pointerEvents: '', margin: '2px' } : { pointerEvents: 'none', margin:'2px' }}>chart</Link>
                    </div>
                </div>
            </div> 
        </div>;
    }
}
interface Match {
    Details: string;
    Name: string;
    Status: string;
    URL: string;
    OtherInfo: OtherInfo;
}

interface OtherInfo {
    MatchVenue: string;
    MatchDate: string;
    SeriesName: string;
}
