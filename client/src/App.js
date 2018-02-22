import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Mainpage from './components/Mainpage/Mainpage';
import './App.css';
import Login from './components/Login/';
//import { Button, Card, Row, Col } from 'react-materialize';
import PublicProfile from "./components/UserPages/PublicProfile";
import PrivateProfile from "./components/UserPages/PrivateProfile";

class App extends Component {
  render() {
    return (  
      <Router>
        <div className="container"> 
          <Switch>
            <Route exact path="/" component = {Mainpage} />
            <Route exact path="/private/:id" component={PrivateProfile} />
            <Route exact path='/public/:id' component={PublicProfile} />
            <Route exact path="/login" component={Login} />
            {/* <Route exact path="/admin/util" component={UtilPage} /> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
