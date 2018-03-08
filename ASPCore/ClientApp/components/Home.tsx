import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Doughnut, Bar, Line } from 'react-chartjs-2';


interface DashboardExampleState {
    data: any;
    doughData: any;
}
export class Home extends React.Component<RouteComponentProps<{}>, DashboardExampleState> {
    constructor() {
        super();
        this.state = { data: null, doughData: null };
    }

    componentWillMount() {
        this.setState({
            data: {
                labels: ['10', '15', '20', '25', '30', '35', '40', '45', '50'],
                datasets: [
                    {
                        label: 'My First dataset',
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: 'rgba(75,192,192,0.4)',
                        borderColor: 'rgba(75,192,192,1)',
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
                        data: [65, 59, 80, 81, 56, 55, 40, 35, 20]
                    }
                ]
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
            </div>;
    }
}
