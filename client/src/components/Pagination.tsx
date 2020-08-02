import React from "react";
import { Link } from "react-router-dom";

const Pagination = () => {
  return (
    <nav className="pagination">
      <Link to="">First</Link>
      <Link to="">
        <i className="fa fa-angle-left"></i>
      </Link>
      <Link to="" className="number">
        1
      </Link>
      <Link to="" className="number">
        2
      </Link>
      <Link to="" className="number active">
        3
      </Link>
      <Link to="" className="number">
        4
      </Link>
      <Link to="" className="number">
        5
      </Link>
      <Link to="">
        <i className="fa fa-angle-right"></i>
      </Link>
      <Link to="">Last</Link>
    </nav>
  );
};

export default Pagination;
