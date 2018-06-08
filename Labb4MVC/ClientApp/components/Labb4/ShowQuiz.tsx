import * as React from 'react';
import 'isomorphic-fetch';

let questionNumber: number;
questionNumber = 0;
let score: number;
score = 0;
let userName = document.getElementById('react-app')!.textContent;

interface ShowQuizProps {

}

interface ShowQuizState {
    quiz: Quiz[];
    loading: boolean;
    selectedAternativ: string;
    questionNumberState: number;
    scoreState: number;
    result: string;
    resultClass: string;
    submitBtnDisable: boolean;
    nextQuestionBtnDisable: boolean;
    radioBtnDisable: boolean;
}

export class ShowQuiz extends React.Component<ShowQuizProps, ShowQuizState>{
    constructor(props: ShowQuizProps) {
        super(props);
        this.state = {
            quiz: [],
            loading: true,
            selectedAternativ: '',
            questionNumberState: 0,
            scoreState: 0,
            result: '',
            resultClass: '',
            submitBtnDisable: true,
            nextQuestionBtnDisable: true,
            radioBtnDisable: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.submitAnswer = this.submitAnswer.bind(this);
        this.getNextQuestion = this.getNextQuestion.bind(this);

        console.log('userName:' + userName);

        fetch('api/Quizs')
            .then(response => response.json() as Promise<Quiz[]>)
            .then(data => {
                this.setState({ quiz: data, loading: false });
            });
    }

    public render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.renderQuiz(this.state.quiz, this.state.questionNumberState);

        return (
            <div>
                {contents}
            </div>
        )
    }

    public renderQuiz(quiz: Quiz[], questionNumber: number) {
        if (questionNumber < quiz.length) {
            return (
                <div>
                    <h2>{quiz[questionNumber].question}</h2>
                    <div id="qas">
                    <div className="row">
                        <div>
                            <label>
                                <input type="radio"
                                    value={quiz[questionNumber].alternativ1}
                                    name="alternativ"
                                    onChange={this.handleChange}
                                    disabled={this.state.radioBtnDisable}
                                    checked={this.state.selectedAternativ === quiz[questionNumber].alternativ1} />
                                {quiz[questionNumber].alternativ1}
                            </label>
                        </div><div>
                            <label>
                                <input type="radio"
                                    value={quiz[questionNumber].alternativ2}
                                    name="alternativ"
                                    onChange={this.handleChange}
                                    disabled={this.state.radioBtnDisable}
                                    checked={this.state.selectedAternativ === quiz[questionNumber].alternativ2} />
                                {quiz[questionNumber].alternativ2}
                            </label>
                        </div><div>
                            <label>
                                <input type="radio"
                                    value={quiz[questionNumber].alternativ3}
                                    name="alternativ"
                                    onChange={this.handleChange}
                                    disabled={this.state.radioBtnDisable}
                                    checked={this.state.selectedAternativ === quiz[questionNumber].alternativ3} />
                                {quiz[questionNumber].alternativ3}
                            </label>
                        </div><div>
                            <label>
                                <input type="radio"
                                    value={quiz[questionNumber].alternativ4}
                                    name="alternativ"
                                    onChange={this.handleChange}
                                    disabled={this.state.radioBtnDisable}
                                    checked={this.state.selectedAternativ === quiz[questionNumber].alternativ4} />
                                {quiz[questionNumber].alternativ4}
                            </label>
                        </div>
                        </div>
                        </div>

                    <div id="quiz-button-1">
                    <button className="btn btn-primary"
                        onClick={this.submitAnswer}
                        disabled={this.state.submitBtnDisable}>
                        Skicka svar
                    </button>
                    </div>

                    <div id="quiz-button-1">
                    <button className="btn btn-primary"
                        onClick={this.getNextQuestion}
                        disabled={this.state.nextQuestionBtnDisable}>
                        Nästa fråga
                    </button>
                    </div>

                    <div>
                        <h4>{this.state.result}</h4>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div>
                    {this.submitScore()}
                    <h2>Bra jobbat!</h2>
                    <h2>Du fick {this.state.scoreState} / {this.state.quiz.length} poäng!</h2>
                </div>
                )
        }
    }

    public getNextQuestion() {
        questionNumber++;
        console.log(questionNumber);
        this.setState({ questionNumberState: questionNumber });
        this.setState({ result: '' });
        this.setState({ resultClass: '' });
        this.setState({ submitBtnDisable: true });
        this.setState({ nextQuestionBtnDisable: true });
        this.setState({ radioBtnDisable: false });
    }

    public handleChange(event: any) {
        this.setState({ selectedAternativ: event.target.value });
        this.setState({ submitBtnDisable: false });
    }

    public submitAnswer(event: any) {
        if (this.state.quiz[questionNumber].correctAnswer === this.state.selectedAternativ) {
            score++;
            this.setState({ scoreState: score });
            this.setState({ result: 'Rätt' });
        }
        else {
            this.setState({ result: 'Fel' });
        }
        this.setState({ submitBtnDisable: true });
        this.setState({ radioBtnDisable: true });
        this.setState({ nextQuestionBtnDisable: false });
        this.setState({ selectedAternativ: '' });
    }

    submitScore() {
        let apiScore = 'api/Score/CreateScore?user=' + userName + '&result=' + this.state.scoreState;
        fetch(apiScore, { method: 'POST' })
            .then(Response => console.log('status:', Response.status))
    }

}

interface Quiz {
    question: string;
    correctAnswer: string;
    alternativ1: string;
    alternativ2: string;
    alternativ3: string;
    alternativ4: string;
}