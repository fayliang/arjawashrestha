import React, { useState, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import DashboardNavbar from './Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import Dashboard from './Dashboard';
import { MainBox, GamesContainer, PageContainer, Footer, NavContainer, Divider} from './DashboardContainer';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import { CardContainer, DashboardContainer } from '../Components/DashboardContainers';

function AboutPage ({ token, setToken }) {
  const [ isContactSelected, selectContact] = useState(false);
  const [ isProjectsSelected, selectProjects] = useState(false);
  const [ isAboutSelected, selectAbout] = useState(false);

  return (
    <>
      {/* <MainBox> */}
        <DashboardNavbar token={token} setToken={setToken}/>
        <div className="about-container">

  <div className="about-text">
    <h1>Arjav Shrestha</h1>
    <p>
      Freelance photographer<br />
      Based in Sydney, Australia<br />
      Loves a good double choc muffin from Coles
    </p>
  </div>
   <img
    src={require('./man walking.jpeg')}
    alt="portrait"
    className="about-image"
  />

</div>
   {/* </MainBox> */}
    </>
  );
}

export default AboutPage;
