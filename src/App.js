import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

import UserList from "./Components/UserList";
import UserInput from "./Components/UserInput";
import UserEdit from "./Components/UserEdit";
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
            <Route path="/adduser" component={UserInput} />
            <Route path="/edituser-:id" component={UserEdit} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
