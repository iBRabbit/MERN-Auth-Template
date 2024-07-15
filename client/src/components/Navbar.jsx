import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const AppNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="p-3">
      <Navbar.Brand as={Link} to="/">ApplyTracker</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/about">About</Nav.Link>
          <Nav.Link as={Link} to="/register">Register</Nav.Link>
          <Nav.Link as={Link} to="/login">Login</Nav.Link>X
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default AppNavbar;
