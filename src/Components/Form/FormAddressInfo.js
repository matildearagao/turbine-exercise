import React, { Component } from "react";
import { FaBackward, FaPlay } from "react-icons/fa";

export default class FornAddressInfo extends Component {
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
          <label htmlFor="shipping">Shipping Address: </label>
          <textarea
            rows="3"
            className="form-control"
            name="shipping"
            id="shipping"
            onChange={handleChange("shipping")}
            defaultValue={values.shipping}
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
            onChange={handleChange("billing")}
            defaultValue={values.billing}
            required
          />
        </div>
        <button onClick={this.back} className="btn-round btn-red">
          <FaBackward />
        </button>
        <button onClick={this.continue} className="btn-round btn-green float-right">
          <FaPlay />
        </button>
      </div>
    );
  }
}
