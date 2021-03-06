import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import SpinnerSinTurnos from "./SpinnerSinTurnos";

export default function Tabla(props) {
  const [usuarios, setUsuarios] = useState([]);
  const busqueda = props.resultado.match.params.id;

  const fetchData = useCallback(async () => {
    axios
      .get(`https://proyecto-rolling.herokuapp.com/api/medicos`)
      .then((res) => {
        const busquedaUsuario = res.data.filter(function (user) {
          if (user.disciplina === busqueda && user.permiso === "aceptado") {
            return user;
          }
          return null;
        });
        setUsuarios(busquedaUsuario);
      })
      .catch((err) => {
        alert(err);
      });
  }, [busqueda]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleClick = async (id) => {
    props.handleOpenModal(id);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>nombre Completo</th>
          <th>disciplina</th>
        </tr>
      </thead>
      <tbody>
        {usuarios.length > 0 ? (
          usuarios.map((user) => (
            <tr
              title="clickea para ver datos del medico"
              className="tableRow"
              key={user._id}
              onClick={() => handleClick(user._id)}
            >
              <td>{user.nombreCompleto}</td>
              <td>{user.disciplina}</td>
            </tr>
          ))
        ) : (
          <SpinnerSinTurnos />
        )}
      </tbody>
    </table>
  );
}
