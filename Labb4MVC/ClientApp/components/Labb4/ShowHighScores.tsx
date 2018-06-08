import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { FetchScores } from './FetchScores';

export class ShowHighScores extends React.Component<RouteComponentProps<{}>, {}> {

    public render() {
        return (
            <div>
                <FetchScores />
            </div>
        );
    }
}