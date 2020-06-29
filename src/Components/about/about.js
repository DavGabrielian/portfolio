import React, { Component } from "react";
import "./about.css";

export default class About extends Component {
  render() {
    return (
      <div className="about-page">
        <h1 className="about-me"> ABOUT ME </h1>
        <hr className="star-light"></hr>

        <p className="about-paragraph">
          Front End Web Developer who is very passionate about learning,
          creating and developing new things. I have taken part in several
          courses and gained knowledge and experience about HTML/CSS, PHP,
          Javascript, ReactJS, Git, GitHub and also basic/fundamental C/C++,
          PHP, SQL. I am also an engineer - student of NPUA Institute of
          Information and Telecommunication Technologies and Electronics. During
          my experience I have learned how to write code efficiently in a team
          and adapt to new situations.
        </p>
      </div>
    );
  }
}
