import React, { Fragment } from "react";
import { FaPen, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Link } from "react-router-dom";

const User = ({ user, handleExpand }) => {
  const renderInfo = () => {
    if (user.expand) {
      return (
        <Fragment>
          <div>
            <p>
              <span className="text-muted">Name: </span> {user.name}
            </p>
            <p>
              <span className="text-muted">Email:</span> {user.email}
            </p>
            <p>
              <span className="text-muted">Phone Number: </span> {user.phone1} 
              {user.phone2 && <span> - {user.phone2}</span>}
            </p>

            <p>
              <span className="text-muted">Shipping Address: </span>
              {user.shipping}
            </p>
            <p>
              <span className="text-muted">Billing Address:</span>
              {user.billing}
            </p>
          </div>
          <div className="text-right">
            <Link to={`edituser-${user.id}`}>
              <button className="btn-round btn-green mr-2">
                <FaPen />
              </button>
            </Link>
          </div>
        </Fragment>
      );
    }
  };

  const renderArrow = () => {
    if (user.expand) {
      return <FaChevronUp />;
    }
    return <FaChevronDown />;
  };

  return (
    <li className="list-group-item mb-2">
      <div className="d-flex">
        <div
          className="w-100 d-inline-flex"
          onClick={() => handleExpand(user.id)}
        >
          <p className="ellipsis">
            <strong>{user.name}</strong> - {user.email}
          </p>
        </div>
        <div>{renderArrow()}</div>
      </div>
      {renderInfo()}
    </li>
  );
};
export default User;
