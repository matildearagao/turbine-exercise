import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

import UserList from "./Components/UserList";
import UserInput from "./Components/UserInput";
import About from "./Components/About";
import Navbar from "./Components/Globals/Navbar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route path="/" component={UserList} exact />
            <Route path="/about" component={About} />
            <Route path="/adduser" component={props =>  <UserInput {...props} isEdit={false}/>} />
            <Route path="/edituser-:id" component={props =>  <UserInput {...props} isEdit={true}/>} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
