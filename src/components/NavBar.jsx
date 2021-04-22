import React from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  NavDropdown,
  Button,
} from "react-bootstrap";
import Logo from "../img/logo.jpg";

export default function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Navbar.Brand href="#home">
        <img
          alt=""
          src={Logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{" "}
        San Remo
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#features">Home</Nav.Link>
          <Nav.Link href="#pricing">Servicios</Nav.Link>
          <NavDropdown title="Quienes Somos" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.2">
              Nuestros valores
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.3">
              Nuestra vision
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl
            type="text"
            placeholder="Busqueda"
            className="mr-sm-2 "
          />
          <Button className="navbarButton" variant="outline-light">
            Buscar
          </Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}
