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
          <h5>Error 404</h5>
          <h6>
            La pagina que estas buscando no existe <br /> Aguarda para ser
            redireccionado!
          </h6>
        </>
      </div>
    </div>
  );
}
