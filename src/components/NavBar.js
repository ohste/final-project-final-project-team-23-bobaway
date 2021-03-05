import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';


function NavBar() {
  return (
    <>
      <Navbar className="mb-3" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">BobaWay</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/search">Search</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/shopInfo">Shop Information</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavBar;

