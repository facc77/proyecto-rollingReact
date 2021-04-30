import React from "react";
import "../css/inicioPaciente.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";

import Buscador from "../components/Buscador.jsx";

export default function InicioPacientes() {
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
          <nav className="navbar-light bg-light border-bottom nabvarAlign bg-secondary">
            {/*             <div className="menuPaciente">
              <Link to="/inicioPaciente" className="d-block  p-1 border-0">
                Buscar Medicos
              </Link>
              <Link to="/turnosReservados" className="d-block  p-1 border-0">
                Turnos reservados
              </Link>
            </div>
            <Link to="/">
              <button className="btn btn-secondary homeButton">salir</button>
            </Link> */}
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                San Remo
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Link to="/inicioPaciente">
                  <Dropdown.Item href="#/action-3">
                    Buscar medicos{" "}
                  </Dropdown.Item>
                </Link>
                <Link to="/turnosReservados">
                  <Dropdown.Item href="#/action-3">
                    Turnos reservados{" "}
                  </Dropdown.Item>
                </Link>
                <Link to="/">
                  <Dropdown.Item href="#/action-3">Salir </Dropdown.Item>
                </Link>
              </Dropdown.Menu>
            </Dropdown>
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
