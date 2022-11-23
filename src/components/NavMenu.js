import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavMenu() {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link className="nav-link" to="/">
              Special Day Salon
            </Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/sales">
              Sales
            </Link>
            <Link className="nav-link" to="/manage-services">
              Services
            </Link>
            <Link className="nav-link" to="/sales-summary">
              Sales Summary
            </Link>
          </Nav>
          <NavDropdown
            title={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="white"
                className="bi bi-three-dots-vertical"
                viewBox="0 0 16 16"
              >
                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
              </svg>
            }
            id="collasible-nav-dropdown"
          >
            <NavDropdown.Item>
              <Link className="dropdown-item" to="/">
                Home
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link className="dropdown-item" to="/sales">
                Sales
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link className="dropdown-item" to="/manage-services">
                Services
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link className="dropdown-item" to="/sales-summary">
                Sales Summary
              </Link>
            </NavDropdown.Item>
          </NavDropdown>
        </Container>
      </Navbar>
    </>
  );
}
