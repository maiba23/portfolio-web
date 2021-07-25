import React from "react";
import "./Ventures.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// AVATARS IMPORTS
import avatar1 from "../../images/avatars/avatar-boomerang.png";
import avatar2 from "../../images/avatars/avatar-globe.png";
import avatar3 from "../../images/avatars/avatar-compass.png";
import avatar4 from "../../images/avatars/avatar-run.png";

const TestimonialsCarousel = () => {
  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={8000}
    >
      <>
        <img
          className="imgCarousel"
          display="none"
          src={avatar1}
          alt="John Doe 1"
        />
        <div className="myCarousel">
          <h3>New Zealand & Australia Solo Challenge</h3>
          <p>
            In 2019 I made few months long solo trip around Australia and New
            Zealand only by hitchhiking covering over 15 000km.
          </p>
        </div>
      </>
      <>
        <img className="imgCarousel" src={avatar2} alt="Jane Doe 2" />
        <div className="myCarousel">
          <h3>Journey Around the World</h3>
          <p>
            Organized and participated in a journey around the World as a member
            of project called “Z indexem w podróży”. Venture partially sponsored
            by multiple sponsors with whom our team personally established
            collaboration. The journey resulted in episodes made by our team and
            broadcasted by Polish National Television as well as on a YouTube
            platform.
          </p>
          <a href="https://www.facebook.com/zindexemwpodrozy" target="_blank">
            Facebook Fanpage - Z indexem w podróży
          </a>
          <br />
          <a
            href="https://www.youtube.com/user/zindexemwpodrozy"
            target="_blank"
          >
            YouTube Channel - Z indexem w podróży
          </a>
        </div>
      </>
      <>
        <img className="imgCarousel" src={avatar3} alt="John Doe 3" />
        <div className="myCarousel">
          <h3>Organizer of Travel Festival</h3>
          <p>
            Participated in the realization of nationwide travel festival called
            Zielone Globy.
          </p>
          <a href="https://www.facebook.com/zielonegloby" target="_blank">
            Facebook Fanpage - Zielona Globy Festival
          </a>
        </div>
      </>
      <>
        <img className="imgCarousel" src={avatar4} alt="John Doe 4" />
        <div className="myCarousel">
          <h3>Endeavours & Hobbys</h3>
          <p>
            In years 2013 and 2014 I’ve completed the Ironman 70.3 triathlon in
            Austria and Poland, repectively.
          </p>
          <p>
            In August 2017 I have ascended Caucasian five-thousander – Mount
            Kazbek in Georgia.
          </p>
        </div>
      </>
    </Carousel>
  );
};

export default TestimonialsCarousel;
