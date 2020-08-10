import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as LeftIcon } from "../icons/left.svg";
import { ReactComponent as RightIcon } from "../icons/right.svg";

export interface PropType {
  total?: number;
}

const Pagination = ({ total }: PropType) => {
  return (
    <nav className="pagination">
      <Link to="">First</Link>
      <Link to="">
        <LeftIcon />
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
        <RightIcon />
      </Link>
      <Link to="">Last</Link>
    </nav>
  );
};

export default Pagination;
