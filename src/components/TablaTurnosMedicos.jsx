import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Modal from "react-modal";

export default function TablaTurnos() {
  const [turnosConfirmados, setTurnosConfirmados] = useState([]);
  const usuarioLogueado = JSON.parse(localStorage.getItem("usuarioLogueado"));
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [mensajeModal, setMensajeModal] = useState("");

  const fetchData = useCallback(async () => {
    axios
      .get(`https://proyecto-rolling.herokuapp.com/turnos`)
      .then((res) => {
        const turnos = res.data.filter(function (turno) {
          if (turno.medico === usuarioLogueado) {
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

  /*   const fetchData = async () => {
      axios
        .get(`http://localhost:4000/api/turnos`)
        .then((res) => {
          const turnos = res.data.filter(function (turno) {
            if (turno.medico === usuarioLogueado) {
              return turno;
            }
            return null;
          });
          setTurnosConfirmados(turnos);
        })
        .catch((err) => {
          alert(err);
        });
    }; */

  const handleClick = async (id) => {
    console.log(id);
    const turnoSeleccionado = await axios.get(
      `https://proyecto-rolling.herokuapp.com/turnos/` + id
    );
    let aviso = `turno del paciente ${turnoSeleccionado.data.paciente} ,con el motivo de consulta: ${turnoSeleccionado.data.motivoConsulta}`;
    handleOpenModal(aviso);
  };

  const handleOpenModal = (props) => {
    setModalIsOpen(true);
    setMensajeModal(props);
    console.log(mensajeModal);
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
          {turnosConfirmados.length > 0
            ? turnosConfirmados.map((turno) => (
                <tr
                  key={turno._id}
                  onDoubleClick={() => handleClick(turno._id)}
                >
                  <td>{turno.hora}</td>
                  <td>{turno.fecha}</td>
                </tr>
              ))
            : "tabla"}
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
