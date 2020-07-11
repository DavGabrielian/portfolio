/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { animateScroll as scroll } from "react-scroll";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./nav.css";
import Resume from "../resume/resume";

class Nav extends Component {
  scrollTo = () => {
    scroll.scrollTo(700);
  };
  scrollMore = () => {
    scroll.scrollMore(2830);
  };

  render() {
    return (
      <div className="custom-padding">
        <nav id="navbar">
          <ul className="menu-area">
            <li>
              <a className="nav-item" onClick={this.scrollTo}>
                PROJECTS
              </a>
            </li>
            <li>
              <a className="nav-item" onClick={this.scrollMore}>
                CONTACT
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Nav;
