﻿ import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export class CreateQuestion extends React.Component<RouteComponentProps<{}>>{
    public constructor() {
        super();
        {
            this.handleSubmit = this.handleSubmit.bind(this);
        }
    }

    public render() {
        return (
            <div id="all-create-question-forms">
                <h1>Lägg till en ny fråga</h1>
                <form onSubmit={this.handleSubmit}>
                    <div id="create-fraga">
                        <label>Fråga:</label>
                        <input id="QuestionContent" name="QuestionContent" type="text"></input>
                    </div>
                    <div id="create-fraga-alternativ-1">
                        <label className="createQuestionLabel">Alternativ 1: </label>
                        <input id="Alternative1" name="Alternative1" type="text"></input>
                    </div>
                    <div id="create-fraga-alternativ-2">
                        <label className="createQuestionLabel">Alternativ 2: </label>
                        <input id="Alternative2" name="Alternative2" type="text"></input>
                    </div>
                    <div id="create-fraga-alternativ-3">
                        <label className="createQuestionLabel">Alternativ 3: </label>
                        <input id="Alternative3" name="Alternative3" type="text"></input>
                    </div>
                    <div id="create-fraga-alternativ-4">
                        <label className="createQuestionLabel">Alternativ 4: </label>
                        <input id="Alternative4" name="Alternative4" type="text"></input>
                    </div>
                    <div id="create-fraga-correct-answer">
                        <label className="createQuestionLabel">Rätt svar: </label>
                        <input id="CorrectAnswer" name="CorrectAnswer" type="text"></input>
                    </div>

                    <div id="create-fraga-button">
                        <button type="submit" id="submitQuestionBtn">Spara</button>
                    </div>
                </form>
            </div>
        );
    }

    handleSubmit(event: any) {
        event.preventDefault();

        const data = new FormData(event.target);

        fetch('api/Quizs/CreateQuiz', {
            method: 'POST',
            body: data
        });

        event.target.reset();
    }
}