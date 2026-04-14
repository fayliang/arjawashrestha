import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Dropdown from 'react-bootstrap/Dropdown';
import { MainNavContainer, NavContainer } from './DashboardContainer';

function DashboardNavbar() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showProjects, setShowProjects] = useState(false);

  return (
    <>
      {/* TOP NAVBAR */}
      <Navbar className="justify-content-end">

        <MainNavContainer style={{
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center'
  }}>

          {/* BRAND (always visible) */}
          <Navbar.Brand
            as={Link}
            to="/"
            style={{ marginLeft: '15px', fontWeight: 'bold' }}
          >
            Arjav Shrestha
          </Navbar.Brand>

          {/* DESKTOP LINKS */}
          <NavContainer className="desktop-nav">

            <Dropdown
              show={isDropdownVisible}
              onMouseEnter={() => setDropdownVisible(true)}
              onMouseLeave={() => setDropdownVisible(false)}
            >
              <Dropdown.Toggle variant="" style={{ fontWeight: 'bold', marginRight: '75px' }}>
                Projects
              </Dropdown.Toggle>

              <Dropdown.Menu>
                 <Dropdown.Item as={NavLink} to="/singles"
                 style={({ isActive }) => ({
                    textDecoration: isActive ? 'underline' : 'none',
                    // color: 'inherit'
                  })}>
                    Singles
                  </Dropdown.Item>

                    <Dropdown.Item as={NavLink} to="/diptych"
                 style={({ isActive }) => ({
                    textDecoration: isActive ? 'underline' : 'none',
                    // color: 'inherit'
                  })}>
                    Diptych
                  </Dropdown.Item>

                    <Dropdown.Item as={NavLink} to="/triptych"
                 style={({ isActive }) => ({
                    textDecoration: isActive ? 'underline' : 'none',
                    // color: 'inherit'
                  })}>
                    Triptych
                  </Dropdown.Item>

              </Dropdown.Menu>
            </Dropdown>

            <Nav.Link as={Link} to="/about" style={{ fontWeight: 'bold', marginRight: '75px' }}>
              About
            </Nav.Link>

            <Nav.Link as={Link} to="/contact" style={{ fontWeight: 'bold', marginRight: '50px' }}>
              Contact
            </Nav.Link>

          </NavContainer>

          {/* MOBILE HAMBURGER */}
          <button
            className="mobile-menu-btn"
            onClick={() => setShowMenu(true)}
            style={{
              fontSize: '28px',
              background: 'none',
              border: 'none',
              // marginRight: '200px'
            }}
          >
            ☰
          </button>

        </MainNavContainer>
      </Navbar>

      {/* LEFT SIDEBAR */}
<Offcanvas show={showMenu} onHide={() => setShowMenu(false)} placement="start" className="full-offcanvas">

<Offcanvas.Header closeButton />
  <div className="offcanvas-content">

      <div
        onClick={() => setShowProjects(!showProjects)}
        className="offcanvas-link main-link"
      >
        Projects
      </div>

    {showProjects && (
      <div className="offcanvas-dropdown">
        <NavLink to="/singles" className="offcanvas-link">Singles</NavLink>
        <NavLink to="/diptych" className="offcanvas-link">Diptych</NavLink>
        <NavLink to="/triptych" className="offcanvas-link">Triptych</NavLink>
      </div>
    )}

    <NavLink to="/about" className="offcanvas-link main-link">About</NavLink>
    <NavLink to="/contact" className="offcanvas-link main-link">Contact</NavLink>

  </div>

</Offcanvas>
    </>
  );
}

export default DashboardNavbar;