import React, { useEffect, useCallback } from "react";
import { useHistory } from "react-router-dom";
import "../css/error.css";
import Denegado from "../img/accesoDenegado.jpg";

export default function Error(props) {
  let history = useHistory();

  const Redirect = useCallback(() => {
    history.push("/");
  }, [history]);

  useEffect(() => {
    const timer = setTimeout(() => Redirect(), 5000);
    return () => clearTimeout(timer);
  }, [Redirect]);

  return (
    <div className="fondoError">
      <div className="error">
        <img src={Denegado} alt="error!" width="150px" height="150px" />
        <>
          <h5>Alto alli!</h5>
          <h6>
            No tienes permiso para ingresar a esta url. <br /> Aguarda para ser
            redireccionado!
          </h6>
        </>
      </div>
    </div>
  );
}
