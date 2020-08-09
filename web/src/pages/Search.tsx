import React from "react";
import Grid from "../components/Grid";
import Pagination from "../components/Pagination";

const Search = () => {
  return (
    <div className="search">
      <h2>
        Search results for
        <input autoFocus></input>
      </h2>
      <Grid></Grid>
      <Pagination></Pagination>
    </div>
  );
};

export default Search;
