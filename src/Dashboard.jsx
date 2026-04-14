import React, { useState } from 'react';
import DashboardNavbar from './Navbar';
import Carousel from 'react-bootstrap/Carousel';
import { MainBox, GamesContainer, PageContainer, Footer, NavContainer, Divider } from './DashboardContainer';

function Dashboard({ token, setToken }) {
  const [isPreviousVisible, setIsPreviousVisible] = useState(false);
  const [isNextVisible, setIsNextVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePreviousClick = () => {
    setActiveIndex((prev) => (prev === 0 ? 2 : prev - 1));
  };

  const handleNextClick = () => {
    setActiveIndex((prev) => (prev === 2 ? 0 : prev + 1));
    
  };

  const [showLeft, setShowLeft] = useState(false);
const [showRight, setShowRight] = useState(false);

const handleMouseMove = (e) => {
  const rect = e.currentTarget.getBoundingClientRect();
  const x = e.clientX - rect.left;

  if (x < rect.width / 2) {
    setShowLeft(true);
    setShowRight(false);
  } else {
    setShowLeft(false);
    setShowRight(true);
  }
};

const handleMouseLeave = () => {
  setShowLeft(false);
  setShowRight(false);
};

  return (
    <>
      <DashboardNavbar token={token} setToken={setToken} />

      {/* WRAPPER */}
      <div
  className="carousel-wrapper"
  onMouseMove={handleMouseMove}
  onMouseLeave={handleMouseLeave}
>

        {/* LEFT ARROW */}
        <button className="carousel-btn" onClick={handlePreviousClick}>
          <img
            src="https://www.svgrepo.com/show/135316/left-arrow.svg"
            style={{ opacity: showLeft ? 1 : 0 }}
          />
        </button>

        {/* CAROUSEL */}
        <Carousel
          activeIndex={activeIndex}
          interval={3000}
          controls={false}
          indicators={false}
          fade
          className="carousel-box"
        >
          <Carousel.Item>
            <img src={require('./diptych.jpeg')} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </Carousel.Item>

          <Carousel.Item>
            <img src={require('./diptych 2.jpeg')} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </Carousel.Item>

          <Carousel.Item>
            <img src={require('./girl.jpeg')} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </Carousel.Item>
        </Carousel>

        {/* RIGHT ARROW */}
        <button className="carousel-btn" onClick={handleNextClick}>
          <img
            src="https://www.svgrepo.com/show/153628/right-thin-arrow-angle.svg"
            style={{ opacity: showRight ? 1 : 0 }}
          />
        </button>

      </div>
    </>
  );
}

export default Dashboard;