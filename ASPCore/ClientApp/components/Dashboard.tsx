import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import 'isomorphic-fetch';
import { Link, NavLink, withRouter, BrowserRouter } from 'react-router-dom';
import { MatchCard } from '../childComponents/MatchCard';

//import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'bootstrap';


interface DashboardExampleState {
    Matches: MatchDetails[];
    loading: boolean;
}

export class Dashboard extends React.Component<RouteComponentProps<{}>, DashboardExampleState> {

    constructor() {
        super();
        //this.handleClick = this.handleClick.bind(this);
        this.state = { Matches: [], loading: true };

        fetch('http://172.25.29.70:92/API/Cricket/GetCurrentMatches')
            .then(response => response.json() as Promise<MatchDetails[]>)
            .then(data => {
                this.setState({ Matches: data, loading: false });
            });
    }

    public render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : Dashboard.renderMatchCard(this.state.Matches);

        return <div>
            <div className='row' style={{ margin: '10px' }}>
                <h1>Current Matches</h1>
            </div>
            <div >
                {contents}
            </div>

        </div>;
    }


    private static renderMatchCard(Matches: MatchDetails[]) {
        return <div className='container'>
            <div className='row'>
                {Matches.map(Match =>
                    <MatchCard Match={Match} key={Match.URL} />
                )}
            </div>
        </div>;
    }
}

interface MatchDetails {
    Details: string;
    Name: string;
    Status: string;
    URL: string;
}
