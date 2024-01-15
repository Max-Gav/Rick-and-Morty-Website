import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Outlet } from "react-router-dom";

const NavigationBar = () => {
  return (
    <>
      <Navbar expand="lg" bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/" className="fw-bold">
            Rick and Morty
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Characters</Nav.Link>
              <Nav.Link href="/watch-list">Watch List</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
};

export default NavigationBar;
