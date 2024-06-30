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

function ContactPage ({ token, setToken }) {
  const [ isContactSelected, selectContact] = useState(false);
  const [ isProjectsSelected, selectProjects] = useState(false);
  const [ isAboutSelected, selectAbout] = useState(false);

  return (
    <>
      {/* <MainBox> */}
        <DashboardNavbar token={token} setToken={setToken}/>
        {/* <div style={{display: 'flex', flexDirection: 'row', justifyItems: 'space-evenly'}}> */}
          <div style={{ whiteSpace: 'nowrap', marginTop: '30vh', marginLeft: '75px', display: 'flex', flexDirection: 'column', justifyContent: 'center', rowGap: '15px'}}>
            <h1>Let's get in touch</h1>
            <p>Email</p>
            <p>Instagram</p>
          </div>
          {/* <img src={require('./man walking.jpeg')} alt="Green Circle Icon" width="30%" height="25%" style={{marginTop: '5vh', marginLeft:'0vw'}}/> */}
        
        {/* </div> */}
   {/* </MainBox> */}
    </>
  );
}

export default ContactPage;
