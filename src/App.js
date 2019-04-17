import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Signin from './pages/loginsignin/Signin'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/signin" component={Signin}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
