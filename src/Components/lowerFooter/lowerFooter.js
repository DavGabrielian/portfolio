import React, { Component } from "react";
import { Footer, FooterSection, FooterLinkList } from "react-mdl";

class LowerFooter extends Component {
  render() {
    return (
      <div>
        <Footer size="mini">
          <FooterSection>
            <FooterLinkList>
              <div>
                <p>Copyright © David Gabrielian 2020</p>
                <a
                  style={{ fontSize: "25px" }}
                  href="https://github.com/DavGabrielian/portfolio"
                  target="_blank"

                >
                  VIEW CODE HERE
                  <i
                    class="fa fa-fw fa-github"
                    style={{ fontSize: "35px" }}
                  ></i>
                </a>
              </div>
            </FooterLinkList>
          </FooterSection>
        </Footer>
      </div>
    );
  }
}

export default LowerFooter;
