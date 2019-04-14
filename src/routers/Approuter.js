import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import PersonList from '../Components/PersonList';
import PersonInput from '../Components/PersonInput';


const Approuter = () => {
  return (
    <BrowserRouter>
      <div>
        <ul>
          <li>
            <Link to="/">User List</Link>
          </li>
          <li>
            <Link to="/adduser">Add User</Link>
          </li>
       
        </ul>
        <Switch>
          <Route path="/" component={PersonList} exact />
          <Route path="/adduser" component={PersonInput} />
        </Switch>
      </div>
      
    </BrowserRouter>
  );
};

export default Approuter;
