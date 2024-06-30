import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import { MainNavContainer, NavContainer } from './DashboardContainer';

function DashboardNavbar({ token, setToken }) {
  const [isMobile, setIsMobile] = useState(false);
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 800);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleDropdownEnter = () => {
    setDropdownVisible(true);
  };

  const handleDropdownLeave = () => {
    setDropdownVisible(false);
  };

  return (
    <>
      <Navbar className="justify-content-end">
        <MainNavContainer>
          <Nav.Link className='nav-links' style={{ marginLeft: '75px', whiteSpace: 'nowrap', fontWeight: 'bold' }} as={Link} to="/">Arjav Shrestha</Nav.Link>
          <NavContainer>
              <Dropdown show={isDropdownVisible} onMouseEnter={handleDropdownEnter} onMouseLeave={handleDropdownLeave}>
              {/* <p style={{ marginTop:'px', marginRight: '75px', fontWeight: 'bold' }}>Projects</p> */}
              <Dropdown.Toggle variant='' style={{ marginRight: '75px', fontWeight: 'bold' }}>
                Projects
              </Dropdown.Toggle>

              <Dropdown.Menu>
              <Nav.Link className='nav-links' style={{ marginLeft: '10px', fontWeight: '' }} as={Link} to="/projects">
                Singles
              </Nav.Link>
              <Nav.Link className='nav-links' style={{ marginLeft: '10px', fontWeight: '' }} as={Link} to="/projects">
                Diptych
              </Nav.Link>
              <Nav.Link className='nav-links' style={{ marginLeft: '10px', fontWeight: '' }} as={Link} to="/projects">
                Triptych
              </Nav.Link>
              </Dropdown.Menu>
            </Dropdown>
              <Nav.Link className='nav-links' style={{ marginRight: '75px', fontWeight: 'bold' }} as={Link} to="/about">About</Nav.Link>
            <Nav.Link className='nav-links' style={{ marginRight: '50px', fontWeight: 'bold' }} as={Link} to="/contact">Contact</Nav.Link>
          

            {/* <Nav.Link className='nav-links' style={{ marginRight: '75px', fontWeight: 'bold' }} as={Link} to="/about">About</Nav.Link> */}
            {/* <Nav.Link className='nav-links' style={{ marginRight: '50px', fontWeight: 'bold' }} as={Link} to="/contact">Contact</Nav.Link> */}
          </NavContainer>
        </MainNavContainer>
      </Navbar>
      <br />
    </>
  );
}

export default DashboardNavbar;
