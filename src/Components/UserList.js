import React, { Component } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

import User from "./User";
import { FaPlus } from "react-icons/fa";

export default class UserList extends Component {
  state = {
    users: [],
    filtered: [],
  };


  componentDidMount() {
    //fetch data from json server
    //db.json is serving as a db
    axios.get("http://localhost:3000/data").then(res => {
      this.setState({
        users: res.data,
        filtered: res.data
      });
    });
  }

  //search users from user name
  filterUsers = e => {
    var updatedList = this.state.users;
    updatedList = updatedList.filter(function(user) {
      return user.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    this.setState({ filtered: updatedList });
  };



  //render users
  renderUsers = () => {
    if (this.state.users.length > 0) {
      return this.state.filtered.map(user => {
        return (
          <User key={user.id} user={user} handleExpand={this.handleExpand} handleEdit={this.handleEdit}/>
        );
      });
    }
    return <div>No users</div>;
  };

  //handle user expand - one at a time
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
      <div className="container u-margin-top">
        <h2 className="text-center mt-5">User List</h2>
        <div className="col-sm-12 col-md-8 mx-auto my-3">
          <input
            type="text"
            name="search"
            placeholder="Type user name to search"
            className="form-control"
            onChange={this.filterUsers}
          />
        </div>
        <div className="col-sm-12 col-md-8 mx-auto">
          <ul className="list-group">{this.renderUsers()}</ul>
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
