import React from "react";
import { FaTrashAlt } from "react-icons/fa";

export default function ButtonDelete({handleDelete}) {
  return (
    <button className="btn-round btn-red" onClick={handleDelete}>
      <FaTrashAlt />
    </button>
  );
}
