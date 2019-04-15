import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { FaUndoAlt, FaCheck } from "react-icons/fa";

import axios from "axios";

export default class UserInput extends Component {
  state = {
    name: "",
    email: "",
    phone1: "",
    phone2: "",
    shipping: "",
    billing: "",
    toHome: false
  };

  //post user to db through post method
  handleSubmit = e => {
    e.preventDefault();

    const data = {
      name: this.state.name,
      email: this.state.email,
      phone1: this.state.phone1,
      phone2: this.state.phone2,
      shipping: this.state.shipping,
      billing: this.state.billing
    };

    axios.post("http://localhost:3000/data", { ...data }).then(res => {
      this.setState({
        toHome: true
      });
    });
    e.target.reset();
  };

  //handle changes in inputs 
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    if (this.state.toHome === true) {
      return <Redirect to="/" />;
    }

    return (
      <div className="container u-margin-top">
        <div className="row">
          <div className="col-sm-12 col-md-6 mx-auto">
            <h2 className="text-center my-4">Add User </h2>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Person Name: </label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  id="name"
                  onChange={this.handleChange}
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
                />
              </div>

              <br />
              <hr />
              <br />

              <div className="form-group">
                <label htmlFor="shipping">Shipping Address: </label>
                <textarea
                  rows="3"
                  className="form-control"
                  name="shipping"
                  id="shipping"
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="billing"> Billing Address:</label>
                <textarea
                  rows="3"
                  className="form-control"
                  name="billing"
                  id="billing"
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div className="d-flex justify-content-between">
                <Link to="/">
                  <button className="btn-round btn-blue">
                    <FaUndoAlt />
                  </button>
                </Link>

                <button
                  type="submit"
                  onSubmit={this.handleSubmit}
                  className="btn-round btn-green"
                >
                  <FaCheck />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
