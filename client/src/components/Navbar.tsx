import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

const Navbar = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };
  }, []);

  const navbarClass = classNames({
    navbar: true,
    offset: offset > 40,
  });

  return (
    <div className={navbarClass}>
      <Link to="/">Paradiso</Link>
      <Link to="/videos">Videos</Link>
      <Link to="/search">Search</Link>
    </div>
  );
};

export default Navbar;
