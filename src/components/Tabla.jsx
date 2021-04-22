import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";

export default function Tabla(props) {
  const [usuarios, setUsuarios] = useState([]);

  const fetchData = useCallback(async () => {
    axios
      .get(`http://localhost:4000/api/${props.endpoint}`)
      .then((res) => {
        setUsuarios(res.data);
        console.log(usuarios);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.endpoint, usuarios]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  /*   const fetchData = async () => {
    axios
      .get(`http://localhost:4000/api/${props.endpoint}`)
      .then((res) => {
        setUsuarios(res.data);
        console.log(usuarios);
      })
      .catch((err) => {
        alert(err);
      });
  }; */
  const handleClick = async (id) => {
    console.log(id);
    const usuarioSeleccionado = usuarios.find((user) => user._id === id);
    if (props.endpoint === "pacientes") {
      const newPaciente = {
        usuario: usuarioSeleccionado.usuario,
        email: usuarioSeleccionado.email,
        contrasena: usuarioSeleccionado.contrasena,
        permiso:
          usuarioSeleccionado.permiso === "aceptado" ? "denegado" : "aceptado",
      };
      console.log(usuarioSeleccionado);
      console.log(newPaciente);
      await axios.put("http://localhost:4000/api/pacientes/" + id, newPaciente);
      const res = await axios.get("http://localhost:4000/api/pacientes");
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
      await axios.put("http://localhost:4000/api/medicos/" + id, newMedico);
      const res = await axios.get("http://localhost:4000/api/medicos");
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
        {usuarios.length > 0
          ? usuarios.map((user) => (
              <tr key={user._id} onClick={() => handleClick(user._id)}>
                <td>{user.usuario}</td>
                <td>{user.email}</td>
                <td>{user.permiso}</td>
              </tr>
            ))
          : "tabla"}
      </tbody>
    </table>
  );
}
