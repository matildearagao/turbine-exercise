import React from "react";
import { FaCheck } from "react-icons/fa";

export default function ButtonSubmit({handleSubmit}) {
  return (
    <button
      type="submit"
      onSubmit={handleSubmit}
      className="btn-round btn-green"
    >
      <FaCheck />
    </button>
  );
}
