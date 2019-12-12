import React, { Component } from "react";
import "./css/nav.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Homepage from "./home.js";
import History from "./about.js";
import MktPlace from "./mktPlace.js";
import Partners from "./sponsors.js";

class MainNav extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul id="mktNav">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/marketplace">Marketplace</Link>
            </li>
            <li>
              <Link to="/sponsors">Sponsors</Link>
            </li>
          </ul>

          <hr />

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/marketplace">
              <Marketplace />
            </Route>
            <Route exact path="/sponsors">
              <Sponsors />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

function Home() {
  return (
    <div>
      <Homepage />
    </div>
  );
}
function About() {
  return (
    <div>
      <History />
    </div>
  );
}
function Marketplace() {
  return (
    <div>
      <MktPlace />
    </div>
  );
}
function Sponsors() {
  return (
    <div>
      <Partners />
    </div>
  );
}

export default MainNav;
