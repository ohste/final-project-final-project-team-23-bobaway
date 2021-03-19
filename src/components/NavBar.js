import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function NavBar() {
  return (
    <>
      <Navbar className="mb-3" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/"><span style={{color: "blanchedalmond", fontFamily: "Pacifico"}}>BobaWay</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav >
            <Nav.Link href="/" style={{color: "blanchedalmond"}}>Home</Nav.Link>
            <Nav.Link href="/search" style={{color: "blanchedalmond"}}>Search</Nav.Link>
            <Nav.Link href="/about" style={{color: "blanchedalmond"}}>About</Nav.Link>
            <Nav.Link href="/contact" style={{color: "blanchedalmond"}}>Contact</Nav.Link>
            {/* <Nav.Link href="/shopInfo">Shop Information</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavBar;

