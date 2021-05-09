import React, { useEffect } from "react";
import AdminNavBar from "../components/AdminNavBar";
import "../css/adminPaciente.css";
import Tabla from "../components/Tabla";
import { useHistory } from "react-router-dom";

export default function AdminPaciente() {
  const nombreUsuario = JSON.parse(localStorage.getItem("usuarioLogueado"));

  let history = useHistory();

  useEffect(() => {
    if (nombreUsuario !== "admin") {
      history.push("/permisoDenegado");
    }
  }, [history, nombreUsuario]);

  return (
    <div>
      <AdminNavBar />
      <div className="fondo">
        <div className="tablaContainer">
          <div className="tablaAdmin">
            <Tabla endpoint="pacientes" />
          </div>
        </div>
      </div>
    </div>
  );
}
