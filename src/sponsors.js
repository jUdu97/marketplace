import React, { Component } from "react";
import PopThink from "./images/popthink_logo.png";
import "./css/sponsors.css";

class Partners extends Component {
  render() {
    return (
      <div>
        <h1>Our Investors</h1>
        <h2>
          None of this would even be possible without thanking our corporate
          partners and sponsors!
        </h2>
        <div className="corporations">
          <div className="partners">
            <h3 id="title_corp">Corporate Partners</h3>
            <ul>
              <li>Livvin Large Ltd.</li>
              <li>Church of Pastafarianism</li>
              <li>Zeta Airlines</li>
              <li>Silver and Bahggs</li>
              <li>Quibi</li>
              <li>Malcitron LLP</li>
            </ul>
          </div>
          <div className="partners">
            <h3 id="title_corp">Sponsors</h3>
            <ul>
              <li>Barrat's Merrit Insurance</li>
              <li>Jolly Good Deals Automotive</li>
              <li>Oliver Butter Cream Bakery</li>
              <li>Plumbleberrii Farms</li>
              <li>Hermes Basket Credit Union</li>
              <li>Maeker's Cheesy Delights</li>
            </ul>
          </div>
        </div>
        <img src={PopThink} alt="PopThink" />
      </div>
    );
  }
}

export default Partners;
