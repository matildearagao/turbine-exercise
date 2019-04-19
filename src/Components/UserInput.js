import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { FaUndoAlt } from "react-icons/fa";

import axios from "axios";
import FormPersonalInfo from "./Form/FormPersonalInfo";
import FormAddressInfo from "./Form/FormAddressInfo";
import Success from "./Form/Success";

export default class UserInput extends Component {
  state = {
    name: "",
    email: "",
    phone1: "",
    phone2: "",
    shipping: "",
    billing: "",
    toHome: false,
    step: 1
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

 //handles fields change
 handleChange = input => e => {
  this.setState({
      [input]: e.target.value
  });
}

  //proceed next step method
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };
  //go back previou step method
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  render() {

    const { name, email, phone1, phone2, shipping, billing } = this.state
    const values = { name, email, phone1, phone2, shipping, billing }

    if (this.state.toHome === true) {
      return <Redirect to="/" />;
    }

    return (
      <div className="container u-margin-top">
        <div className="row">
          <div className="col-sm-12 col-md-6 mx-auto">
            <h2 className="my-4">Add User </h2>
            <form onSubmit={this.handleSubmit}>
              {(() => {
                switch (this.state.step) {
                  case 1:
                    return (
                      <FormPersonalInfo
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                      />
                    );
                  case 2:
                    return (
                      <FormAddressInfo
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                      />
                    );
                  case 3:
                    return (
                      <Success
                        prevStep={this.prevStep}
                        onSubmit={this.handleSubmit}
                        values={values}
                      />
                    );
                  default:
                    return (
                      <FormPersonalInfo
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                      />
                    );
                }
              })()}
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
