//Navbar's index.js file is a file with all JSX code.
import React, { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  CatIcon,
} from "./NavbarElements";

//Passing the toggle value.
const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  //Function stating that when user passed a particular point,
  //let it trigger.

  const changeNav = () => {
    //This is how I targeted particular window.
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      {/* It helps to change the e.g. icon's colors in the whole project. */}
      {/* Later on I can refactor code a bit and make it so some parts of the code 
        do not repeat themselves unneccessary. */}
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            <CatIcon /> catsSoft.
          </NavLogo>
          <MobileIcon onClick={toggle}>
            {/*FaBars - these are react icons */}
            <FaBars />
          </MobileIcon>
          {/* It is a wrapper/container for menu items */}
          <NavMenu>
            <NavItem>
              <NavLinks
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                //The offset value is set on -80, because
                //Navbar's margin is set on -80px.
                offset={-80}
              >
                About{" "}
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="portfolio"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                portfolio
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="technologies"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                technologies
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="technologies"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-40}
              >
                experience
              </NavLinks>
            </NavItem>
          </NavMenu>
          {/* <NavBtn>
              <NavBtnLink to="/signin">Contact Us</NavBtnLink>
            </NavBtn> */}
        </NavbarContainer>
        {/* <FlagItem onClick={() => handleLangChange("en")}>
              <img src={EnglishFlag} alt="polish flag" width="35%" />
            </FlagItem>
            <FlagItem onClick={() => handleLangChange("pl")}>
              <img src={PolishFlag} alt="polish flag" width="35%" />
            </FlagItem> */}
      </Nav>
    </>
  );
};

export default Navbar;
