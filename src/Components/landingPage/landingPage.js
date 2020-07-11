import React, { Component } from "react";
import pic from "../images/backgroundPic.jpg";
import profPic from "../images/profile0.png";
import ReactTypingEffect from "react-typing-effect";

import "./landingPage.css";

class LandingPage extends Component {
  render() {
    return (
      <div
        style={{
          height: "600px",
          position: "relative",
          background: `url(${pic})
          center / cover`,
        }}
      >
        <div className="block">
            <img className="img-profile" id="profile-pic" src={profPic} alt="" />
          <div>
          <ReactTypingEffect
            text="Hi.    Nice to meet you.     I'm  David."
            speed="200"
            typingDelay="1900"
            className="string"
          /> 
            </div>
          <div className="intro-text">
            <h1 className="name">FRONT-END DEVELOPER</h1>
            <h1 className="name">ENGINEER</h1>
            <hr className="star-light"></hr>
            {/* <span className="skills">
            || HTML/CSS || JAVASCRIPT || REACTJS || OOP || BOOTSTRAP || GIT/GITHUB
            || PASCAL || LABVIEW || ARDUINO ||
          </span> */}
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
