import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./AboutMe.css";

const AboutMe = () => {
  useEffect(() => {
    AOS.init({
      startEvent: "DOMContentLoaded",
      offset: 200,
      once: true,
    });
  }, []);

  return (
    //    These e.g. "container py-5" classes are the Bootstrap classes.
    <div id="about" className="about">
      <div className="container py-5">
        <h1 className="py-5">About Me</h1>
        <div className="row">
          <div
            className="col-lg-6 col-xm-12"
            data-aos="fade-right"
            data-aos-delay="250"
          >
            <div>
              <hr />
              <h4>Brief Introduction</h4>
              <hr />
              <span className="bold-text">Hey there, good day!</span>
              <br />
              <br />
              My name is Yurii Maiba from Ukraine.
              <br />
              I’ve graduated in{" "}
              <span className="bold-text">
                Computer Science from the National University “Lviv Politechnic”
                with Bachelor’s degree.{" "}
              </span>
              <br />
              <br />
              Previously, I've worked at Atidot and Sigma as a web developer,
              and here I've delivered kick-ass campaigns and cutting-edge web
              experiences.
              <br />
              <br />I have 5 years of experience as a developer and love working
              with <span className="bold-text">React</span> and other hip
              frameworks.
              <br />
              <br />
              At the moment I am working remotely as a freelancer at home.
              <br />
              <br />I love the neat, minimalistic design with an emphasis on the
              details, which gives the applications a slick style. Fine
              animations, well-matched colors of the graphic design with dynamic
              functionalities – definitely such approach ensures the product a
              competitive advantage on the market.
            </div>
          </div>
          <div
            className="col-lg-6 col-xm-12"
            data-aos="fade-left"
            data-aos-delay="250"
          >
            <div>
              <hr />
              <h4>Personality & Skills</h4>
              <hr />
              <span className="bold-text">
                {" "}
                A little bit more about myself.
              </span>
              <br />
              <br />I am ambitious, communicative, and always eager to improve
              my skills.
              <br />
              <br />
              <span className="bold-text">
                {" "}
                Paying attention to details, always eager to improve my skills.
                <br />
                Teamwork in a professional, yet fun atmosphere, is something I
                value the most!
              </span>{" "}
              <br />
              <br />
              <span className="bold-text">
                Working especially with the ReactJS library brings me the most
                fun.
              </span>
              <br />
              <br />
              Due to the simplicity and numerous possibilities that React brings
              I bond my future as a software developer particularly with this
              technology.
              <br />
              <br />
              Demanding tasks certainly are no stranger to me. I reckon that all
              of the ventures I have undertaken so far speak for themselves.
              They show, that what I have written, is not just some{" "}
              <span className="bold-text">empty words</span>.
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
