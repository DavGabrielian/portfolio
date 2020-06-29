/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { animateScroll as scroll } from "react-scroll";
import Pdf from "../resume/CV.pdf";
import "./nav.css";

class Nav extends Component {

  scrollTo = () => {
    scroll.scrollTo(700);
  };
  scrollMore = () => {
    scroll.scrollMore(2750);
  };

  render() {
    return (
      <div className="custom-padding">
        <nav id="navbar">

          <ul className="menu-area">
            <li>
              <a href={Pdf} target="_blank">
                RESUME
              </a>
            </li>
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
