import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header';
import CreateUser from './components/CreateUser';
import ContactQuiz from './components/ContactQuiz';
import './App.css';
// import { Button, Card, Row, Col } from 'react-materialize';
import PublicProfile from "./components/UserPages/publicProfile";


class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          
          <Switch>
            <Route exact path="/:id/public/quiz" component={ContactQuiz} />
            <Route exact path="/:id/profile" component={PublicProfile} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
