import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header';
import CreateUser from './components/createUser';
import ContactQuiz from './components/contactQuiz';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Header />
          <Switch>
            <Route exact path="/:id/public/quiz" component={ContactQuiz} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
