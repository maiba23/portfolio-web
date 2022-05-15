import React from "react";
import { IconContext } from "react-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

const Footer = () => {
  return (
    <IconContext.Provider value={{ size: "36" }}>
      <div id="footer" className="footer">
        <div className="container">
          <div className="row justify-content-center">
            <div className="d-flex">
              <a
                className="footer-icon"
                href="https://github.com/topdev23"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
            </div>
          </div>
          <div className="row justify-content-center">
            <a className="footer-email" href="mailto:topcoderwizard@gmail.com">
              topcoderwizard@gmail.com
            </a>
          </div>
          <div className="row justify-content-center">
            <a
              className="footer-email"
              href="resume.pdf"
              target="_blank"
              download
            >
              Resume
            </a>
          </div>
          <div className="row justify-content-center">
            <p className="d-flex">
              Copyright &copy; {new Date().getFullYear()}&nbsp; | Stefan | All
              Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default Footer;
