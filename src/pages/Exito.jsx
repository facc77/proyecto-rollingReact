import React, { useEffect, useCallback } from "react";
import { useHistory } from "react-router-dom";
import "../css/exito.css";
import Exito from "../img/exito.png";

export default function RegistroListo(props) {
  const parametro = props.match.params.id;
  let history = useHistory();

  /*   function Redirect() {
    history.push(parametro === "registro" ? "/" : "/turnosReservados");
  } */

  const Redirect = useCallback(() => {
    history.push(parametro === "registro" ? "/" : "/turnosReservados");
  }, [history, parametro]);

  useEffect(() => {
    const timer = setTimeout(() => Redirect(), 5000);
    return () => clearTimeout(timer);
  }, [Redirect]);

  return (
    <div className="fondoExito">
      <div className="registroListo">
        <img src={Exito} alt="exito!" width="150px" height="150px" />
        {parametro === "registro" ? (
          <>
            <h5>Registro realizado correctamente!</h5>
            <h6>
              Estamos procesando tu solicitud <br /> Regresa en 24 horas para
              comenzar
            </h6>
          </>
        ) : (
          <>
            <h5>Turno reservado correctamente!</h5>
            <h6>Verifica tu comprobante en tu perfil</h6>
          </>
        )}
      </div>
    </div>
  );
}
