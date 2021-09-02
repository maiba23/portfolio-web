import React, { useEffect } from "react";
import "./Portfolio.css";
import ImgPressPlay from "../../images/img_press_play.svg";
import ImgPortfolioWeb from "../../images/img_portfolio_website.svg";
import ImgReactIcon from "../../images/img_react.svg";
// FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
// REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Portfolio = () => {
  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);

  const openPopupboxQiwi = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={ImgReactIcon}
          alt="Lottery Clone Project..."
        />
        <hr />
        <div className="portfolio-techs">
          <b>Frameworks, technologies & libraries used: </b>{" "}
          <p>NextJS • HTML5 • SCSS</p>
        </div>
        <p>
          QIWI LOTTO GROUP provides customers with an easy and interactive
          experience that combines high-end technology and easy user experience
          application.
        </p>
        <b>Website:</b>{" "}
        <a
          className="hyper-link"
          href="https://www.qiwilotto.com/"
          target="_blank"
          rel="noreferrer"
        >
          https://www.qiwilotto.com/
        </a>
        <br />
        <b>GitHub:</b>{" "}
        <a
          className="hyper-link"
          href="https://github.com/maiba23/qiwi-lotto"
          target="_blank"
          rel="noreferrer"
        >
          https://github.com/maiba23/qiwi-lotto
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigQiwi = {
    titleBar: {
      enable: true,
      text: "Portfolio Projects.",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  // My own portfolio website
  const openPopupboxPortfolioWebsite = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={ImgPortfolioWeb}
          alt="Portfolio website..."
        />
        <hr />
        <div className="portfolio-techs">
          <b>Frameworks, technologies & libraries used: </b>{" "}
          <p>ReactJS • HTML5 • CSS3 • Bootstrap</p>
        </div>
        <p>My own fully responsive portoflio website.</p>
        <b>Website:</b>{" "}
        <a
          className="hyper-link"
          href="https://yurii-portfolio.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          https://yurii-portfolio.netlify.app/
        </a>
        <br />
        <b>GitHub:</b>{" "}
        <a
          className="hyper-link"
          href="https://github.com/lkot/portfolio-website"
          target="_blank"
          rel="noreferrer"
        >
          https://github.com/maiba23/portfolio-website
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigPortfolioWebsite = {
    titleBar: {
      enable: true,
      text: "Portfolio Projects.",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  // Insurance Assist App
  const openPopupboxIA = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox portfolio-mobile-image-display"
          src={ImgPressPlay}
          alt="Insurance Assit App..."
        />
        <hr />
        <div className="portfolio-techs">
          <b>Frameworks, technologies & libraries used: </b>{" "}
          <p>React • AOS • HTML5 • CSS3 • Bootstrap</p>
        </div>
        <p>Helping you find the best financial strategy available.</p>
        <b>Website:</b>{" "}
        <a
          className="hyper-link"
          href="http://ia.atidot.co/"
          target="_blank"
          rel="noreferrer"
        >
          http://ia.atidot.co/
        </a>
        <br />
        <b>GitHub:</b>{" "}
        <a
          className="hyper-link"
          href="https://github.com/maiba23/theinsurance-assist"
          target="_blank"
          rel="noreferrer"
        >
          https://github.com/maiba23/theinsurance-assist
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigIA = {
    titleBar: {
      enable: true,
      text: "Portfolio Projects.",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  return (
    <div id="portfolio" className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">Projects' Portfolio</h1>
        <div className="image-box-wrapper row justify-content-center">
          <div
            className="portfolio-image-box"
            data-aos="zoom-in"
            data-aos-delay="100"
            onClick={openPopupboxQiwi}
          >
            <img
              className="portfolio-image"
              src={ImgReactIcon}
              alt="Lottery Clone Project..."
            />
            <h5>QIWI Lottery Website</h5>
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div
            className="portfolio-image-box"
            data-aos="zoom-in"
            data-aos-delay="200"
            onClick={openPopupboxPortfolioWebsite}
          >
            <img
              className="portfolio-image"
              src={ImgPortfolioWeb}
              alt="Portfolio Project..."
            />
            <h5>Yurii Portfolio Website</h5>
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div
            className="portfolio-image-box"
            data-aos="zoom-in"
            data-aos-delay="150"
            onClick={openPopupboxIA}
          >
            <img
              className="portfolio-image"
              src={ImgPressPlay}
              alt="Insurance Assist App..."
            />
            <h5>Insurance Assist App</h5>
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
        </div>
      </div>
      <div>
        <PopupboxContainer {...popupboxConfigQiwi} />
        <PopupboxContainer {...popupboxConfigPortfolioWebsite} />
        <PopupboxContainer {...popupboxConfigIA} />
      </div>
    </div>
  );
};

export default Portfolio;
