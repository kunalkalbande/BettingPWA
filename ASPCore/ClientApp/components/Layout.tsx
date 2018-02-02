import * as React from 'react';
import { NavMenu } from './NavMenu';
import { Link, NavLink, withRouter, BrowserRouter } from 'react-router-dom';

export interface LayoutProps {
    children?: React.ReactNode;
}

interface LoginState {
    loggedin: boolean;
    disply: boolean;
    displ: boolean;
}

export class Layout extends React.Component<LayoutProps, LoginState> {
    constructor() {
        super();
        this.state = { loggedin: false, disply: false, displ: false };
    }
    public render() {
        return <div className='container-fluid'>
            <div className='row'>
                <div style={{ visibility: this.state.loggedin ? 'hidden' : 'visible', display: this.state.disply ? 'none' : 'block' }} className='col-lg-12'>
                    <div className="container" style={{ display: this.state.displ ? 'block' : 'none' }}>
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3" style={{ marginTop: 100 }}>
                                <div className="panel panel-default">
                                    <div className="panel-heading"> <strong className="">Register</strong>
                                    </div>
                                    <div className="panel-body">
                                        <form className="form-horizontal" role="form">
                                            <div className="form-group">
                                                <label className="col-sm-3 control-label">Email</label>
                                                <div className="col-sm-9">
                                                    <input type="email" className="form-control" id="inputEmail3" placeholder="Email" />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="col-sm-3 control-label">Password</label>
                                                <div className="col-sm-9">
                                                    <input type="password" className="form-control" id="inputPassword3" placeholder="Password" />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="col-sm-3 control-label">Reenter-Password</label>
                                                <div className="col-sm-9">
                                                    <input type="password" className="form-control" id="inputPassword" placeholder="Reenter Password" />
                                                </div>
                                            </div>
                                            <div className="form-group last">
                                                <div className="col-sm-offset-3 col-sm-9">
                                                    <button className="btn btn-success btn-lg">Register</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container" style={{ display: this.state.displ ? 'none' : 'block' }}>
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3" style={{ marginTop: 100 }}>
                                <div className="panel panel-default">
                                    <div className="panel-heading"> <strong className="">Login</strong>
                                    </div>
                                    <div className="panel-body">
                                        <body className="text-center">
                                            <img className="mb-6" src="https://getbootstrap.com/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
                                            <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                                            <div className="form-group">
                                                <input type="email" className="form-control" id="Username" aria-describedby="username" placeholder="Enter Username">
                                                </input>
                                            </div>
                                            <div className="form-group">
                                                <input type="password" className="form-control" id="password" placeholder="Password" />
                                            </div>
                                            <button onClick={() => { this.incrementCounter() }} className="btn btn-success btn-lg">Login</button>
                                            <p className="mt-5 mb-3 text-muted">© 2017-2018</p>
                                        </body>
                                    </div>
                                    <div className="panel-footer">Not Registered? <button onClick={() => { this.gotoRegister() }} className="btn btn-link">Register</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{ visibility: this.state.loggedin ? 'visible' : 'hidden', display: this.state.disply ? 'block' : 'none' }} className='col-lg-12'>
                    <div className='col-sm-3'>
                        <NavMenu />
                    </div>
                    <div className='col-sm-9'>
                        {this.props.children}
                    </div>
                </div>
            </div>
        </div>;
    }

    incrementCounter() {
        this.setState({
            loggedin: true,
            disply: true,
            displ: false
        });
    }

    gotoRegister() {
        this.setState({
            loggedin: false,
            displ: true
        });
    }
}