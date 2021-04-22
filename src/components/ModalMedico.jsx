import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "react-modal";
import ModalTurno from "./ModalTurno.jsx";
import "../css/modalCss.css";

function ModalMedico(props) {
  const idMedico = props.idMedico;
  //const [idMedico, setIdMedico] = useState(props.idMedico);
  const [medicoSeleccionado, setMedicoSeleccionado] = useState({});

  const [modalTurnoIsOpen, setModalTurnoIsOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      axios
        .get(`https://proyecto-rolling.herokuapp.com/medicos/` + props.idMedico)
        .then((res) => {
          setMedicoSeleccionado(res.data);
        })
        .catch((err) => {
          alert(err);
        });
    };
    fetchData();
  }, [props.modalIsOpen, props.idMedico]);

  const handleOpenModal = () => {
    props.setModalIsOpen(false);
    setModalTurnoIsOpen(true);
  };

  return (
    <>
      <Modal
        ariaHideApp={false}
        isOpen={props.modalIsOpen}
        onRequestClose={() => props.setModalIsOpen(false)}
        //className="ReactModal__Content"
        className="modalMedico"
      >
        <div className="container" id="container5">
          <div className="card">
            <div className="header">
              <a href="/Home" className="mail">
                <i className="far fa-envelope"></i>
              </a>
              <div className="main">
                <div className="image">
                  <div className="hover">
                    <i className="fas fa-camera fa-2x"></i>
                  </div>
                </div>
                <h3 className="name" id="nombreCompleto">
                  {medicoSeleccionado.nombreCompleto}
                </h3>
                <h3 className="sub-name" id="especialidad">
                  {medicoSeleccionado.disciplina}
                </h3>
              </div>
            </div>

            <div className="content">
              <div className="left">
                <div className="about-container">
                  <h3 className="title">Sobre mi</h3>
                  <p className="text" id="sobreMi">
                    {`Atiendo en la sucursal de ${medicoSeleccionado.sucursal} por la ${medicoSeleccionado.horario}`}
                  </p>
                </div>
                <div className="buttons-wrap">
                  <div className="follow-wrap" id="abrirModalTurno">
                    <button
                      className="follow"
                      onClick={handleOpenModal}
                      /* onClick={() => props.setModalIsOpen(false)}
                      onClick={() => setModalTurnoIsOpen(true)} */
                    >
                      Sacar turno
                    </button>
                  </div>
                  <div className="share-wrap" id="cerrarModal">
                    <button
                      className="share"
                      onClick={() => props.setModalIsOpen(false)}
                    >
                      cancelar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <Modal
        className="contenedorModalTurno"
        ariaHideApp={false}
        isOpen={modalTurnoIsOpen}
      >
        <ModalTurno
          className="modalTurno"
          idMedico={idMedico}
          medicoSeleccionado={medicoSeleccionado}
          modalTurnoIsOpen={modalTurnoIsOpen}
          setModalTurnoIsOpen={setModalTurnoIsOpen}
        />
      </Modal>
    </>
  );
}

export default ModalMedico;
