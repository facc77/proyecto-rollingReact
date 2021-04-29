import { React, useState } from "react";
import "../css/inicioPaciente.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import TablaBusqueda from "../components/TablaBusqueda.jsx";
import ModalMedico from "../components/ModalMedico.jsx";

export default function BusquedaPaciente(props) {
  const [idMedico, setIdMedico] = useState(0);

  const handleOpenModal = (props) => {
    setModalIsOpen(true);
    setIdMedico(props);
  };

  const [modalIsOpen, setModalIsOpen] = useState(false);
  //const [modalTurnoIsOpen, setModalTurnoIsOpen] = useState(false);

  return (
    <div>
      <div className="d-flex" id="content-wrapper">
        <div id="sidebar-container" className="bg-primary">
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
          <nav className="navbar-light bg-light border-bottom nabvarAlign">
            <Link to="/">
              <button className="btn btn-secondary homeButton">salir</button>
            </Link>
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
              <div className="fondo">
                <div className="tablaContainer">
                  <div className="tabla">
                    <TablaBusqueda
                      resultado={props}
                      handleOpenModal={handleOpenModal}
                    />
                  </div>
                </div>
              </div>
              <ModalMedico
                idMedico={idMedico}
                modalIsOpen={modalIsOpen}
                setModalIsOpen={setModalIsOpen}
              ></ModalMedico>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
