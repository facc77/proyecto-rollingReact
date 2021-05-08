import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";

export default function TablaTurnos() {
  const [turnosConfirmados, setTurnosConfirmados] = useState([]);
  const usuarioLogueado = JSON.parse(localStorage.getItem("usuarioLogueado"));

  const fetchData = useCallback(async () => {
    axios
      .get(`https://proyecto-rolling.herokuapp.com/api/turnos`)
      .then((res) => {
        const turnos = res.data.filter(function (turno) {
          if (turno.paciente === usuarioLogueado) {
            return turno;
          }
          return null;
        });
        setTurnosConfirmados(turnos);
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  }, [usuarioLogueado]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  /*       const fetchData = async () => {
      axios
        .get(`http://localhost:4000/api/turnos`)
        .then((res) => {
          const turnos = res.data.filter(function (turno) {
            if (turno.paciente === usuarioLogueado) {
              return turno;
            }
            return null;
          });
          setTurnosConfirmados(turnos);
          console.log(turnosConfirmados);
        })
        .catch((err) => {
          alert(err);
        });
    }; */

  const handleClick = async (id) => {
    // props.handleOpenModal(id);
  };

  return (
    /*     <table>
      <thead>
        <tr>
          <th>doctor</th>
          <th>hora</th>
          <th>fecha</th>
        </tr>
      </thead>
      <tbody>
        {turnosConfirmados.length > 0 ? (
          turnosConfirmados.map((turno) => (
            <tr key={turno._id} onDoubleClick={() => handleClick(turno._id)}>
              <td>{turno.medico}</td>
              <td>{turno.hora}</td>
              <td>{turno.fecha}</td>
            </tr>
          ))
        ) : (
          <Spinner animation="border" role="status">
            <span className="sr-only">Cargando...</span>
          </Spinner>
        )}
      </tbody>
    </table> */
    <table>
      <thead>
        <tr>
          <th>doctor</th>
          <th>hora</th>
          <th>fecha</th>
        </tr>
      </thead>

      {turnosConfirmados.length > 0 ? (
        turnosConfirmados.map((turno) => (
          <tbody>
            <tr key={turno._id} onDoubleClick={() => handleClick(turno._id)}>
              <td>{turno.medico}</td>
              <td>{turno.hora}</td>
              <td>{turno.fecha}</td>
            </tr>
          </tbody>
        ))
      ) : (
        <tbody>
          <tr key={Math.random()}>
            <td>
              <Spinner animation="border" role="status">
                <span className="sr-only">Cargando...</span>
              </Spinner>
            </td>
          </tr>
        </tbody>
      )}
    </table>
  );
}
