import React from "react";
import "font-awesome/css/font-awesome.min.css";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer-page">
      <div className='list-inline'>
        <h3 className="find-me">CURRENT LOCATION</h3>
        <p className="p">Yerevan, Armenia</p>
        <br />
        <iframe
          title="Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48740.716926321074!2d44.44760925383783!3d40.224746973154076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406a9819fc213331%3A0x592823c41827a8a6!2sDavtashen%2C%20Yerevan!5e0!3m2!1sen!2s!4v1593074568367!5m2!1sen!2s"
          width="400"
          height="250"
          frameborder="0"
          style={{ borderRadius: "20px" }}
          allowfullscreen=""

        ></iframe>

      </div>
      <div className='list-inline'>
        <h2 className="find-me">FIND ME ON</h2>
        <ul className="list-inline">
          <li>
            <a
              href="https://github.com/DavGabrielian"
              target="_blank"
              class="btn-social btn-outline"
            >
              <span class="sr-only">Github</span>
              <i class="fa fa-fw fa-github"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/DavidGabrielOfficial"
              target="_blank"
              class="btn-social btn-outline"
            >
              <span class="sr-only">Facebook</span>
              <i class="fa fa-fw fa-facebook"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/david-gabrielian-244ba2135/"
              target="_blank"
              class="btn-social btn-outline"
            >
              <span class="sr-only">LinkedIn</span>
              <i class="fa fa-fw fa-linkedin"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
