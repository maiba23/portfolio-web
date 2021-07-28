import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Img1, Img2, Img3, Img4 } from "../../utils/imgImport";
import "./Ventures.css";

const contents = [
  {
    img: { Img1 },
    title: "New Zealand & Australia Solo Challenge",
    content: ` In 2019 I made few months long solo trip around Australia and New
    Zealand only by hitchhiking covering over 15 000km.`,
  },
  {
    img: { Img2 },
    title: "Journey Around the World",
    content: `Organized and participated in a journey around the World as a member
    of project called “Z indexem w podróży”. Venture partially sponsored
    by multiple sponsors with whom our team personally established
    collaboration. The journey resulted in episodes made by our team and
    broadcasted by Polish National Television as well as on a YouTube
    platform.`,
  },
  {
    img: { Img3 },
    title: "Organizer of Travel Festival",
    content: `Participated in the realization of nationwide travel festival called
    Zielone Globy.`,
  },
  {
    img: { Img4 },
    title: "Endeavours & Hobbys",
    content: `In years 2013 and 2014 I’ve completed the Ironman 70.3 triathlon in
    Austria and Poland, repectively.

    In August 2017 I have ascended Caucasian five-thousander – Mount
    Kazbek in Georgia.`,
  },
];

const CarouselItem = ({ img, title, content }) => (
  <>
    <img className="imgCarousel" display="none" src={img} alt={title} />
    <div className="myCarousel">
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  </>
);

const TestimonialsCarousel = () => {
  const carouselList = contents.map((item, idx) => (
    <CarouselItem
      key={idx}
      img={item.img}
      title={item.title}
      content={item.content}
    />
  ));
  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={8000}
    >
      {carouselList}
    </Carousel>
  );
};

export default TestimonialsCarousel;
