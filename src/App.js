import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience/Experience";
import Portfolio from "./components/Portfolio";
import Ventures from "./components/Ventures";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
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
