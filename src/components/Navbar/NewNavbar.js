import React from "react";
import "./Navbar.css";
import logo from "./logo-luk-kot-SD-2.png";
// REACT FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

const NewNavbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Navbar
        </a>

        <div class="dropdown">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDarkDropdown"
            aria-controls="navbarNavDarkDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
            <li>
              <button class="dropdown-item" type="button">
                Action
              </button>
            </li>
            <li>
              <button class="dropdown-item" type="button">
                Another action
              </button>
            </li>
            <li>
              <button class="dropdown-item" type="button">
                Something else here
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NewNavbar;
