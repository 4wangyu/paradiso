import React from "react";

const Pagination = () => {
  return (
    <nav className="pagination">
      <a>First</a>
      <a>
        <i className="fa fa-angle-left"></i>
      </a>
      <a className="number">1</a>
      <a className="number">2</a>
      <a className="number active">3</a>
      <a className="number">4</a>
      <a className="number">5</a>
      <a>
        <i className="fa fa-angle-right"></i>
      </a>
      <a>Last</a>
    </nav>
  );
};

export default Pagination;
