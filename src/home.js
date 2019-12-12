import React, { Component } from "react";
import "./css/home.css";
import { Player } from "video-react";
import "video-react/dist/video-react.css";

class Homepage extends Component {
    render() {
        return (
            <div>
                <h1>Welcome to the Marketplace</h1>
                <h2>This section serves as an introduction to the marketplace, the variety from which to choose from, and what we're all about.</h2>
                    <Player>
                        <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" />
                    </Player>
            </div>
        );
    }
}
export default Homepage;
