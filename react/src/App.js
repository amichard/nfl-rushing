import React from 'react';

import RusingStatsContainer from './rushing_stats/RusingStatsContainer';

const App = () => (
  <div className="App">
    <header className="App-header">
      <div className="container">
        <a
          href="/"
        >
          <div className="logo" />
        </a>
      </div>
    </header>

    <div className="App-body">
      <RusingStatsContainer />
    </div>
  </div>
);

export default App;
