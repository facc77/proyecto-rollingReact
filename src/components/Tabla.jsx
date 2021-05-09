import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Spinner from "./Spinner";

export default function Tabla(props) {
  const [usuarios, setUsuarios] = useState([]);

  const fetchData = useCallback(async () => {
    axios
      .get(`https://proyecto-rolling.herokuapp.com/api/${props.endpoint}`)
      .then((res) => {
        setUsuarios(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.endpoint]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleClick = async (id) => {
    const usuarioSeleccionado = usuarios.find((user) => user._id === id);
    if (props.endpoint === "pacientes") {
      const newPaciente = {
        usuario: usuarioSeleccionado.usuario,
        email: usuarioSeleccionado.email,
        contrasena: usuarioSeleccionado.contrasena,
        permiso:
          usuarioSeleccionado.permiso === "aceptado" ? "denegado" : "aceptado",
      };
      await axios.put(
        "https://proyecto-rolling.herokuapp.com/api/pacientes/" + id,
        newPaciente
      );
      const res = await axios.get(
        "https://proyecto-rolling.herokuapp.com/api/pacientes"
      );
      setUsuarios(res.data);
    } else {
      const newMedico = {
        nombreCompleto: usuarioSeleccionado.nombreCompleto,
        usuario: usuarioSeleccionado.usuario,
        email: usuarioSeleccionado.email,
        contrasena: usuarioSeleccionado.contrasena,
        permiso:
          usuarioSeleccionado.permiso === "aceptado" ? "denegado" : "aceptado",
        sucursal: usuarioSeleccionado.sucursal,
        disciplina: usuarioSeleccionado.disciplina,
        horario: usuarioSeleccionado.horario,
      };
      await axios.put(
        "https://proyecto-rolling.herokuapp.com/api/medicos/" + id,
        newMedico
      );
      const res = await axios.get(
        "https://proyecto-rolling.herokuapp.com/api/medicos"
      );
      setUsuarios(res.data);
    }
  };
  return (
    <table>
      <thead>
        <tr>
          <th>usuario</th>
          <th>email</th>
          <th>permiso</th>
        </tr>
      </thead>
      <tbody>
        {usuarios.length > 0 ? (
          usuarios.map((user) => (
            <tr key={user._id} onClick={() => handleClick(user._id)}>
              <td>{user.usuario}</td>
              <td>{user.email}</td>
              <td>{user.permiso}</td>
            </tr>
          ))
        ) : (
          <Spinner />
        )}
      </tbody>
    </table>
  );
}
