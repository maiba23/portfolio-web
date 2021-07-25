import React from "react";
import "./NavigationBar.css";

function NavigationBar() {
  const navSlideNew = () => {
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

  // const navSlide = () => {
  //   const burger = document.querySelector(".burger");
  //   const nav = document.querySelector(".nav-links");
  //   const navLinks = document.querySelectorAll(".nav-links li");

  //   burger.addEventListener("click", () => {
  //     nav.classList.toggle("nav-active");

  //     navLinks.forEach((link, index) => {
  //       if (link.style.animation) {
  //         link.style.animation = "";
  //       } else {
  //         link.style.animation = `navLinkFade 0.5s ease forwards ${
  //           index / 7 + 0.5
  //         }s`;
  //       }
  //     });
  //     burger.classList.toggle("toggle");
  //   });
  // };

  return (
    <>
      <nav>
        <div className="logo">
          <h4>The Nav</h4>
        </div>
        <ul className="nav-links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Work</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
        </ul>
        <div className="burger" onClick={navSlideNew}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    </>
  );
}

export default NavigationBar;
