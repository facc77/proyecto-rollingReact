import React from "react";
import "../css/inicioPaciente.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Buscador from "../components/Buscador.jsx";

export default function InicioPaciente() {
  return (
    <div className="inicioPaciente">
      <div className="d-flex" id="content-wrapper">
        <div id="sidebar-container" className="bg-secondary">
          <div className="logo">
            <h4 className="text-light font-weight-bold mb-0">San Remo</h4>
          </div>
          <div className="menu">
            <Link
              to="/inicioPaciente"
              className="d-block text-light p-3 border-0"
            >
              <FontAwesomeIcon icon="user" className="mr-2" />
              Buscar Medicos
            </Link>

            <Link
              to="/turnosReservados"
              className="d-block text-light p-3 border-0"
            >
              <FontAwesomeIcon icon="portrait" className="mr-2" />
              Turnos reservados
            </Link>
          </div>
        </div>

        <div className="w-100">
          {/* <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
            <div class="container">
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <form class="form-inline position-relative d-inline-block my-2">
                  <input
                    class="form-control"
                    type="search"
                    id="busquedaInput"
                    placeholder="Buscar"
                    aria-label="Buscar"
                  />
                  <button
                    class="btn position-absolute btn-search botonSearch"
                    type="submit"
                  >
                    <i class="icon ion-md-search"></i>
                  </button>
                </form>
                <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
                  <li class="nav-item dropdown" id="navbarDropdown1">
                    <a
                      class="nav-link text-dark dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Cuenta paciente
                    </a>
                    <div
                      class="dropdown-menu dropdown-menu-right menuHamburguesa"
                      aria-labelledby="navbarDropdown"
                    >
                      <a class="dropdown-item" href="busquedaPaciente.html">
                        Inicio
                      </a>
                      <a class="dropdown-item" href="busqueda.html">
                        Busqueda
                      </a>
                      <a class="dropdown-item" href="TurnosConfirmados.html">
                        Turnos Confirmados
                      </a>
                      <div class="dropdown-divider"></div>
                      <a id="cerrarSesion" class="dropdown-item">
                        Cerrar sesión
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </nav> */}
          <Navbar bg="light" expand="lg" className="border-bottom py-3">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              {/* <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                />
                <div className="input-group-append">
                  <button className="btn searchButton">
                    <FontAwesomeIcon icon="search" className=" searchIcon" />
                  </button>
                </div>
              </Form> */}
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
                    <button
                      id="button-addon1"
                      type="submit"
                      className="btn btn-link text-primary"
                    >
                      <FontAwesomeIcon icon="search" />
                    </button>
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

          <div id="content" className="bg-grey w-100 fila3">
            <section className="bg-light py-3">
              <div className="container">
                <div className="row">
                  <div className="col-lg-9 col-md-8">
                    <h1 id="nombreUsuario" className="font-weight-bold mb-0">
                      usuario
                    </h1>
                    <p className="lead">Revisa la última información</p>
                  </div>
                  <div className="col-lg-3 col-md-4 d-flex">
                    <button className="btn btn-secondary w-100 align-self-center">
                      Descargar reporte
                    </button>
                  </div>
                </div>
              </div>
            </section>
            <section>
              <Buscador />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
