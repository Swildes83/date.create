import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Mainpage from './components/Mainpage';
import './App.css';
import PublicProfile from "./components/UserPages";
import PrivateProfile from "./components/UserPages/PrivateProfile/";
import Login from './components/Login/';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container"> 
          <Switch>
            <Route exact path="/" component = {Mainpage} />
            {/* <Route exact path="/:id" component={PublicProfile} /> */}
            <Route exact path="/:id/private" component={PrivateProfile} />
            <Route exact path='/Login' component={Login} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
