import React, { Component } from 'react';
import Header from './components/Header';
import CreateUser from './components/CreateUser';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="bg">
        <Header/>
        <CreateUser/>
      </div>
      // <div className="App">
      //   <div className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h2>Welcome to React</h2>
      //   </div>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
    );
  }
}

export default App;
