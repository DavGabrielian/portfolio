import React, { Component } from "react";
import { Layout, Header, Navigation, Content } from "react-mdl";
import Pdf from "../resume/CV.pdf";
import LandingPage from "../landingPage/landingPage";
import pic from "../images/backgroundPic.jpg";
// import { Link, animateScroll as scroll } from "react-scroll";
import "./navbar.css";

export default class Navbar extends Component {
  render() {
    return (
      <div style={{ height: "700px", position: "relative" }}>
        <Layout
          fixedHeader
          style={{
            background: `url(${pic})
              center / cover`,
          }}
        >
          <Header
            transparent
            title={
              <a
                href="/"
                style={{
                  color: "#fff",
                  textShadow:
                    "rgb(0, 0, 0) 3px 0px 0px, rgb(0, 0, 0) 2.83487px 0.981584px 0px, rgb(0, 0, 0) 2.35766px 1.85511px 0px, rgb(0, 0, 0) 1.62091px 2.52441px 0px, rgb(0, 0, 0) 0.705713px 2.91581px 0px, rgb(0, 0, 0) -0.287171px 2.98622px 0px, rgb(0, 0, 0) -1.24844px 2.72789px 0px, rgb(0, 0, 0) -2.07227px 2.16926px 0px, rgb(0, 0, 0) -2.66798px 1.37182px 0px, rgb(0, 0, 0) -2.96998px 0.42336px 0px, rgb(0, 0, 0) -2.94502px -0.571704px 0px, rgb(0, 0, 0) -2.59586px -1.50383px 0px, rgb(0, 0, 0) -1.96093px -2.27041px 0px, rgb(0, 0, 0) -1.11013px -2.78704px 0px, rgb(0, 0, 0) -0.137119px -2.99686px 0px, rgb(0, 0, 0) 0.850987px -2.87677px 0px, rgb(0, 0, 0) 1.74541px -2.43999px 0px, rgb(0, 0, 0) 2.44769px -1.73459px 0px, rgb(0, 0, 0) 2.88051px -0.838247px 0px",
                  fontSize: "2rem",
                  textDecoration: "none",
                }}
              >
                David Gabrielian
              </a>
            }
            style={{
              color: "#fff",
              textShadow:
                "rgb(0, 0, 0) 3px 0px 0px, rgb(0, 0, 0) 2.83487px 0.981584px 0px, rgb(0, 0, 0) 2.35766px 1.85511px 0px, rgb(0, 0, 0) 1.62091px 2.52441px 0px, rgb(0, 0, 0) 0.705713px 2.91581px 0px, rgb(0, 0, 0) -0.287171px 2.98622px 0px, rgb(0, 0, 0) -1.24844px 2.72789px 0px, rgb(0, 0, 0) -2.07227px 2.16926px 0px, rgb(0, 0, 0) -2.66798px 1.37182px 0px, rgb(0, 0, 0) -2.96998px 0.42336px 0px, rgb(0, 0, 0) -2.94502px -0.571704px 0px, rgb(0, 0, 0) -2.59586px -1.50383px 0px, rgb(0, 0, 0) -1.96093px -2.27041px 0px, rgb(0, 0, 0) -1.11013px -2.78704px 0px, rgb(0, 0, 0) -0.137119px -2.99686px 0px, rgb(0, 0, 0) 0.850987px -2.87677px 0px, rgb(0, 0, 0) 1.74541px -2.43999px 0px, rgb(0, 0, 0) 2.44769px -1.73459px 0px, rgb(0, 0, 0) 2.88051px -0.838247px 0px",
              position: "fixed",
            }}
          >
            <Navigation>
              <a href={Pdf} target="_blank">
                RESUME
              </a>
              <a href="/">PROJECTS</a>
              <a href="/">ABOUT ME</a>
              <a href="/">CONTACT</a>
              {/* tried this  */}
              {/* onClick={this.scrollToContent}  */}
            </Navigation>
          </Header>
          <Content>
            <LandingPage />
          </Content>
        </Layout>
        <div className="img-div">
          <img
            className="img-pic"
            img-pic
            src="../images/profilePic.png"
            alt=""
          />
        </div>
      </div>
    );
  }
}
