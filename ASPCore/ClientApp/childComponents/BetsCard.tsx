import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink, withRouter, BrowserRouter } from 'react-router-dom';


interface BetsExampleState {
    IBets: Object;
    loading: boolean;
}

export class BetsCard extends React.Component<any, BetsExampleState> {
    constructor(props: any) {
        super(props);
        this.state = { IBets: new Object(), loading: true };
    }
    public render() {
        return <div className='col-xs-12 col-sm-6 col-md-5 col-lg-3' style={{ padding: '0px' }} key={Math.random()}>
      
            <div className='card text-center' style={{ backgroundColor: 'white', margin: 10 }}>
                <div className='card-header' data-toggle="tooltip" data-placement="bottom" title={(this.props.Bets as Bets).UserId}>
                    <h3 className='card-title truncate' style={{ color: '#005694' }}>{(this.props.Bets as Bets).TeamOne} vs {(this.props.Bets as Bets).TeamTwo}</h3>
                </div>
                <div className='card-block'>

                    <h5>Bet Amount  :   {(this.props.Bets as Bets).BetAmount}</h5>
                    <hr />
                    <h5>Betted Team :   {(this.props.Bets as Bets).BettedTeam}</h5>
                    
                </div>
                <div className='card-footer' style={{}} >
                    <div className="Primary">
                        
                          <h5>Result  :   NA </h5>
                    </div>
                </div>
            </div>
        </div>;
    }
}
interface Bets {
    BetId: string;
    UserId: string;
    TeamOne: string;
    TeamTwo: string;
    BettedTeam: string;
    BetAmount: string;
}