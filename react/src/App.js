/* global
  __API_BASE__
*/
import axios from 'axios';
import React from 'react';
import { Switch } from 'react-router';
import { Route, BrowserRouter } from 'react-router-dom';

import RusingStatsContainer from './rushing_stats/RusingStatsContainer';

axios.defaults.baseURL = __API_BASE__;

const App = () => (
  <div className="App">
    <header className="App-header">
      <div className="container">
        <a href="/">
          <div className="logo" />
        </a>
      </div>
    </header>

    <div className="App-body">
      <BrowserRouter>
        <Switch>
          <Route
            path="/"
            component={RusingStatsContainer}
          />
        </Switch>
      </BrowserRouter>
    </div>
  </div>
);

export default App;
