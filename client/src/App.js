import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header';
import CreateUser from './components/createUser/CreateUser';
import ContactQuiz from './components/contactQuiz/ContactQuiz';
import Mainpage from './components/Mainpage/Mainpage';
import './App.css';
import { Button, Card, Row, Col } from 'react-materialize';
import PublicProfile from "./components/UserPages/PublicProfile";
import UtilPage from "./components/UtilPage/UtilPage";


class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">

          <Switch>
            <Route exact path="/login" component={UtilPage} />
            <Route exact path="/" component = {Mainpage} />
            <Route exact path="/:id/public/quiz" component={ContactQuiz} />
            <Route exact path="/:id/profile" component={PublicProfile} />
            <Route exact path="/admin/util" component={UtilPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
