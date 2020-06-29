import React, { Component } from "react";
// import Resume from "../resume/resume";
import Nav from "../navbar/nav";
import LandingPage from "../landingPage/landingPage";
import Projects from "../projects/projects";
import Contact from "../contact/contact";
import About from "../about/about";
import Footer from "../footer/footer";
import LowerFooter from "../lowerFooter/lowerFooter";
import Logo from "../images/logo.png";
import { animateScroll as scroll } from "react-scroll";

import "./app.css";
import { BrowserRouter } from "react-router-dom";

class App extends Component {
  // constructor(props) {
  //   super(props)
  //   this.Projects=React.createRef();
  //   this.About=React.createRef();
  //   this.Contact=React.createRef();
  //   this.Footer=React.createRef();
  // }

  // scrollToContent(content) {
  //   switch (content) {
  //     case 1:
  //       this.Projects.current.scrollIntoView({ behavior: "smooth" });
  //     case 2:
  //       this.About.current.scrollIntoView({ behavior: "smooth" });
  //     case 3:
  //       this.Contact.current.scrollIntoView({ behavior: "smooth" });
  //     case 4:
  //       this.Footer.current.scrollIntoView({ behavior: "smooth" });
  //   }
  // }
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <div>
          <Nav />

        <img
          src={Logo}
          className="logo"
          alt="Logo."
          onClick={this.scrollToTop}
        />
        <LandingPage />
        {/* <Resume /> */}
        <Projects id="projects" />
        <About id="about" />
        <Contact id="contact" />
        <Footer id="footer" />
        <LowerFooter />
        {/* tried this */}
        {/* scrollToTop={this.scrollToTop} ref={this.Projects} */}
      </div>
    );
  }
}

export default App;
