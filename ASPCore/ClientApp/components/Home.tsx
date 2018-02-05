import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export class Home extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="text-center text-uppercase">
                            <h2>My Strengths</h2>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-6 col-sm-offset-3 col-md-4 col-md-offset-4">
                        <div className="bar-chart">
                            <div className="legend">
                                <div className="item">
                                    <h4>Newbie</h4>
                                </div>

                                <div className="item">
                                    <h4>Decent</h4>
                                </div>

                                <div className="item text-right">
                                    <h4>Good</h4>
                                </div>

                                <div className="item text-right">
                                    <h4>Superhero</h4>
                                </div>
                            </div>

                            <div className="chart clearfix">
                                <div className="item">
                                    <div className="bar">
                                        <span className="percent">92%</span>

                                        <div className="item-progress" data-percent="92">
                                            <span className="title">Creativity</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="item">
                                    <div className="bar">
                                        <span className="percent">71%</span>

                                        <div className="item-progress" data-percent="71">
                                            <span className="title">Reliable</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="item">
                                    <div className="bar">
                                        <span className="percent">82%</span>

                                        <div className="item-progress" data-percent="82">
                                            <span className="title">Comunication</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="item">
                                    <div className="bar">
                                        <span className="percent">67%</span>

                                        <div className="item-progress" data-percent="67">
                                            <span className="title">Persuasion</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>;
    }
}
