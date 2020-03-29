import React, { Component, useState } from "react";
import "./css/nav.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Homepage from "./home.js";
import History from "./about.js";
import MktPlace from "./mktPlace.js";
import Partners from "./sponsors.js";

import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./themes/theme.js";
import { GlobalStyles } from "./themes/global.js";
import Toggle from "./themes/toggle.js";

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
            <ToggleButton />
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
function ToggleButton() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <div>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <>
          <GlobalStyles />
          <Toggle theme={theme} toggleTheme={toggleTheme} />
        </>
      </ThemeProvider>
    </div>
  );
}

export default MainNav;
