import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export class AdminQuestions extends React.Component<RouteComponentProps<{}>, {}>{
    public render() {
        return <div>
            <h1>Administrera frågor här!</h1>
        </div>;
    }
}