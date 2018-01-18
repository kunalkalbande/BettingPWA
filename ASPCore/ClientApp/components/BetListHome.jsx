
import React, { Component } from 'react';
// import {
//     Grid, Row, Col,
//     FormGroup, ControlLabel, FormControl
// } from 'react-bootstrap';

import { BetList } from 'betlist.jsx'

import $ from 'jquery';


class BetListHome extends Component {
//comment test ss
    constructor() {
        super();
        this.state = {
            bets: []
        }
    }

    getBets() {
        $.ajax({
            url: 'http://172.25.29.70:92/API/Cricket/pat/myBets',
            dataType: 'json',
            cache: false,
            success: function (data) {
                this.setState({ bets: data }, function () {
                    console.log(this.state);
                });
            }.bind(this),
            error: function (xhr, status, err) {
                console.log(err);
            }
        })
    }

    componentWillMount() {
        this.getBets();
    }

    render() {
        return (
            <div className="content">
                <BetList bets={this.state.bets} />
            </div>
        );
    }
}

export default BetListHome;
