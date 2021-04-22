import React from "react";
import AdminNavBar from "../components/AdminNavBar";
import "../css/adminPaciente.css";
import Tabla from "../components/Tabla";

export default function AdminPaciente() {
  return (
    <div>
      <AdminNavBar />
      <section className="pt-2 pb-3  mb-1 ">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-8">
              <h1 id="usuarioLogueado" className="font-weight-bold mb-0">
                Admin
              </h1>
              <p className="lead text-muted">Revisa la última información</p>
            </div>
            <div className="col-lg-3 col-md-4 d-flex">
              <button className="btn btn-primary w-100 align-self-center">
                Descargar reporte
              </button>
            </div>
          </div>
        </div>
      </section>
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
