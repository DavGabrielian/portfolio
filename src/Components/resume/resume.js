import React, { Component } from "react";
import Pdf from "./CV.pdf";
import { withRouter } from "react-router";
import "./resume.css";

 class Resume extends Component {
  render() {
    return (
      <div>
        <iframe id='resume' title="pdf" src={Pdf} />{" "}
      </div>
    );
  }
}

export default withRouter(Resume)