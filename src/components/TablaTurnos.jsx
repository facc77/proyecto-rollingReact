import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Spinner from "./Spinner";

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

  const handleClick = async (id) => {
    // props.handleOpenModal(id);
  };

  return (
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
              <Spinner />
            </td>
          </tr>
        </tbody>
      )}
    </table>
  );
}
