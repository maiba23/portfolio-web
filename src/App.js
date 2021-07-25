import "./App.css";
import { Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import AboutMe from "./components/AboutMe/AboutMe";
import Technologies from "./components/Technologies/Technologies";
import Experience from "./components/Experience/Experience";
import Portfolio from "./components/Portfolio/Portfolio";
import Ventures from "./components/Ventures/Ventures";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import NavbarX from "./components/Navbar/NavbarX";

function App() {
  //Function setIs is updating a isOpen - it's a setter
  //By default it is set on false.
  const [isOpen, setIsOpen] = useState(false);

  //Function that updates/changes the State.
  //Basically it changes the State from false to true and the opposite way.
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* <NavbarBrian /> */}
      {/* <Switch>
        <Route path="/home" component={Header} />
        <Route path="/about" component={AboutMe} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/technologies" component={Technologies} />
        <Route path="/experience" component={Experience} />
        <Route path="/ventures" component={Ventures} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/footer" component={Footer} />
        <Route exact path="/" component={Header} />
      </Switch> */}

      <Particles
        className="particles-canvas"
        params={{
          particles: {
            number: {
              value: 70,
              density: {
                enable: true,
                value_area: 900,
              },
            },
            // The 'shape' object will basically shape the particles.
            shape: {
              type: "circle",
              stroke: {
                width: 5,
                color: "#B4E6FB",
              },
            },
          },
        }}
      />
      {/* <NewNavbar /> */}
      {/* <NavbarCatssoft toggle={toggle} /> */}
      {/* <NavbarRussian /> */}
      {/* <CatssoftNavbar /> */}
      {/* <NavigationBar /> */}
      <NavbarX />
      <Header />
      <AboutMe />
      <Portfolio />
      <Technologies />
      <Experience />
      <Ventures />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
