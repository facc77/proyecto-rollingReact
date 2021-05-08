import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function pacienteNavBar() {
  return (
    <>
      <Navbar bg="light" expand="lg" className="border-bottom py-3">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="searchContainer">
            {" "}
            <div className="input-group">
              <input
                type="search"
                placeholder="Busqueda"
                aria-describedby="button-addon1"
                className="form-control bg-light busquedaPlaceholder"
              />
              <div className="input-group-append">
                <Link to="/error">
                  {" "}
                  <button
                    id="button-addon1"
                    type="submit"
                    className="btn btn-link text-primary"
                  >
                    <FontAwesomeIcon icon="search" />
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <Nav className="ml-auto">
            <NavDropdown
              title="Cuenta paciente"
              id="basic-nav-dropdown"
              className="pacienteDropdown"
            >
              <NavDropdown.Item href="/inicioPaciente">
                Buscar Medicos
              </NavDropdown.Item>
              <NavDropdown.Item href="/turnosReservados">
                Turnos Reservados
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/">Cerrar Sesion </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
