import React, { Component } from "react";
import "./css/sponsors.css";

class Partners extends Component {
  render() {
    return (
      <div>
        <h1>Sponsors</h1>
            <p>None of this would even be possible without thanking our corporate partners and sponsors</p>
        <div className="corporations">
            <article className="partners">
                <h3 id="title_corp">Corpoater Partners</h3>
                    <ul>
                        <li>Livvin Large Ltd.</li>
                        <li>Church of Pastafarianism</li>
                        <li>Zeta Airlines</li>
                        <li>Silver and Bahggs</li>
                        <li>Quibi</li>
                        <li>Tesla</li>
                        <li>Malcitron LLP</li>
                    </ul>
            </article>
            <aside className="sponsors">
                <h3 id="title_corp">Sponsors</h3>
                    <ul>
                        <li>Barrat's Merrit Insurance</li>
                        <li>Kohl's</li>
                        <li>Bank of North America</li>
                        <li>Jolly Good Deals Automotive</li>
                        <li>Oliver Butter Cream Bakery</li>
                        <li>Plumbleberrii Farms, Inc.</li>
                        <li>Hermes Basket Credit Union</li>
                        <li>Maeker's Cheesy Delights</li>
                    </ul>
            </aside>
        </div>
      </div>
    );
  }
}

export default Partners;
