import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import 'isomorphic-fetch';
import { Link, NavLink, withRouter, BrowserRouter } from 'react-router-dom';

export class Register extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div className="container">
            <div className="row">
                <div className="col-md-4 col-md-offset-5">
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
                                        <Link to={"/Dashboard"} className="btn btn-success btn-lg">Register</Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>;
    }
}
