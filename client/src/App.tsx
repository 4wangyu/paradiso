import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Videos from "./pages/Videos";
import Search from "./pages/Search";
import Home from "./pages/Home";
import Recent from "./pages/Recent";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Switch>
        <Route path="/videos">
          <Videos />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/recent">
          <Recent />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
