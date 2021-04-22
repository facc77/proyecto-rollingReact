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
import "../css/adminNavBar.css";

export default function AdminNavBar() {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="adminNavBar"
      >
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
            <Nav.Link href="/adminPaciente">Autorizar Pacientes</Nav.Link>
            <Nav.Link href="/adminMedico">Autorizar Medicos</Nav.Link>
            <NavDropdown title="Configuracion" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Mi perfil</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Suscripciones
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/">Cerrar sesion</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl
              type="text"
              placeholder="Busqueda"
              className="mr-sm-2 mb-0"
            />
            <Button variant="outline-light">Buscar</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
