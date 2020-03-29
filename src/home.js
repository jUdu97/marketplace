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
            <source src="https://vod-progressive.akamaized.net/exp=1585505326~acl=%2A%2F1208946501.mp4%2A~hmac=de7d52e4387430391290caf29adf0ef57e31f444966defad03c563a2b7274af0/vimeo-prod-skyfire-std-us/01/2698/12/313490233/1208946501.mp4" />
          </Player>
        </div>
      </div>
    );
  }
}
export default Homepage;
