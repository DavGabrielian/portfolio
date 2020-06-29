import React, { Component } from "react";
import 'font-awesome/css/font-awesome.min.css';
import "./contact.css";

export default class Contact extends Component {
  render() {
    return (
      <div className="contact-page">
        <h2 className="contact-me"> CONTACT ME </h2>
        <div >
          <ul className='contact'>
            <li  style={{textAlign: "center"}}>
              <p className='cont-name'>
                <i className="fa fa-envelope fa-3x" />
              </p>
              <p className='cont-name'>
                <strong>E-mail</strong>
                <br />
                davidgabrielofficial@gmail.com
              </p>
            </li>
            <li style={{textAlign: "center"}}>
              <p className='cont-name'>
                <i className="fa fa-phone fa-3x" />
              </p>
              <p className='cont-name'>
                <strong>Phone</strong>
                <br />
                +(374) 77-365-055
              </p>
            </li>

          </ul>
        </div>
      </div>
    );
  }
}
