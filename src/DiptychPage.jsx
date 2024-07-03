import React, { useState, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import DashboardNavbar from './Navbar';
import Carousel from 'react-bootstrap/Carousel';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import { CardContainer, DashboardContainer } from '../Components/DashboardContainers';

function DiptychPage ({ token, setToken }) {
  const [isPreviousVisible, setIsPreviousVisible] = useState(false);
  const [isNextVisible, setIsNextVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePreviousMouseEnter = () => {
    setIsPreviousVisible(true);
  };

  const handlePreviousMouseLeave = () => {
    setIsPreviousVisible(false);
  };

  const handleNextMouseEnter = () => {
    setIsNextVisible(true);
  };

  const handleNextMouseLeave = () => {
    setIsNextVisible(false);
  };

  const handlePreviousClick = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1)); // Wrap around to last item if at the first item
  };

  const handleNextClick = () => {
    setActiveIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1)); // Wrap around to first item if at the last item
  };
  return (
    <>
      {/* <MainBox> */}
        <DashboardNavbar token={token} setToken={setToken}/>
        <div style={{ display: 'flex',flexDirection: 'row',  justifyContent: 'center' }}>
        <button
          className="carousel-btn left-btn"
          onMouseEnter={handlePreviousMouseEnter}
          onMouseLeave={handlePreviousMouseLeave}
          onClick={handlePreviousClick}
        >
          <img
            className="prev-btn"
            src="https://www.svgrepo.com/show/135316/left-arrow.svg"
            alt="prev btn"
            style={{ display: isPreviousVisible ? 'block' : 'none' }}
          />
        </button>
        <Carousel
          activeIndex={activeIndex}
          interval={null}
          controls={false}
          indicators={false}
          fade
          // onSelect={() => {}}
          style={{
            // marginLeft: '20vw',
            // marginBottom: '15px',
            // border: '1px solid black',
            marginTop:'7vh',
            width: '60vw',
            height: '80vh',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Carousel.Item>
            <img
              src={require('./diptych.jpeg')}
              alt="diptych"
              width="100%"
              height="100%"
              objectFit='cover' 
            />
            <Carousel.Caption>
              {/* <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              src={require('./diptych 2.jpeg')}
              alt="diptych 2"
              width="100%"
              height="100%"
              objectFit='cover' 
              // style={{marginTop: '5vh'}}
            />
            <Carousel.Caption>
              {/* <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              src={require('./girl.jpeg')}
              alt="girl"
              width="100%"
              height="100%"
              // objectFit='cover' 
              objectFit='cover' 
            />
            <Carousel.Caption>
              {/* <h3>Third slide label</h3> */}
              {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <button
          className="carousel-btn right-btn"
          onMouseEnter={handleNextMouseEnter}
          onMouseLeave={handleNextMouseLeave}
          onClick={handleNextClick}
        >
          <img
            className="next-btn"
            src="https://www.svgrepo.com/show/153628/right-thin-arrow-angle.svg"
            alt="next btn"
            style={{ display: isNextVisible ? 'block' : 'none' }}
          />
        </button>
      </div>
   {/* </MainBox> */}
    </>
  );
}

export default DiptychPage;
