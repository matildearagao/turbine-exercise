import React, { Component } from "react";
import {
  FaCheck,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaAddressBook,
  FaAddressCard
} from "react-icons/fa";

export default class Success extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { name, email, phone1, phone2, shipping, billing }
    } = this.props;

    return (
      <div className="container bg-light confirm-container">
        <div>
          <p>
            <FaUser className="icon" />
            <span className="text-muted">Name: </span> {name}
          </p>
          <p>
            <FaEnvelope className="icon" />
            <span className="text-muted">Email:</span> {email}
          </p>
          <p>
            <FaPhone className="icon" />
            <span className="text-muted">Phone Number: </span> {phone1}
            {phone2 && <span> - {phone2}</span>}
          </p>

          <p>
            <FaAddressBook className="icon" />
            <span className="text-muted">Shipping Address: </span>
            {shipping}
          </p>
          <p>
            <FaAddressCard className="icon" />
            <span className="text-muted">Billing Address: </span>
            {billing}
          </p>
        </div>
          <button
            type="submit"
            onSubmit={this.props.handleSubmit}
            className="btn-round btn-green float-right"
          >
            <FaCheck />
          </button>
      </div>
    );
  }
}
