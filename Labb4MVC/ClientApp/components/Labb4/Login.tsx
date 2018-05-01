import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export class Login extends React.Component<RouteComponentProps<{}>, {}>{
    public render() {
        return <div>
            <h1>Logga in nu!</h1>
        </div>;
    }
}