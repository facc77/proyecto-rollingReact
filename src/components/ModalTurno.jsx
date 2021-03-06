import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Modal from "react-modal";
import { CircularProgress } from "@material-ui/core";


export default function ModalTurno(props) {
  const [turnosAlmacenados, setTurnosAlmacenados] = useState({});
  const usuarioLogueado = props.usuarioLogueado;
  const [date, setDate] = useState(new Date());
  const fechaActual = `${date.getDate(date)}-${
    date.getMonth(date) + 1
  }-${date.getFullYear(date)}`;
  const [fechaElegida, setFechaElegida] = useState(fechaActual);
    const [loadingButton, setLoadingButton] = useState("0");


  const [state, setState] = useState({
    form: {
      paciente: usuarioLogueado,
      fecha: fechaElegida,
      hora: props.medicoSeleccionado.horario === "manana" ? "9" : "16",
      motivoConsulta: "",
      medico: props.medicoSeleccionado.nombreCompleto,
      especialidad: props.medicoSeleccionado.disciplina,
      usuarioMedico: props.medicoSeleccionado.usuario,
    },
  });
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [mensajeModal, setMensajeModal] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        "https://proyecto-rolling.herokuapp.com/api/turnos"
      );
      setTurnosAlmacenados(res.data);
    };
    fetchData();
  });

    const style = {
    height: 12,
    width: 12,
    color: "white",
  };

  const manana = [
    { hora: "9", id: 1 },
    { hora: "10", id: 2 },
    { hora: "11", id: 3 },
    { hora: "12", id: 4 },
  ];
  const tarde = [
    { hora: "16", id: 1 },
    { hora: "17", id: 2 },
    { hora: "18", id: 3 },
    { hora: "19", id: 4 },
  ];

  const handleChange1 = (date) => {
    setDate(date);
    const eleccionFecha = `${date.getDate(date)}-${
      date.getMonth(date) + 1
    }-${date.getFullYear(date)}`;
    setFechaElegida(eleccionFecha);
  };

  const handleChange = (e) => {
    setState({
      form: {
        ...state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const busquedaTurnoDisponible = turnosAlmacenados.find(function (turno) {
      if (
        turno.fecha === fechaElegida &&
        turno.hora === state.form.hora &&
        turno.medico === state.form.medico
      ) {
        return turno;
      }
      return null;
    });
    if (busquedaTurnoDisponible) {
      let aviso = "el turno se encuentra ocupado";
      handleOpenModal(aviso);
    } else {
      almacenar();
    }
  };

  const handleOpenModal = (props) => {
    setModalIsOpen(true);
    setMensajeModal(props);
  };

  const almacenar = async () => {
              setLoadingButton("1");

    const newTurno = {
      paciente: state.form.paciente,
      fecha: fechaElegida,
      hora: state.form.hora,
      motivoConsulta: state.form.motivoConsulta,
      medico: state.form.medico,
      especialidad: state.form.especialidad,
      usuarioMedico: state.form.usuarioMedico,
    };
    await axios.post(
      "https://proyecto-rolling.herokuapp.com/api/turnos",
      newTurno
    );
    history.push("/exito/turnos"); 
  };

  return (
    <>
      <form className="formularioTurno">
        <div className="form-group">
          <label>Dia y Horario</label>
          <DatePicker
            className="form-control"
            name="fecha"
            onChange={handleChange1}
            selected={date}
            dateFormat="d MMMM yyyy "
          />
        </div>
        <div className="form-group">
          <label>Horario</label>
          <select name="hora" className="form-control" onChange={handleChange}>
            {props.medicoSeleccionado.horario === "manana"
              ? manana.map((v) => (
                  <option key={v.hora} value={v.hora}>
                    {v.hora}
                  </option>
                ))
              : tarde.map((v) => (
                  <option key={v.hora} value={v.hora}>
                    {v.hora}
                  </option>
                ))}
          </select>
        </div>
        <div className="form-group">
          <label>Motivo de consulta</label>
          <textarea
            className="form-control"
            name="motivoConsulta"
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="buttons-wrap-turno">
          <div className="follow-wrap">
            <button
              type="submit"
              className="follow"
              id="botonReservar"
              onClick={handleSubmit}
            >
                  { loadingButton === "0" ? (
                    "Reservar Turno"
                  ) : (
                    <CircularProgress style={style} />
                  )}
            </button>
          </div>
          <div className="share-wrap">
            <button
              className="share"
              onClick={() => props.setModalTurnoIsOpen(false)}
            >
              Cancelar
            </button>
          </div>
        </div>
      </form>
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
