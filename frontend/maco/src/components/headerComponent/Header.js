import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header>
        <div className="logo">MACO APP</div>

        <nav>
          <ul>
            <li>
              <a href="/">HomePage</a>
            </li>
            <li>
              <a href="/units">Movies</a>
            </li>
            <li className="last">
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
