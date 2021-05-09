import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import AdminNavBar from "../components/AdminNavBar";
import "../css/adminPaciente.css";
import Tabla from "../components/Tabla";

export default function AdminPaciente() {
  const nombreUsuario = JSON.parse(localStorage.getItem("usuarioLogueado"));

  let history = useHistory();

  useEffect(() => {
    if (nombreUsuario !== "admin") {
      history.push("/permisoDenegado");
    }
  });
  return (
    <div>
      <AdminNavBar />
      <div className="fondo">
        <div className="tablaContainer">
          <div className="tablaAdmin">
            <Tabla endpoint="medicos" />
          </div>
        </div>
      </div>
    </div>
  );
}
