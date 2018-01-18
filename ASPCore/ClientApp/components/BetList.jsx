import React, { Component } from 'react';
import {
    Grid, Row, Col, Button
} from 'react-bootstrap';
import { BetCard } from '../childcomponents/betcard.jsx';
import { withRouter } from 'react-router-dom';

export class BetList extends Component {

    constructor(props) {

        super(props);
        this.state = {
            matchId: '0'
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        //alert('asd');
        //event.preventDefault()
        //this.props.history.push('/PlayerHome')
    }


    render() {
        let bet_items;
        if (this.props.bets) {
            bet_items = this.props.bets.map(bet => {
                //console.log(bet_items);
                return (
                    <div onClick={this.handleClick}>
                        <BetCard
                            PlayerName={bet["name"]}
                            key={bet.BetId}
                            Match={bet["Match"]}
                            Amount={bet["Amount"]}
                            BetType={bet["BetType"]}
                            BetValue={bet["BetValue"]}
                            bet={bet}
                        />
                    </div>
                );
            });
        }
        else {
            console.log('not found');
        }

        function CheckNullReturnBlank(item) {
            return item = (item === '' || item === null) ? '...' : item;
        }

        return (
            <div className="content">
                <Grid fluid>
                    <Row>
                        {bet_items}
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default BetList;
