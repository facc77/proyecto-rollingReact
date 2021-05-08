import React from "react";
import "../css/inicioPaciente.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Buscador from "../components/Buscador.jsx";
import PacienteNavBar from "../components/PacienteNavBar.jsx";

export default function InicioPaciente() {
  return (
    <div className="inicioPaciente">
      <div className="d-flex" id="content-wrapper">
        <div
          id="sidebar-container"
          /* className=" bg-secondary " */ className="pacienteSidebar"
        >
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
          <PacienteNavBar />

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
                    <Link className="w-100" to="/error">
                      <button className="btn botonSidebar w-100 align-self-center">
                        Descargar reporte
                      </button>
                    </Link>
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
