import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../helpers/AuthContext";

const AppNavbar = () => {
  const { isAuthenticated, setIsAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); // Clear the token
    setIsAuthenticated(false); // Update the authentication state
    navigate("/login"); // Redirect to login page
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="p-3">
      <Navbar.Brand as={Link} to="/">ApplyTracker</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/about">About</Nav.Link>

          {!isAuthenticated && (
            <>
              <Nav.Link as={Link} to="/register">Register</Nav.Link>
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
            </>
          )}

          {isAuthenticated && (
            <Nav.Link as={Link} to="#" onClick={handleLogout}>Logout</Nav.Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default AppNavbar;
