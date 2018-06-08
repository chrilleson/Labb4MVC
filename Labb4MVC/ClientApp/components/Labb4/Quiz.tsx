import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { FetchQuiz } from './FetchQuiz';
import { ShowQuiz } from './ShowQuiz';


export class Quiz extends React.Component<RouteComponentProps<{}>, {}>{
    public render() {
        return (
            <div>
                <ShowQuiz />
            </div>
        );
    }
}