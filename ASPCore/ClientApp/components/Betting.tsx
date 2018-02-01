import * as React from 'react';
import { NavMenu } from './NavMenu';
import { Login } from './login';

export interface LayoutProps {
    children?: React.ReactNode;
}

export class Betting extends React.Component<LayoutProps, {}> {
    public render() {
        return <div className='container-fluid'>
            <div className='row'>
                <div className='col-sm-3'>
                    <NavMenu />
                </div>
                <div className='col-sm-9'>
                    {this.props.children}
                </div>
            </div>
        </div>;
    }
}
