import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header';
import CreateUser from './components/CreateUser';
import ContactQuiz from './components/contactQuiz';
import ProfileCard from './components/ProfileCard/ProfileCard';
import PublicProfile from './components/UserPages/publicProfile';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Header />
          <Switch>
        
            <Route exact path="/:id/public" component={PublicProfile}/>
            <Route exact path="/:id/public/search" component={ProfileCard}/>
            <Route exact path="/:id/public/quiz" component={ContactQuiz} />
            
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
