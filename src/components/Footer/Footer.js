import React from "react";
import "./Footer.css";
import { IconContext } from "react-icons";
import {
  FaGithub,
  FaInstagram,
  FaFacebook,
  FaLinkedinIn,
} from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <IconContext.Provider value={{ size: "36" }}>
      <div id="footer" className="footer">
        <div className="container">
          <div className="row justify-content-center">
            <div className="d-flex">
              <a
                className="footer-icon"
                href="https://github.com/lkot"
                target="_blank"
              >
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
              <a
                className="footer-icon"
                href="https://www.linkedin.com/in/kot-lukasz/"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
              <a
                className="footer-icon"
                href="https://www.facebook.com/kicirrus/"
                target="_blank"
              >
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a
                className="footer-icon"
                href="https://www.instagram.com/luk_kot"
                target="_blank"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
            </div>
          </div>
          <div className="row justify-content-center">
            {/* <p className="footer-icon d-flex">lukasz.kot@hotmail.com</p> */}
            <a
              className="footer-email"
              href="mailto:lukasz.kot@hotmail.com?body=My custom mail body"
            >
              lukasz.kot@hotmail.com
            </a>
          </div>
          <div className="row justify-content-center">
            <a className="footer-email" href="tel:691-082-823">
              +48 691 082 823
            </a>
          </div>
          <div className="row justify-content-center">
            <p className="d-flex">
              Copyright &copy; {new Date().getFullYear()}&nbsp; | Łukasz Kot |
              All Rights Reserved
            </p>
          </div>
          <div className="row">
            {/* <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="d-flex">
              <p>Address: Zielona Gora, Poland.</p>
            </div>
            <div className="d-flex">
              <a href="tel:555-555-555">+48691082823</a>
            </div>
            <div className="d-flex">
              <p>lukasz.kot@hotmail.com</p>
            </div>
          </div> */}
            {/* <div className="col-lg-3 col-md-2 col-sm-6">
              <div className="row">
                <div className="col">
                  <a className="footer-nav">Home</a>
                  <br />
                  <a className="footer-nav">About me</a>
                  <br />
                  <a className="footer-nav">Services</a>
                </div>
                <div className="col">
                  <a className="footer-nav">Experience</a>
                  <br />
                  <a className="footer-nav">Portfolio</a>
                  <br />
                  <a className="footer-nav">Contacts</a>
                </div>
              </div>
            </div> */}
            {/* <div className="col-lg-5 col-md-5 col-sm-6 align-items-center"> */}
            <div>
              {/* <div className="d-flex justify-content-center">
              <FacebookShareButton
                url={"https://www.youtube.com/8020coding"}
                quote={"FullStack Developer"}
                hashtag="#javascript"
              >
                <FacebookIcon className="mx-3" size={36} />
              </FacebookShareButton>
              <TwitterShareButton
                url={"https://www.youtube.com/8020coding"}
                quote={"FullStack Developer"}
                hashtag="#javascript"
              >
                <TwitterIcon className="mx-3" size={36} />
              </TwitterShareButton>
              <RedditShareButton
                url={"https://www.youtube.com/8020coding"}
                quote={"FullStack Developer"}
                hashtag="#javascript"
              >
                <RedditIcon className="mx-3" size={36} />
              </RedditShareButton>
              <LinkedinShareButton
                url={"https://www.youtube.com/8020coding"}
                quote={"FullStack Developer"}
                hashtag="#javascript"
              >
                <LinkedinIcon className="mx-3" size={36} />
              </LinkedinShareButton>
            </div> */}
            </div>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default Footer;
