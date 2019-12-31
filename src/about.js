import React, { Component } from "react";
import "./css/about.css";
import popthink from "../src/images/popthink_logo.png";

class History extends Component {
  render() {
    return (
      <div>
        <h1>Our History</h1>
        <p>
          Started in 1897 by Emmet San Thought, the Marketplace of Ideas was
          started on the notion of what an idea is. His vision was that of
          providing a smorgasbord of palatable thoughts and kernels of
          ground-breaking discussions. With humble beginnings in Tusla, OK, the
          Marketplace was able to spread statewide and to its neighboring states
          of Texas, Kansas, and New Mexico.
        </p>
        <p>
          Towards the end of this life, Emmet bequeathed the franchise to his
          only daughter, Hayley, in 1965. While in charge, Hayley fostered more
          connections with various other creatives business entities. As time
          went on, the Marketplace was able to permeate the cultural zeitgeist
          and achieve worldwide to great acclaim. In 1998, Hayley sold the
          franchise to Pop!Think Media.
        </p>
        <img src={popthink} alt="PopThink" className="PopThink" />
        <hr />
        <h1>Values</h1>
        <ul className="values">
          <li id="create">Creativity</li>
          <li id="money">Money</li>
          <li id="logic">Logic</li>
          <li id="family">Nepotism</li>
          <li id="merit">"Merit"</li>
        </ul>
      </div>
    );
  }
}

export default History;
