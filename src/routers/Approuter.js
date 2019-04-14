import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import UserList from '../Components/UserList';
import UserInput from '../Components/UserInput';
import UserEdit from '../Components/UserEdit';


const Approuter = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" component={UserList} exact />
          <Route path="/adduser" component={UserInput} />
          <Route path="/edituser-:id" component={UserEdit} />
        </Switch>
      </div>
      
    </BrowserRouter>
  );
};

export default Approuter;
