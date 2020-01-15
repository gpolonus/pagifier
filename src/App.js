
import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Page from './components/Page'
import pages from './pages'
import './App.css';

function App() {

  return (
    <div className="App">
      <Router>
        <Route path="/" children={
          ({location, history}) =>
            <Page
              pages={pages}
              location={location}
              history={history}
            />
          }
        />
      </Router>
    </div>
  );
}

export default App;
