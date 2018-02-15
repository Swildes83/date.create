import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header';
import CreateUser from './components/CreateUser';
import ContactQuiz from './components/contactQuiz';
import ProfileCard from './components/ProfileCard/ProfileCard';
import PublicProfile from './components/UserPages/publicProfile';
import './App.css';
import { Button, Card, Row, Col } from 'react-materialize';
import PublicProfile from "./components/UserPages/publicProfile";


class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          
          <Switch>
        
            <Route exact path="/:id/public" component={PublicProfile}/>
            <Route exact path="/:id/public/search" component={ProfileCard}/>
            <Route exact path="/:id/public/quiz" component={ContactQuiz} />
<<<<<<< HEAD
            
=======
            <Route exact path="/:id/profile" component={PublicProfile} />
>>>>>>> 45063128950d03cbc30024dd5ecff50f2932609d
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
