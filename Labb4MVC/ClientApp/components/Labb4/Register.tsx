import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export class Register extends React.Component<RouteComponentProps<{}>, {}>{
    public render() {
        return <div>
            <h1>Registrera dig nu!</h1>
        </div>;
    }
}