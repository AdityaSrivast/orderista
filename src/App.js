import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Landing from './components/landing';
import Login from './components/login';
import './style.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Landing} exact/>
        <Route path="/login/:who" component={Login} exact/>
      </Switch>
    </Router>
  );
}

export default App;
