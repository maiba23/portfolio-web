import React from "react";
import { Link } from "react-scroll";
import { Logo } from "../../utils/imgImport";
import "./Navbar.css";

const linkNames = ["about", "portfolio", "technologies", "experience"];

const LinkComponent = ({ linkTo, navSlide }) => (
  <li>
    <Link
      smooth={true}
      to={linkTo}
      offset={-80}
      className="nav-link"
      href="#"
      onClick={navSlide}
    >
      {linkTo}
    </Link>
  </li>
);

function NavbarX() {
  const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");

    //Toggle Nav
    nav.classList.toggle("nav-active");

    //Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.3
        }s`;
      }
    });
    //Burger Animation
    burger.classList.toggle("toggle");
  };

  const linkList = linkNames.map((item, idx) => (
    <LinkComponent key={idx} linkTo={item} navSlide={navSlide} />
  ));

  return (
    <>
      <nav>
        <Link smooth={true} to="home" offset={-80}>
          <img className="logo" src={Logo} alt="logo..." />
        </Link>
        <ul className="nav-links">{linkList}</ul>
        <div className="burger" onClick={navSlide}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    </>
  );
}

export default NavbarX;
