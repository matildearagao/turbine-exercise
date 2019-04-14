import React, { Component } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

import User from "./User";
import { FaPlus } from "react-icons/fa";
import UserSearch from "./UserSearch";

export default class UserList extends Component {
  state = {
    users: [],
    filterInputValue: "",

  };

  componentDidMount() {
    //here be fetch
    axios.get("http://localhost:3000/data").then(res => {
      this.setState({
        users: res.data
      });
      console.log(res.data);
    });
  }

  filterUsers = () => {
    if (this.state.filterInputValue && this.state.filterInputValue.length > 0) {
      return this.state.users.filter(user => {
        return user.name.this.state.filterInputValue(0, -1);
      });
    }
    return this.state.users;
  };

  
  renderUsers = users => {
    if (this.state.users.length > 0) {
      return this.filterUsers().map(user => {
        return (
          <User key={user.id} user={user} handleExpand={this.handleExpand} />
        );
      });
    }
    return <div>No users</div>;
  };
  handleExpand = id => {
    this.setState({
      users: this.state.users.map(user => {
        if (user.id === id) {
          user.expand = !user.expand;
        } else {
          user.expand = false;
        }
        return user;
      })
    });
  };

  render() {
    return (
      <div className="container">
            <h2 className="text-center mt-2">User List</h2>
          <UserSearch />
          <div className="col-sm-12 col-md-8 mx-auto">
            <ul className="list-group">{this.renderUsers(this.props.users)}</ul>
          </div>
        
        <Link to="/adduser">
          <button className="btn-round btn-blue btn-fixed">
            <FaPlus />
          </button>
        </Link>
      </div>
    );
  }
}
