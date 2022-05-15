import React, { useEffect } from "react";
import "./Technologies.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faJsSquare,
  faCss3Alt,
  faHtml5,
  faBootstrap,
  faNpm,
  faGithub,
  faSlack,
  faSass,
  faNodeJs,
  faLaravel,
  faPhp,
  faBitcoin,
  faCss3,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faCode } from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";

const Technologies = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const technologies = [
    {
      icon: faHtml5,
      name: "HTML5",
    },
    {
      icon: faCss3,
      name: "CSS3",
    },
    {
      icon: faSass,
      name: "SASS",
    },
    {
      icon: faJsSquare,
      name: "JavaScript",
    },
    {
      icon: faNodeJs,
      name: "NodeJS",
    },
    {
      icon: faDatabase,
      name: "MySQL",
    },
    {
      icon: faPhp,
      name: "PHP",
    },
    {
      icon: faReact,
      name: "ReactJS",
    },
    {
      icon: faLaravel,
      name: "Laravel",
    },
    {
      icon: faBitcoin,
      name: "Web3",
    },
    {
      icon: faBootstrap,
      name: "Bootstrap",
    },
    {
      icon: faGithub,
      name: "Github",
    },
    {
      icon: faNpm,
      name: "NPM",
    },
    {
      icon: faCode,
      name: "VS Code",
    },
    {
      icon: faSlack,
      name: "Slack",
    },
  ];

  return (
    <div id="technologies" className="technologies">
      <h1 className="py-5">Frameworks, Libraries & Technologies</h1>
      <div className="container">
        <div className="row">
          {technologies.map((item, idx) => (
            <div
              className="col-xl-2 col-lg-4 col-md-auto col-sm-6 col-6 d-flex justify-content-center"
              key={idx}
            >
              <div
                className="box"
                data-aos="flip-left"
                data-aos-delay={(idx + 1) * 100}
              >
                <div className="circle">
                  <FontAwesomeIcon
                    className="icon"
                    icon={item.icon}
                    size="2x"
                  />
                </div>
                <h3>{item.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technologies;
