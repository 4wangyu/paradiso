import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Home';
import NotFound from './NotFound';
import Search from './Search';
import Navbar from './Navbar';
import Videos from './Videos';

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/videos" component={Videos} />
      <Route path="/search" component={Search} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default App;
