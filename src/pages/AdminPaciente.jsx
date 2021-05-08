import React from "react";
import AdminNavBar from "../components/AdminNavBar";
import "../css/adminPaciente.css";
import Tabla from "../components/Tabla";

export default function AdminPaciente() {
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
