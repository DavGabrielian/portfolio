import React, { Component } from "react";
import Pdf from "./CV.pdf";
import "./resume.css";

export default class Resume extends Component {
  render() {
    return (
        <div >
        <a href = {Pdf} >Download Pdf</a>
      </div>
    );
  }
}
