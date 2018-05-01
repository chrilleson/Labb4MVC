import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { Quiz } from './components/Labb4/Quiz';
import { Register } from './components/Labb4/Register';

export const routes = <Layout>
    <Route exact path='/' component={Home} />
    <Route path='/counter' component={Counter} />
    <Route path='/fetchdata' component={FetchData} />
    <Route path='/Labb4/quiz' component={Quiz} />
    <Route path='/Labb4/Register' component={Register} />

</Layout>;
