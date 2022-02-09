import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { AuthRouter } from './AuthRouter';
import { JournalScreen } from '../components/journal/JournalScreen';

export const AppRouter = () => {
  return (
    <div>
        <Router>
            <Switch>
                <Route exact path="/auth" component={ AuthRouter } />
                <Route path="/" component={ JournalScreen }  />
            </Switch>
        </Router>
    </div>
  )
}
