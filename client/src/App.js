import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Mainpage from './components/Mainpage';
import './App.css';
import PublicProfile from "./components/UserPages";
import PrivateProfile from "./components/UserPages/PrivateProfile/";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container"> 
          <Switch>
            <Route exact path="/" component = {Mainpage} />
            <Route exact path="/:id" component={PublicProfile} />
            <Route exact path="/:id/private" component={PrivateProfile} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
