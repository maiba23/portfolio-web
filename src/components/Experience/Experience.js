import React, { useEffect } from "react";
import "./Experience.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Experience = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div id="experience" className="experience">
      {/* These e.g. classes below are the Bootstrap classes. */}
      <div className="d-flex justify-content-center my-5">
        <h1>Education & Experience Timeline</h1>
      </div>
      <div className="container experience-wrapper">
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker" data-aos="fade-down"></div>
          <div className="timeline-content" data-aos="slide-right">
            <h3>2014 ~ 2019</h3>
            <h4>National Univercity “Lviv Politechnic”</h4>
            <h5>Computer Science graduate with Bachelor of Science degree. </h5>
            <hr />
            <h5>Additional Altkom Akademia IT courses: </h5>
            <p>· Programming in JavaScript</p>
            <p>· Web Applications Development with React framework.</p>
            <hr />
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-right">
          <div className="marker" data-aos="zoom-in"></div>
          <div className="timeline-content" data-aos="slide-left">
            <h3>April 2019 ~ June 2019</h3>
            <h4>Computer Science studies graduated.</h4>
            <h5>BSc thesis' final project - KrewSystem Application</h5>
            <p>
              KrewSystem is a further development of Blood Donation Center
              System via implementation of web portal for servicing blood
              donors. Application is an extension of already existing BDC's
              system and is dedicated for local departments of Lubuskie region
              located in 5 other cities.
            </p>
            <p>
              The application's functionality is based on the React framework.
              Other technologies, frameworks and libraries used: HTML5, CSS3,
              JavaScript, Bootstrap, etc.
            </p>
            <hr />
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker" data-aos="zoom-in"></div>
          <div className="timeline-content" data-aos="slide-right">
            <h3>July 2019 ~ March 2021</h3>
            <h4>Intern Software Developer | Sigma software</h4>
            <p>
              • Developing & implementing applications' functionalities based on
              the React framework and Laravel MVC framework along with
              technologies such as HTML 5, CSS 3, SCSS, Bootstrap, JavaScript,
              and PHP.
            </p>
            <hr />
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-right">
          <div className="marker" data-aos="zoom-in"></div>
          <div className="timeline-content" data-aos="slide-left">
            <h3>2021</h3>
            <h4>April 2021 ~ July 2021</h4>
            <h5>Frontend Developer | Atidot LTD</h5>
            <p>
              • Worked as a frontend developer: Converted old websites to React
              and Next.
            </p>
            <hr />
            <h4>August 2021 ~ Currently</h4>
            <h5>Web Developer | Upwork</h5>
            <p>
              • Working as a freelancer at upwork.com • Working independently
              and remotely and flexible working hours at home
            </p>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
