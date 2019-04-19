import React, { Component } from "react";
import { FaPlay } from "react-icons/fa";

export default class FormPersonalInfo extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;

    return (
      <div>
        <div className="form-group">
          <label htmlFor="name">Person Name: </label>
          <input
            type="text"
            className="form-control"
            name="name"
            id="name"
            onChange={handleChange("name")}
            defaultValue={values.name}
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
            onChange={handleChange("email")}
            defaultValue={values.email}
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
            onChange={handleChange("phone1")}
            defaultValue={values.phone1}
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
            onChange={handleChange("phone2")}
            defaultValue={values.phone2}
          />
        </div>
        <button onClick={this.continue} className="btn-round btn-green float-right">
          <FaPlay />
        </button>
      </div>
    );
  }
}
