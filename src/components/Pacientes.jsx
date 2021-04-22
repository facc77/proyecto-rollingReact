import React from "react";
import "../css/inicioPaciente.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Buscador from "../components/Buscador.jsx";

export default function Pacientes(props) {
  console.log(props.buscador);
  return (
    <div>
      <div className="d-flex" id="content-wrapper">
        <div id="sidebar-container" className="bg-primary">
          <div className="logo">
            <h4 className="text-light font-weight-bold mb-0">San Remo</h4>
          </div>
          <div className="menu">
            <a
              href="busquedaPaciente.html"
              className="d-block text-light p-3 border-0"
            >
              <FontAwesomeIcon icon="user" />
              Inicio
            </a>
            <a href="busqueda.html" className="d-block text-light p-3 border-0">
              <i className="icon ion-md-apps lead mr-2"></i>
              Busqueda
            </a>
            <a
              href="TurnosConfirmados.html"
              className="d-block text-light p-3 border-0"
            >
              <i className="icon ion-md-people lead mr-2"></i>
              Turno reservado
            </a>
          </div>
        </div>

        <div className="w-100">
          <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
            <div className="container">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <form className="form-inline position-relative d-inline-block my-2">
                  <input
                    className="form-control"
                    type="search"
                    id="busquedaInput"
                    placeholder="Buscar"
                    aria-label="Buscar"
                  />
                  <button
                    className="btn position-absolute btn-search botonSearch"
                    type="submit"
                  >
                    <i className="icon ion-md-search"></i>
                  </button>
                </form>
                <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                  <li className="nav-item dropdown" id="navbarDropdown1">
                    <Link
                      to="/"
                      className="nav-link text-dark dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Cerrar Sesion
                    </Link>

                    <div
                      className="dropdown-menu dropdown-menu-right menuHamburguesa"
                      aria-labelledby="navbarDropdown"
                    >
                      <a className="dropdown-item" href="busquedaPaciente.html">
                        Inicio
                      </a>
                      <a className="dropdown-item" href="busqueda.html">
                        Busqueda
                      </a>
                      <a
                        className="dropdown-item"
                        href="TurnosConfirmados.html"
                      >
                        Turnos Confirmados
                      </a>
                      <div className="dropdown-divider"></div>
                      <Link to="/" className="dropdown-item">
                        Cerrar Sesion
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

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
                    <button className="btn btn-primary w-100 align-self-center">
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