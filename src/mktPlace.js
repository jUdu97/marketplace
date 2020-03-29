import React, { Component } from "react";
import "./css/mktPlace.css";

class MktPlace extends Component {
  render() {
    return (
      <div>
        <h1>Market Options</h1>
        <h2>
          There are endless ways to express thinkings of the mind. Take a look
          at all the ideas to shop from these amazing prices.
        </h2>
        <div className="market_ideas">
          <div className="idea_sq">
            <h3>Authoritarianism</h3>
            <p>
              enforcing strict obedience to authority in the absence of personal
              freedom
            </p>
            <span id="price">FREE</span>
          </div>
          <div className="idea_sq">
            <h3>Collectivism</h3>
            <p>
              cohesiveness among people and prioritizing the group above an
              individual
            </p>
            <span id="price">FREE</span>
          </div>
          <div className="idea_sq">
            <h3>Daoism</h3>
            <p>advocating humility and religious piety</p>
            <span id="price">FREE</span>
          </div>
          <div className="idea_sq">
            <h3>Freedom</h3>
            <p>
              power or right to act, spea, or think as one wants without
              hindrance or restraint
            </p>
            <span id="price">FREE</span>
          </div>
          <div className="idea_sq">
            <h3>Dogma</h3>
            <p>
              principle or set of principles laid down by an authority as
              incontrovertibly true
            </p>
            <span id="price">FREE</span>
          </div>
          <div className="idea_sq">
            <h3>Relativism</h3>
            <p>
              doctrine that knowledge, truth, and morality exist in relation to
              culture, society, or historical context, and are not absolute
            </p>
            <span id="price">FREE</span>
          </div>
          <div className="idea_sq">
            <h3>Altruism</h3>
            <p>
              the belief in or practice of disinterested and selfless concern
              for the well-being of others
            </p>
            <span id="price">FREE</span>
          </div>
          <div className="idea_sq">
            <h3>Meritocracy</h3>
            <p>
              government or the holding of power by people selected on the basis
              of their ability
            </p>
            <span id="price">FREE</span>
          </div>
          <div className="idea_sq">
            <h3>Balderdash</h3>
            <p>senseless talk or writing; nonsense</p>
            <span id="price">FREE</span>
          </div>
        </div>
      </div>
    );
  }
}
export default MktPlace;
