import React, { useState } from 'react';
import DashboardNavbar from './Navbar';
import Carousel from 'react-bootstrap/Carousel';

function SinglesPage({ token, setToken }) {
  const [activeIndex, setActiveIndex] = useState(0);
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

  const prev = () => {
    setActiveIndex((p) => (p === 0 ? 2 : p - 1));
  };

  const next = () => {
    setActiveIndex((p) => (p === 2 ? 0 : p + 1));
  };

  return (
    <>
      <DashboardNavbar token={token} setToken={setToken} />

      {/* WRAPPER (UNCHANGED LAYOUT) */}
      <div
        className="carousel-wrapper"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '80vh',
          gap: '20px'
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >

        {/* LEFT ARROW */}
        <button className="carousel-btn left-btn" onClick={prev}>
          <img
            src="https://www.svgrepo.com/show/135316/left-arrow.svg"
            alt="prev"
            style={{ opacity: showLeft ? 1 : 0 }}
          />
        </button>

        {/* CAROUSEL (UNCHANGED) */}
        <Carousel
        className="carousel-box"
          activeIndex={activeIndex}
          interval={null}
          controls={false}
          indicators={false}
          fade
        >
          <Carousel.Item>
            <img src={require('./cropped man walking.jpeg')} width="100%" height="100%" alt="Diptych artwork 1"/>
          </Carousel.Item>

          <Carousel.Item>
            <img src={require('./cropped wood.jpeg')} width="100%" height="100%"alt="Diptych artwork 1" />
          </Carousel.Item>

          <Carousel.Item>
            <img src={require('./cropped trees.jpeg')} width="100%" height="100%" alt="Diptych artwork 1"/>
          </Carousel.Item>
        </Carousel>

        {/* RIGHT ARROW */}
        <button className="carousel-btn right-btn" onClick={next}>
          <img
            src="https://www.svgrepo.com/show/153628/right-thin-arrow-angle.svg"
            alt="next"
            style={{ opacity: showRight ? 1 : 0 }}
          />
        </button>

      </div>
    </>
  );
}

export default SinglesPage;