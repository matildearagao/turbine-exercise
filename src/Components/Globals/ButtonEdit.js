import React from "react";
import { Link } from "react-router-dom";

import { FaPen } from "react-icons/fa";

export default function ButtonEdit({user}) {
  return (
    <Link to={`edituser-${user.id}`}>
      <button className="btn-edit">
        <FaPen />
      </button>
    </Link>
  );
}
