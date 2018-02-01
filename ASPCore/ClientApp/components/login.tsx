import * as React from 'react';
import { RouteComponentProps } from 'react-router';

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
                    </div>
                </div>
            </div>
        </div>;
    }
}
