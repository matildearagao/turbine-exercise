import React, { Component } from 'react';
import './App.css';
import Approuter from './routers/Approuter';

class App extends Component {

  state = {
    posts: []
  }


  render() {
    return (
      <div className="App">
        <Approuter />
      </div>
    );
  }
}

export default App;
