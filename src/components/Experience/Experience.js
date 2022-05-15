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
            <h3>2016 ~ 2019</h3>
            <h4>University of Novi Sad</h4>
            <h5>Computer Science graduate with Bachelor of Science degree. </h5>
            <hr />
            <h5>Additional IT courses: </h5>
            <p>• Programming in JavaScript</p>
            <p>• Web Applications Development with React framework.</p>
            <hr />
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-right">
          <div className="marker" data-aos="zoom-in"></div>
          <div className="timeline-content" data-aos="slide-left">
            <h3>Sep 2018 ~ Mar 2020</h3>
            <h4>React Frontend Developer | Atidot Ltd</h4>
            <p>
              • Developed Atidot Weekly Report Web APP during the internship.
              (React + Styled Components + Rechart.js)
            </p>
            <p>• Convert Webflow to React.</p>
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
            <h3>Aug 2020 ~ Feb 2021</h3>
            <h4>Sr. NextJS Engineer | Bravio Technologies Ltd</h4>
            <p>
              • Improved the site speed and performance by converting WordPress
              to NextJS.
            </p>
            <p>
              The application's functionality is based on the NextJS framework.
              Other technologies, frameworks and libraries used: Reudx, SCSS,
              JavaScript, WordPress, etc.
            </p>
            <hr />
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-right">
          <div className="marker" data-aos="zoom-in"></div>
          <div className="timeline-content" data-aos="slide-left">
            <h3>Apr 2021 ~ Sep 2021</h3>
            <h4>JAMStack Developer | Altrady BV</h4>
            <p>
              • Built the Marketing Website by using Gatsby + Prismic Headless
              CMS
            </p>
            <p>
              The application's functionality is based on the GatsbyJS
              framework. Other technologies, frameworks and libraries used:
              Bootstrap, SCSS, Prismic CMS, etc.
            </p>
            <hr />
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker" data-aos="zoom-in"></div>
          <div className="timeline-content" data-aos="slide-right">
            <h3>Nov 2021 ~ Jan 2022</h3>
            <h4>Gatsby Specialist | NDB Inc</h4>
            <p>• Built the site by using GatsbyJS and integrated GraphQL API</p>
            <p>
              The application's functionality is based on the React framework.
              Other technologies, frameworks and libraries used: Redux, GraphQL,
              Bootstrap, SCSS, etc.
            </p>
            <hr />
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-right">
          <div className="marker" data-aos="zoom-in"></div>
          <div className="timeline-content" data-aos="slide-left">
            <h3>Feb 2022 ~ May 2021</h3>
            <h4>JAMStack Developer | EasyLlama Inc</h4>
            <p>
              • Rebuilt the existing marketing website by using Gatsby and
              Strapi Headless CMS
            </p>
            <p>
              The application's functionality is based on the React framework.
              Other technologies, frameworks and libraries used: Styled
              Components, GraphQL, HubSpot, Strapi CMS, etc.
            </p>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
