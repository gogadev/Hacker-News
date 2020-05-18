import React from "react";
import { Switch, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import FetchNews from "./components/fetch-news/FetchNews";

import "./App.css";

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={FetchNews} />
      </Switch>
    </React.Fragment>
  );
};

export default App;
