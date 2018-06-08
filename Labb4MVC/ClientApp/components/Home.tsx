import * as React from 'react';
import { RouteComponentProps } from 'react-router';

let userName = document.getElementById('react-app')!.textContent;

export class Home extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div>
            <h2>V&#228;lkommen till v&#229;rat quiz {userName}!</h2>
        </div>;
    }
}
