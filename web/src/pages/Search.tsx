import axios from "axios";
import React, { useState, useEffect } from "react";
import Grid from "../components/Grid";
import Pagination from "../components/Pagination";
import { useQuery, handleError } from "../utils/util";
import { VideoFiles } from "../models/model";
import { useHistory } from "react-router-dom";

const Search = () => {
  const history = useHistory();
  const [videos, setVideos] = useState<VideoFiles>();
  const [input, setInput] = useState<string>("");
  const page = +(useQuery().get("p") || 1);
  const query = useQuery().get("q") || "";

  useEffect(() => {
    axios
      .get<VideoFiles>(`http://localhost:9000/search?p=${page}&q=${query}`)
      .then((res) => {
        setVideos(res.data);
      })
      .catch(handleError);

    setInput(query);
  }, [page, query]);

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      history.replace({
        pathname: "/search",
        search: `?q=${input}`,
      });
    }
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => [
    setInput(e.target.value),
  ];

  return (
    <div className="search">
      <h2>
        Search results for
        <input
          value={input}
          onKeyUp={handleSearch}
          onChange={handleInput}
          autoFocus
        ></input>
      </h2>
      <Grid videoFiles={videos?.files}></Grid>
      {!!videos?.total && (
        <Pagination total={videos?.total} current={page}></Pagination>
      )}
    </div>
  );
};

export default Search;
