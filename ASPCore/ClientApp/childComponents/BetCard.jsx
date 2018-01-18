import React, { Component } from 'react';
import { Row, Col, Label, Glyphicon, Badge } from 'react-bootstrap';

export class BetCard extends Component {
    render() {
        return (
            <Col lg={3} sm={6}>
                <div className="card card-stats">
                    <div className="content" style={{ cursor: 'pointer' }}>
                        <Row>
                            <Col xs={12}>
                                <div className="text-center">
                                    {/* <img className="img img-responsive border-gray" src={this.props.team1Img} alt="..." style={{ maxHeight: "60px", margin: "auto" }} />
                                    <hr style={{ margin: "1px" }} /> */}
                                    <div id="dvimg" className="circle-avatar" style={{
                                        backgroundImage: "url(" + this.props.bet['imageURL'] + ")"
                                    }}></div>
                                    <div className="truncate" style={{ fontSize: '20', color: '#0e2f44' }}>
                                        {this.props.PlayerName}
                                    </div>
                                    <div className="truncate">
                                        ({this.props.Match})
                                </div>
                                </div>
                            </Col>
                        </Row>
                        <div className="footer">
                            <hr />
                            <div className="stats truncate" style={{ color: "#633818" }}  >
                                Amount : {this.props.Amount} &nbsp;
                                Type : {this.props.BetType}

                            </div>
                            <hr style={{ margin: "1px" }} />
                            <div className="stats truncate" style={{ color: "#633818" }} >
                                Bet value : {this.props.BetValue}
                            </div>
                        </div>
                    </div>
                </div>
            </Col>            
        );
    }
}

export default BetCard;
