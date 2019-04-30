import React from "react";
import { Link } from "react-router-dom";
import { FaUndoAlt } from "react-icons/fa";

export default function ButtonUndo() {
  return (
    <Link to="/">
      <button className="btn-round btn-blue btn-fixed">
        <FaUndoAlt />
      </button>
    </Link>
  );
}
