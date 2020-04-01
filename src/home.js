import React, { Component } from "react";
import "./css/home.css";
import { Player } from "video-react";
import "video-react/dist/video-react.css";

class Homepage extends Component {
  render() {
    return (
      <div>
        <div className="main_body">
          <h1>Welcome to the Marketplace</h1>
          <h2>
            This section serves as an introduction to the marketplace, the
            variety from which to choose from, and what we're all about.
          </h2>
          <Player>
            <source src="https://www.videvo.net/videvo_files/converted/2014_02/preview/5aday_Rotate_LoopVidevo.mov83363.webm" />
          </Player>
        </div>
      </div>
    );
  }
}
export default Homepage;
