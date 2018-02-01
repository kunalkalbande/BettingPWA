import * as React from 'react';
import { NavMenu } from './NavMenu';
import { Login } from './login';

export interface LayoutProps {
    children?: React.ReactNode;
}

export class Layout extends React.Component<LayoutProps, {}> {
    public render() {
        return <div className='container-fluid'>
            <div className='row'>
                <div className="col-md-9 col-md-offset-4">
                    <Login />
                </div>
            </div>
        </div>;
    }
}
