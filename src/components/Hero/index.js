import React, { useEffect } from "react";
import Typed from "react-typed";
import { Link } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Hero.css";
import { Avatar } from "../../utils/imgImport";

const Header = () => {
  useEffect(() => {
    AOS.init({
      startEvent: "DOMContentLoaded",
      offset: 200,
      duration: 3000,
      once: true,
    });
  });

  return (
    <div id="home" className="header-wrapper">
      <div className="main-info">
        <img
          className="profile-img img-fluid"
          src={Avatar}
          alt="author..."
          data-aos="fade-down"
        />
        <h1 data-aos="fade-down">
          Hey, I'm Stefan Berat! I am well versed in:{" "}
        </h1>
        {/* Using React-Typed package to display 'writing text animation'. */}
        <Typed
          className="typed-text"
          strings={[
            "ReactJS",
            "GatsbyJS",
            "NextJS",
            "NodeJS",
            "Laravel/PHP",
            "Git",
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
          data-aos="fade-down"
        />
        <h1 data-aos="fade-down">Let's work together!</h1>
        <Link
          smooth={true}
          to="contacts"
          offset={-80}
          className="btn-main-offer"
          href="#"
        >
          Contact me
        </Link>
      </div>
    </div>
  );
};

export default Header;
