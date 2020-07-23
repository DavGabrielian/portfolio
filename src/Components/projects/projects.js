import React, { Component } from "react";
import store from "../images/store.PNG";
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
                href="https://davgabrielian.github.io/online-store/"
                style={{textDecoration:'none'}}
                target="_blank"
                class="portfolio-link"
                data-toggle="modal"
              >
                <img src={store} class="img-responsive" alt="picgallery" />
              <h3 className='proj-name'>Online Store(ReactJS)</h3>
              </a>
            </div>
            <div class="project-item">
              <a
                href="https://davgabrielian.github.io/React-Coin/"
                                style={{textDecoration:'none'}}

                target="_blank"
                class="portfolio-link"
                data-toggle="modal"
                
              >
                <img src={coin} class="img-responsive" alt="picgallery" />
                              <h3 className='proj-name'>React Coin(ReactJS)</h3>

              </a>
            </div>
            <div class="project-item">
              <a
                href="https://github.com/DavGabrielian/Star-Wars"
                                style={{textDecoration:'none'}}

                target="_blank"
                class="portfolio-link"
                data-toggle="modal"
              >
                <img src={star} class="img-responsive" alt="picgallery" />
                    <h3 className='proj-name'>Star Wars DB(ReactJS)</h3>

              </a>
            </div>
            <div class="project-item">
              <a
                href="https://davgabrielian.github.io/React-Todo/"
                                style={{textDecoration:'none'}}

                target="_blank"
                class="portfolio-link"
                data-toggle="modal"
              >
                <img src={todo} class="img-responsive" alt="picgallery" />
                              <h3 className='proj-name'>Todo List(ReactJS)</h3>

              </a>
            </div>

            <div class="project-item">
              <a
                href="https://github.com/DavGabrielian/Registration"
                                style={{textDecoration:'none'}}

                target="_blank"
                class="portfolio-link"
                data-toggle="modal"
              >
                <img src={register} class="img-responsive" alt="picgallery" />
                              <h3 className='proj-name'>Registration Forum(PHP)</h3>

              </a>
            </div>
            <div class="project-item">
              <a
                href="https://github.com/DavGabrielian/WebSite"
                                style={{textDecoration:'none'}}

                target="_blank"
                class="portfolio-link"
                data-toggle="modal"
              >
                <img src={website} class="img-responsive" alt="picgallery" />
                              <h3 className='proj-name'>First Project(Vanilla JS)</h3>

              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
