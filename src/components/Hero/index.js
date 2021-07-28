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
          data-aos-delay="100"
        />
        <h1 data-aos="fade-down" data-aos-delay="200">
          Hey, I'm Yurii Maiba Senior Frontend Developer.
        </h1>
        <h1 data-aos="fade-down" data-aos-delay="300">
          Let's work together!
        </h1>
        {/* Using React-Typed package to display 'writing text animation'. */}
        <Typed
          className="typed-text"
          strings={[
            "HTML 5",
            "CSS/SCSS",
            "Bootstrap",
            "JavaScript",
            "ReactJS",
            "GatsbyJS",
            "NextJS",
            "Laravel/PHP",
            "GitHub/GitLab",
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
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
