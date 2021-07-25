import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

function Navigation() {
  return (
    <>
      <Navbar collapseOnSelect fixed="top" expand="sm" bg="dark" variant="dark">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About Me</Nav.Link>
              <Nav.Link href="/portfolio">Portfolio</Nav.Link>
              <Nav.Link href="/technologies">Technologies</Nav.Link>
              <Nav.Link href="/experience">experience</Nav.Link>
              <Nav.Link href="/ventures">ventures</Nav.Link>
              <Nav.Link href="/contacts">contacts</Nav.Link>
              {/* <Nav.Link href='/footer'>footer</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
