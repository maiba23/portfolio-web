import React, { useEffect } from "react";
import "./Portfolio.css";
// FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
// REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";
import AOS from "aos";
import "aos/dist/aos.css";
//Import Images
import ImgPortfolioWeb from "../../images/portfolio.png";
import ImgInsuranceAssist from "../../images/insurance.png";
import ImgAltrady from "../../images/altrady.png";
import ImgLottery from "../../images/bitcoin.png";
import ImgNdb from "../../images/ndb.png";
import ImgLlama from "../../images/llama.png";

const Portfolio = () => {
  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);

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
          href="https://stefan-berat.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          https://stefan-berat.netlify.app/
        </a>
        <br />
        <b>GitHub:</b>{" "}
        <a
          className="hyper-link"
          href="https://github.com/topdev23/portfolio-website"
          target="_blank"
          rel="noreferrer"
        >
          https://github.com/topdev23/portfolio-website
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };
  // Insurance Assist App
  const openPopupboxIA = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox portfolio-mobile-image-display"
          src={ImgInsuranceAssist}
          alt="Insurance Assit App..."
        />
        <hr />
        <div className="portfolio-techs">
          <b>Frameworks, technologies & libraries used: </b>{" "}
          <p>React • Redux • HTML5 • CSS3 • Bootstrap</p>
        </div>
        <b>Website:</b>{" "}
        <a
          className="hyper-link"
          href="https://theinsuranceassist.com/"
          target="_blank"
          rel="noreferrer"
        >
          https://theinsuranceassist.com/
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };
  //Altrady
  const openPopupboxAltrady = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={ImgAltrady}
          alt="Altrady Project..."
        />
        <hr />
        <div className="portfolio-techs">
          <b>Frameworks, technologies & libraries used: </b>{" "}
          <p>GatsbyJS • Bootstrap • SCSS • Prismic CMS</p>
        </div>
        <b>Website:</b>{" "}
        <a
          className="hyper-link"
          href="https://altrady.com/"
          target="_blank"
          rel="noreferrer"
        >
          https://altrady.com/
        </a>
        <br />
      </>
    );
    PopupboxManager.open({ content });
  };
  //Bitcoin Lottery
  const openPopupboxLottery = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={ImgLottery}
          alt="Bitcoin Lottery Project..."
        />
        <hr />
        <div className="portfolio-techs">
          <b>Frameworks, technologies & libraries used: </b>{" "}
          <p>NextJS • Redux • CSS/SCSS • WordPress</p>
        </div>
        <b>Website:</b>{" "}
        <a
          className="hyper-link"
          href="https://bitcoinlotterys.com/"
          target="_blank"
          rel="noreferrer"
        >
          https://bitcoinlotterys.com/
        </a>
        <br />
      </>
    );
    PopupboxManager.open({ content });
  };
  //NDB
  const openPopupboxNdb = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={ImgNdb}
          alt="NDB Project..."
        />
        <hr />
        <div className="portfolio-techs">
          <b>Frameworks, technologies & libraries used: </b>{" "}
          <p>GatsbyJS • Redux • GraphQL • Bootstrap • CSS/SCSS</p>
        </div>
        <b>Website:</b>{" "}
        <a
          className="hyper-link"
          href="https://ndb.technology/"
          target="_blank"
          rel="noreferrer"
        >
          https://ndb.technology/
        </a>
        <br />
      </>
    );
    PopupboxManager.open({ content });
  };
  //EasyLlama
  const openPopupboxLlama = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={ImgLlama}
          alt="EasyLlama Project..."
        />
        <hr />
        <div className="portfolio-techs">
          <b>Frameworks, technologies & libraries used: </b>{" "}
          <p>GatsbyJS • Hubspot • GraphQL • Styled Components • Strapi CMS</p>
        </div>
        <b>Website:</b>{" "}
        <a
          className="hyper-link"
          href="https://www.easyllama.com/"
          target="_blank"
          rel="noreferrer"
        >
          https://www.easyllama.com/
        </a>
        <br />
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfig = {
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
          {/* Portfolio */}
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
            <h5>Portfolio Website</h5>
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* Insurance Assist */}
          <div
            className="portfolio-image-box"
            data-aos="zoom-in"
            data-aos-delay="150"
            onClick={openPopupboxIA}
          >
            <img
              className="portfolio-image"
              src={ImgInsuranceAssist}
              alt="Insurance Assist App..."
            />
            <h5>Insurance Assist App</h5>
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* Altrady */}
          <div
            className="portfolio-image-box"
            data-aos="zoom-in"
            data-aos-delay="100"
            onClick={openPopupboxAltrady}
          >
            <img
              className="portfolio-image"
              src={ImgAltrady}
              alt="Lottery Clone Project..."
            />
            <h5>Altrady</h5>
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* Bitcoin Lottery */}
          <div
            className="portfolio-image-box"
            data-aos="zoom-in"
            data-aos-delay="100"
            onClick={openPopupboxLottery}
          >
            <img
              className="portfolio-image"
              src={ImgLottery}
              alt="Bitcoin Lottery Project..."
            />
            <h5>Bitcoin Lottery</h5>
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* NDB */}
          <div
            className="portfolio-image-box"
            data-aos="zoom-in"
            data-aos-delay="100"
            onClick={openPopupboxNdb}
          >
            <img
              className="portfolio-image"
              src={ImgNdb}
              alt="Bitcoin Lottery Project..."
            />
            <h5>NDB</h5>
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* EasyLlama */}
          <div
            className="portfolio-image-box"
            data-aos="zoom-in"
            data-aos-delay="100"
            onClick={openPopupboxLlama}
          >
            <img
              className="portfolio-image"
              src={ImgLlama}
              alt="EasyLlama Project..."
            />
            <h5>EasyLlama</h5>
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
        </div>
      </div>
      <div>
        <PopupboxContainer {...popupboxConfig} />
      </div>
    </div>
  );
};

export default Portfolio;
