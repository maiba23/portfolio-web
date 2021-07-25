import React from "react";
import "./Navbar.css";
import logo from "./logo-luk-kot-SD-2.png";
// REACT FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";
// import $ from "jquery";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <div className="container">
        <Link smooth={true} to="home" offset={-80}>
          <img className="logo" src={logo} alt="logo..." />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#thetarget"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
        </button>

        <div className="collapse navbar-collapse" id="thetarget">
          <ul className="navbar-nav ml-auto">
            {/* <li className="nav-item active">
              <Link smooth={true} to="home" className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li> */}
            <li
              className="nav-item"
              aria-expanded="false"
              id="navbarSupportedContent"
            >
              <Link
                smooth={true}
                to="about"
                offset={-80}
                className="nav-link"
                href="#"
              >
                about me
              </Link>
            </li>
            <li
              className="nav-item"
              aria-expanded="false"
              id="navbarSupportedContent"
            >
              <Link
                smooth={true}
                to="portfolio"
                offset={-80}
                className="nav-link"
                href="#"
              >
                portfolio
              </Link>
            </li>
            <li
              className="nav-item"
              aria-expanded="false"
              id="navbarSupportedContent"
            >
              <Link
                smooth={true}
                to="technologies"
                offset={-80}
                className="nav-link"
                href="#"
              >
                technologies
              </Link>
            </li>
            <li
              className="nav-item"
              aria-expanded="false"
              id="navbarSupportedContent"
            >
              <Link
                smooth={true}
                to="experience"
                offset={-80}
                className="nav-link"
                href="#"
              >
                experience
              </Link>
            </li>
            <li
              className="nav-item"
              aria-expanded="false"
              id="navbarSupportedContent"
            >
              <Link
                smooth={true}
                to="ventures"
                offset={-80}
                className="nav-link"
                href="#"
              >
                ventures
              </Link>
            </li>
            <li
              className="nav-item"
              aria-expanded="false"
              id="navbarSupportedContent"
            >
              <Link
                smooth={true}
                to="contacts"
                offset={-80}
                className="nav-link"
                href="#"
              >
                contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

// $("#navbarSupportedContent a:not(.dropdown-toggle)").click(function () {
//   $("#navbarSupportedContent").collapse("hide");
// });

// $("#navbarSupportedContent").on("show.bs.collapse", function () {
//   $("a.nav-link").click(function () {
//     $("#navbarSupportedContent").collapse("hide");
//   });
// });

// $(document).ready(function () {
//   $(".navbar-nav li.trigger-collapse a").click(function (event) {
//     $(".navbar-collapse").collapse("hide");
//   });
// });
export default Navbar;
