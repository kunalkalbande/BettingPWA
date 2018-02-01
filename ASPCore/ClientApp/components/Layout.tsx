import * as React from 'react';
import { NavMenu } from './NavMenu';

export interface LayoutProps {
    children?: React.ReactNode;
}

interface LoginState {
    loggedin: boolean;
}

export class Layout extends React.Component<LayoutProps, LoginState> {
    constructor() {
        super();
        this.state = { loggedin: false };
    }
    public render() {
        return <div className='container-fluid'>
            <div className='row'>
                <div style={{ visibility: this.state.loggedin ? 'visible' : 'hidden' }}>
                    <div className='col-sm-3'>
                        <NavMenu />
                    </div>
                    <div className='col-sm-9'>
                        {this.props.children}
                    </div>
                </div>
                <div style={{ visibility: this.state.loggedin ? 'hidden' : 'visible' }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="panel panel-default" style={{ margin: 30, height: 300, width: 500 }}>
                                    <table>
                                        <tr >
                                            <label style={{ fontSize: 20, margin: 20 }}>UserName</label>
                                            <input type="text" width='20' style={{ fontSize: 15 }} />
                                        </tr>
                                        <tr >
                                            <label style={{ fontSize: 20, margin: 20 }}>Password</label>
                                            <input type="text" width='20' style={{ fontSize: 15 }} />
                                        </tr>
                                        <tr >
                                            <button onClick={() => { this.incrementCounter() }}>Login</button>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>;
    }

    incrementCounter() {
        this.setState({
            loggedin: true
        });
    }
}

