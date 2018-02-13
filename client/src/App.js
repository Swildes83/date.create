import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header';
// import mainPage from './components/mainPage';
// import createUser from './components/createUser';
// import contactQuiz from './components/contactQuiz';
// import publicProfile from './components/publicProfile';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Switch>
          {/* <Route exact path="/" component={mainPage} />
          <Route exact path="/createUser" component={createUser} />
          <Route exact path="/:id/public" component={publicProfile} /> */}
        </Switch>
      </div>
    );
  }
}

export default App;
