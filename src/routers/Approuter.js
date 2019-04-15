import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";

import UserList from "../Components/UserList";
import UserInput from "../Components/UserInput";
import UserEdit from "../Components/UserEdit";
import About from "../Components/About";

const Approuter = () => {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-dark bg-dark mb-5">
        <div className="container">
          <Link to="/" className="navbar-brand">
            Users Exercise
          </Link>
          <Link to="/about" className="link-white">About</Link>
        </div>
      </nav>
      <div>
        <Switch>
          <Route path="/" component={UserList} exact />
          <Route path="/about" component={About} />
          <Route path="/adduser" component={UserInput} />
          <Route path="/edituser-:id" component={UserEdit} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Approuter;
