import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { FaUndoAlt, FaCheck, FaTrashAlt } from "react-icons/fa";

import axios from "axios";

export default class UserInput extends Component {
  state = {
    user: {
      name: "",
      email: "",
      phone1: "",
      phone2: "",
      shipping: "",
      billing: ""
    },
    toHome: false,
  };

  //get user based on user id
  componentDidMount = () => {
    const id = this.props.match.params.id;
    axios.get(`http://localhost:3000/data/${id}`).then(res => {
      this.setState({
        user: res.data,
        isEdit: this.props
      });
    });
  };

  //send to db thourgh patch method
  handleSubmit = e => {
    e.preventDefault();
    const id = this.props.match.params.id;
    const user = this.state.user;

    const data = {
      name: user.name,
      email: user.email,
      phone1: user.phone1,
      phone2: user.phone2,
      shipping: user.shipping,
      billing: user.billing
    };

    if (this.state.isEdit) {
      axios.patch(`http://localhost:3000/data/${id}`, { ...data }).then(res => {
        this.setState({
          toHome: true
        });
      });
    } else {
      axios.post("http://localhost:3000/data", { ...data }).then(res => {
        this.setState({
          toHome: true
        });
      });
    }
    e.target.reset();
  };

  //handle changes in inputs
  handleChange = e => {
    this.setState({
      user: {
        ...this.state.user,
        [e.target.name]: e.target.value
      }
    });
  };
  //delete user
  handleDelete = e => {
    e.preventDefault();
    const id = this.props.match.params.id;
    const user = this.state.user;

    const data = {
      name: user.name,
      email: user.email,
      phone1: user.phone1,
      phone2: user.phone2,
      shipping: user.shipping,
      billing: user.billing
    };

    axios.delete(`http://localhost:3000/data/${id}`, { ...data }).then(res => {
      this.setState({
        toHome: true
      });
    });
  };

  renderButton = () => {
    if (this.state.isEdit) {
      return (
        <div className="d-flex justify-content-between my-4">
          <button className="btn-round btn-red" onClick={this.handleDelete}>
            <FaTrashAlt />
          </button>
          <button
            type="submit"
            onSubmit={this.handleSubmit}
            className="btn-round btn-green"
          >
            <FaCheck />
          </button>
        </div>
      );
    }
    return (
    <div className="d-flex justify-content-end my-4">
      <button
        type="submit"
        onSubmit={this.handleSubmit}
        className="btn-round btn-green"
      >
        <FaCheck />
      </button>
    </div>
    )
  };

  renderTitle = () => {
    if (this.state.isEdit) {
      return "Edit User";
    }
    return "Add User";
  };

  render() {
    const { name, email, phone1, phone2, shipping, billing } = this.state.user;

    if (this.state.toHome === true) {
      return <Redirect to="/" />;
    }

    return (
      <div className="container u-margin-top">
        <div className="row">
          <div className="col-sm-12 col-md-6 mx-auto">
            <h2 className="my-4">{this.renderTitle()} </h2>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Person Name: </label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  id="name"
                  onChange={this.handleChange}
                  defaultValue={name}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email"> Person Email:</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  onChange={this.handleChange}
                  defaultValue={email}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone1">Phone Number:</label>
                <input
                  type="tel"
                  className="form-control"
                  name="phone1"
                  id="phone1"
                  onChange={this.handleChange}
                  defaultValue={phone1}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone2">Phone Number 2 (opcional): </label>
                <input
                  type="tel"
                  className="form-control"
                  name="phone2"
                  id="phone2"
                  onChange={this.handleChange}
                  defaultValue={phone2}
                />
              </div>

              <br />
              <hr />
              <br />

              <div className="form-group">
                <label htmlFor="shipping">Shipping Address: </label>
                <input
                  rows="3"
                  className="form-control"
                  name="shipping"
                  id="shipping"
                  onChange={this.handleChange}
                  defaultValue={shipping}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="billing"> Billing Address:</label>
                <input
                  rows="3"
                  className="form-control"
                  name="billing"
                  id="billing"
                  onChange={this.handleChange}
                  defaultValue={billing}
                  required
                />
              </div>
              {this.renderButton()}
            </form>
          </div>
        </div>
        <Link to="/">
          <button className="btn-round btn-blue btn-fixed">
            <FaUndoAlt />
          </button>
        </Link>
      </div>
    );
  }
}
