import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import 'isomorphic-fetch';
import { Link, NavLink, withRouter, BrowserRouter } from 'react-router-dom';

export class Login extends React.Component<{}, {}> {
    public render() {
        return <div className="container">
            <div className="row">
                <div className="col-md-4 col-md-offset-1">
                    <div className="panel panel-default">
                        <div className="panel-heading"> <strong className="">Login</strong>

                        </div>
                        <div className="panel-body">
                            <body className="text-center">
                            <form className="form-signin">
                                <img className="mb-6" src="https://getbootstrap.com/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
                                <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                                    <div className="form-group">
                                        <input type="email" className="form-control" id="Username" aria-describedby="username" placeholder="Enter Username">
                                        </input>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control" id="password" placeholder="Password" />
                                    </div>
                                    <a className="btn btn-default" href="/Betting">Sign Up</a>
                                <p className="mt-5 mb-3 text-muted">© 2017-2018</p>
                                </form>
                            </body>
                        </div>
                        <div className="panel-footer">Not Registered? <Link to={"/Register"}>Register</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>;
    }
}
