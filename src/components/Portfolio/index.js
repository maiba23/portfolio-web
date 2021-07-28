import React, { useEffect } from "react";
import ImgPressPlay from "../../images/img_press_play.svg";
import ImgPortfolioWeb from "../../images/img_portfolio_website.svg";
import ImgReactIcon from "../../images/img_react.svg";
import ImgWebsite from "../../images/img_static_website.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
// REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

import AOS from "aos";
import "aos/dist/aos.css";
import "./Portfolio.css";

const popupboxConfig = {
  titleBar: {
    enable: true,
    text: "Portfolio Projects.",
  },
  fadeIn: true,
  fadeInSpeed: 500,
};

const popupContents = [
  {
    img: ImgReactIcon,
    techs: "ReactJS • HTML5 • CSS3",
    content: `The official catsSoft IT Services company website, with a functionality to be displayed in three different languages. Webpage implemented using such solutions as React Router, React Link, styled components & EmailsJS.`,
    url: "https://lukaszkot.biz/",
    gitlink: "https://github.com/lkot/portfolio-website",
  },
  {
    img: ImgPressPlay,
    techs: "ReactJS • HTML5 • CSS3 • Bootstrap",
    content: `My own fully responsive portoflio website.`,
    url: "https://lukaszkot.biz/",
    gitlink: "https://github.com/lkot/portfolio-website",
  },
  {
    img: ImgPortfolioWeb,
    techs: "ASP.NET MVC 5 • EntityFramework • HTML5 • CSS3 • Bootstrap",
    content: `KrewSystem is a further development of Blood Donation Center System via implementation of web portal for servicing blood donors. Application is an extension of already existing BDC's system and is dedicated for local departments of Lubuskie region located in 5 other cities.`,
    url: "https://lukaszkot.biz/",
    gitlink: "https://github.com/lkot/portfolio-website",
  },
  {
    img: ImgWebsite,
    techs: "ASP.NET MVC 5 • EntityFramework • HTML5 • CSS3 • Bootstrap",
    content: `KrewSystem.Sms is a further further development of existing Blood Donation Center. An application which main functionality is to send various short text messages as a notification for donors.`,
    url: "https://lukaszkot.biz/",
    gitlink: "https://github.com/lkot/portfolio-website",
  },
];

// Netflix
const openPopupBox = (props) => {
  const popup = (
    <>
      <img
        className="portfolio-image-popupbox"
        src={props.img}
        alt="portfolio"
      />
      <hr />
      <div className="portfolio-techs">
        <b>Frameworks, technologies & libraries used: </b> <p>{props.techs}</p>
      </div>
      <p>{props.content}</p>
      <b>Website:</b>{" "}
      <a className="hyper-link" href={props.url}>
        {props.url}
      </a>
      <br />
      <b>GitHub:</b>{" "}
      <a className="hyper-link" href={props.gitlink}>
        {props.gitlink}
      </a>
    </>
  );
  PopupboxManager.open({ popup });
};

const portfolios = [
  {
    openPopup: openPopupBox,
    img: ImgReactIcon,
    heading: "catsSoft.pl website",
  },
  {
    openPopup: openPopupBox,
    img: ImgPortfolioWeb,
    heading: "lukaszkot.biz website",
  },
  {
    openPopup: openPopupBox,
    img: ImgPressPlay,
    heading: "KrewSystem App",
  },
  {
    openPopup: openPopupBox,
    img: ImgWebsite,
    heading: "KrewSystem.Sms App",
  },
];

const PortfolioItem = ({ openPopup, img, heading, parameters }) => (
  <div
    className="portfolio-image-box"
    data-aos="zoom-in"
    data-aos-delay="100"
    onClick={() => openPopup(parameters)}
  >
    <img className="portfolio-image" src={img} alt={heading} />
    <h5>{heading}</h5>
    <div className="overflow"></div>
    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
  </div>
);

const Portfolio = () => {
  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);

  const portfolioList = portfolios.map((item, idx) => (
    <PortfolioItem
      key={idx}
      openPopup={item.openPopup}
      parameters={popupContents[idx]}
      img={item.img}
      heading={item.heading}
    />
  ));

  return (
    <div id="portfolio" className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">Projects' Portfolio</h1>
        <div className="image-box-wrapper row justify-content-center">
          {portfolioList}
        </div>
      </div>
      <PopupboxContainer {...popupboxConfig} />
    </div>
  );
};

export default Portfolio;
