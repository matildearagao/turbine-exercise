import React, { Component, children } from 'react';
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
        <div className="row">
          <div className="col-12 col-md-6">
            {children}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
