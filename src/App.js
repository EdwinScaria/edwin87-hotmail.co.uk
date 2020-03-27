import React from "react";
import "./App.css";

import { Home } from "./pages/Home";
import { Places } from "./pages/Places";
import SinglePlace from "./pages/SinglePlace";
import Error from "./pages/Error";
import Navbar from "./Components/Navbar";
import { Route, Switch } from "react-router-dom";
import withAuth from "./withAuth";
import Display from "./pages/Display";

function App() {
  fetch("/access", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    }
  }).catch(err => {
    console.error(err);
  });

  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={withAuth(Home)} />
        <Route exact path="/Places/" component={withAuth(Places)} />
        <Route exact path="/Places/:slug" component={withAuth(SinglePlace)} />
        <Route exact path="/Weather" component={Display} />
        <Route component={Error} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
