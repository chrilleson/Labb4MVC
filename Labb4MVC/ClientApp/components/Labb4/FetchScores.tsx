import * as React from 'react';
import 'isomorphic-fetch';

interface FetchScoreProp {
}

interface FetchScoreState {
    counter: number;
    score: Score[];
    loading: boolean;
}

export class FetchScores extends React.Component<FetchScoreProp, FetchScoreState>{
    constructor(props: FetchScoreProp) {
        super(props);
        this.state = { score: [], counter: 1, loading: true };

        fetch('api/Score')
            .then(response => response.json() as Promise<Score[]>)
            .then(data => {
                this.setState({ score: data, loading: false });
            });
    }

    public render() {
        let content = this.state.loading
            ? <p><em>Loading...</em></p>
            : FetchScores.renderScoreTbl(this.state.score, this.state.counter);

        return (
            <div>
                <h1>High Scores</h1>
                <p>Här listas alla highscores!</p>
                {content}
            </div>
        );
    }

    private static renderScoreTbl(score: Score[], counter: number) {
        score.sort(function (a, b) {
            if (a.score < b.score) {
                return 1;
            }
            if (a.score > b.score) {
                return -1;
            }
            return 0;
        });

        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Användarnamn</th>
                        <th>Resultat</th>
                        <th>Datum</th>
                    </tr>
                </thead>
                <tbody>

                    {score.map(score =>
                        <tr key={score.user}>
                            <td>{counter++}</td>
                            <td>{score.user}</td>
                            <td>{score.score}</td>
                            <td>{score.date}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }
}

interface Score {
    user: string;
    date: string;
    score: string;
}