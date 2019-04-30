import React from "react";
import { Link } from "react-router-dom";

import { FaPlus } from "react-icons/fa";

export default function ButtonAdd() {
  return (
    <Link to="/adduser">
      <button className="btn-round btn-blue btn-fixed">
        <FaPlus />
      </button>
    </Link>
  );
}
