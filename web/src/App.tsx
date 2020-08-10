import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Videos from "./pages/Videos";
import ScrollToTop from "./components/ScrollToTop";
import Player from "./components/Player";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />

      <Switch>
        <Route path="/videos">
          <Videos />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/:id">
          <Player />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
