import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Modal from "react-modal";
import SpinnerSinTurnos from "./SpinnerSinTurnos";

export default function TablaTurnos({ usuarioLogueado }) {
  const [turnosConfirmados, setTurnosConfirmados] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [mensajeModal, setMensajeModal] = useState("");

  const fetchData = useCallback(async () => {
    axios
      .get(`https://proyecto-rolling.herokuapp.com/api/turnos`)
      .then((res) => {
        const turnos = res.data.filter(function (turno) {
          if (turno.usuarioMedico === usuarioLogueado) {
            return turno;
          }
          return null;
        });
        setTurnosConfirmados(turnos);
      })
      .catch((err) => {
        alert(err);
      });
  }, [usuarioLogueado]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleClick = async (id) => {
    const turnoSeleccionado = await axios.get(
      `https://proyecto-rolling.herokuapp.com/api/turnos/` + id
    );
    let aviso = `turno del paciente ${turnoSeleccionado.data.paciente} ,con el motivo de consulta: ${turnoSeleccionado.data.motivoConsulta}`;
    handleOpenModal(aviso);
  };

  const handleOpenModal = (props) => {
    setModalIsOpen(true);
    setMensajeModal(props);
  };

  return (
    <>
      {" "}
      <table>
        <thead>
          <tr>
            <th>hora</th>
            <th>fecha</th>
          </tr>
        </thead>
        <tbody>
          {turnosConfirmados.length > 0 ? (
            turnosConfirmados.map((turno) => (
              <tr
                title="clickear para ver detalles"
                className="tableRow"
                key={turno._id}
                onClick={() => handleClick(turno._id)}
              >
                <td>{turno.hora}</td>
                <td>{turno.fecha}</td>
              </tr>
            ))
          ) : (
            <SpinnerSinTurnos />
          )}
        </tbody>
      </table>
      <Modal
        isOpen={modalIsOpen}
        ariaHideApp={false}
        onRequestClose={() => setModalIsOpen(false)}
        mensajeModal={mensajeModal}
        className="modalLogin-content"
      >
        <p className="modalTitle">Atencion!</p>
        <p>{mensajeModal}</p>
        <button
          onClick={() => setModalIsOpen(false)}
          className="btn btn-primary"
        >
          Cerrar
        </button>
      </Modal>
    </>
  );
}
