import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import AdminNavBar from "../components/AdminNavBar";
import "../css/adminPaciente.css";
import Tabla from "../components/Tabla";

export default function AdminPaciente() {
  const [usuarioLogueado, setUsuarioLogueado] = useState("");
  let history = useHistory();

  useEffect(() => {
    async function fetchData() {
      await axios
        .get(
          `https://proyecto-rolling.herokuapp.com/api/usuarioLog/609849ab45e6160015b2c27e`
        )
        .then((res) => {
          setUsuarioLogueado(res.data.usuario);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    fetchData();
    if (usuarioLogueado === "noSession") {
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
