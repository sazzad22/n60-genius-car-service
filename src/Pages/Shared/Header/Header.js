import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../images/logo.png";

const Header = () => {
  return (
    <Navbar
      sticky="top"
      collapseOnSelect
      expand="lg"
      bg="primary"
      variant="dark"
    >
      <Container>
        {/* here there is href. To change it to a Link comp from REact Router we add a prop 'as={Link}' ,we also need to change the href to 'to'. This way we can make the nav.brand tag act as a Link component */}
        <Navbar.Brand as={Link} to="/">
          <img height={30} src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="home#services">Services</Nav.Link>
            <Nav.Link href="home#experts">Experts</Nav.Link>

            <Nav.Link as={Link} to="/addservice">
              Add Service
            </Nav.Link>

            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="login">
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
