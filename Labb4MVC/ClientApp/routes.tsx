import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Quiz } from './components/Labb4/Quiz';
import { CreateQuestion } from './components/Labb4/CreateQuestion';
import { ShowHighScores } from './components/Labb4/ShowHighScores';



export const routes = <Layout>
    <Route exact path='/' component={Home} />
    <Route path='/Labb4/ShowHighScores' component={ShowHighScores} />
    <Route path='/Labb4/quiz' component={Quiz} />
    <Route path='/Labb4/CreateQuestion' component={CreateQuestion} />


</Layout>;
