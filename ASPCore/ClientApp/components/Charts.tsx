import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Doughnut, Bar, Line } from 'react-chartjs-2';


interface DashboardExampleState {
    data: any;
    doughData: any;
}
export class Charts extends React.Component<RouteComponentProps<{}>, DashboardExampleState> {
    constructor() {
        super();
        this.state = { data: null, doughData: null };
    }

    componentWillMount() {
        this.setState({
            data: {
                labels: [
                    'Red',
                    'Green',
                    'Yellow'
                ],
                datasets: [{
                    data: [300, 50, 100],
                    backgroundColor: [
                        '#FF6384',
                        '#36A2EB',
                        '#FFCE56'
                    ],
                    hoverBackgroundColor: [
                        '#FF6384',
                        '#36A2EB',
                        '#FFCE56'
                    ]
                }]
            },
            doughData: {
                labels: [
                    'Red',
                    'Green',
                    'Yellow'
                ],
                datasets: [{
                    data: [300, 50, 100],
                    backgroundColor: [
                        '#FF6384',
                        '#36A2EB',
                        '#FFCE56'
                    ],
                    hoverBackgroundColor: [
                        '#FF6384',
                        '#36A2EB',
                        '#FFCE56'
                    ]
                }]
            }
        });
    }



    public render() {
        return <div className="chart">
            <Line data={this.state.data} height={100} />

        </div>;
    }
}
