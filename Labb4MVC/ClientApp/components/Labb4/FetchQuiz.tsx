import * as React from 'react';
import 'isomorphic-fetch';
import { Counter } from 'ClientApp/components/Counter';

interface FetchQuizProps {

}
interface FetchQuizState {
    counter: number;
    question: Quiz[];
    loading: boolean;
}

interface Quiz {
    question: string;
    correctAnswer: string;
    alternativ1: string;
    alternativ2: string;
    alternativ3: string;
    alternativ4: string;
}

export class FetchQuiz extends React.Component<FetchQuizProps, FetchQuizState> {
    constructor(props: FetchQuizProps) {
        super(props);
        this.state = { question: [], loading: true, counter: 1 };

        fetch('api/Quizs')
            .then(response => response.json() as Promise<Quiz[]>)
            .then(data => {
                this.setState({ question: data, loading: false });
            });
    }

    public render() {
        let contents = this.state.loading
        ? <p><em>Loading...</em></p>
        : FetchQuiz.renderQuizTable(this.state.question, this.state.counter);

        return (
            <div>
                <h1>Quiz</h1>
                <p>Here we fetch the questions that will be in the quiz.</p>
                {contents}
            </div>
        );
    }

    private static renderQuizTable(question: Quiz[], counter: number) {
        return (
            <table className='table'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Question</th>
                        <th>Alternativ 1</th>
                        <th>Alternativ 2</th>
                        <th>Alternativ 3</th>
                        <th>Alternativ 4</th>
                    </tr>
                </thead>
                <tbody>
                    {question.map(question =>
                        <tr key={question.question}>
                            <td>{counter++}</td>
                            <td>{question.question}</td>
                            <td>{question.alternativ1}</td>
                            <td>{question.alternativ2}</td>
                            <td>{question.alternativ3}</td>
                            <td>{question.alternativ4}</td>
                            <td>{question.correctAnswer}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }
}
