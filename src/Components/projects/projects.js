import React, { Component } from "react";
import portfolio from "../images/portfolio.PNG";
import star from "../images/star.PNG";
import coin from "../images/coin.PNG";
import todo from "../images/todo.PNG";
import register from "../images/register.PNG";
import website from "../images/website.PNG";
import "./projects.css";

export default class Projects extends Component {
  render() {
    return (
      <div className="project-page">
        <h2 className="project-name"> RECENT PROJECTS </h2>
        <hr className="star-primary"></hr>
        <div className="container">
          <div className="row">
            <div class="project-item">
              <a
                href="https://github.com/DavGabrielian/dav-portfolio"
                target="_blank"
                class="portfolio-link"
                data-toggle="modal"
              >
                <img src={portfolio} class="img-responsive" alt="picgallery" />
              </a>
            </div>
            <div class="project-item">
              <a
                href="https://github.com/DavGabrielian/Star-Wars"
                target="_blank"
                class="portfolio-link"
                data-toggle="modal"
              >
                <img src={star} class="img-responsive" alt="picgallery" />
              </a>
            </div>
            <div class="project-item">
              <a
                href="https://github.com/DavGabrielian/React-Coin"
                target="_blank"
                class="portfolio-link"
                data-toggle="modal"
              >
                <img src={coin} class="img-responsive" alt="picgallery" />
              </a>
            </div>
            <div class="project-item">
              <a
                href="https://github.com/DavGabrielian/React-Todo/"
                target="_blank"
                class="portfolio-link"
                data-toggle="modal"
              >
                <img src={todo} class="img-responsive" alt="picgallery" />
              </a>
            </div>
            <div class="project-item">
              <a
                href="https://github.com/DavGabrielian/Registration"
                target="_blank"
                class="portfolio-link"
                data-toggle="modal"
              >
                <img src={register} class="img-responsive" alt="picgallery" />
              </a>
            </div>
            <div class="project-item">
              <a
                href="https://github.com/DavGabrielian/WebSite"
                target="_blank"
                class="portfolio-link"
                data-toggle="modal"
              >
                <img src={website} class="img-responsive" alt="picgallery" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
