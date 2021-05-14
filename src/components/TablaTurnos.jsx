import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import SpinnerSinTurnos from "./SpinnerSinTurnos";

export default function TablaTurnos(props) {
  const [turnosConfirmados, setTurnosConfirmados] = useState([]);
  const usuarioLogueado = props.usuarioLogueado;

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
      });
  }, [usuarioLogueado]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

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
            <tr key={turno._id}>
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
              <SpinnerSinTurnos />
            </td>
          </tr>
        </tbody>
      )}
    </table>
  );
}
