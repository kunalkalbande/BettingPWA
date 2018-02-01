import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import 'isomorphic-fetch';
import * as JQuery from 'jquery';
import * as BT from 'bootstrap';
import { Link, NavLink, withRouter, BrowserRouter } from 'react-router-dom';

<<<<<<< HEAD
export class Login extends React.Component<any, any> {
    public render() {
        return <div className="container">
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
                                <button>Submit</button>
                            </tr>
                        </table>
=======
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
>>>>>>> a13ae0758eed063f1cab155e3f3040b0ed3e90e4
                    </div>
                </div>
            </div>
        </div>;
    }
}
