import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"

import Nav from './Components/Nav'
import Characters from './Components/Characters'
import Episodes from './Components/Episodes'

function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <Switch>
          <Route exact path="/"/>
          <Route path="/characters" component={Characters}/>
          <Route path="/episodes" component={Episodes}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
