import React, { useEffect, useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";

export default function SpinnerSinTurnos() {
  const [mensaje, setMensaje] = useState(0);
  const useStyles = makeStyles((theme) => ({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: "#fff",
    },
  }));
  const classes = useStyles();

  let history = useHistory();

  const Redirect = useCallback(() => {
    history.push("/inicioPaciente");
  }, [history]);

  useEffect(() => {
    const timer = setTimeout(() => Redirect(), 6000);
    return () => clearTimeout(timer);
  }, [Redirect]);

  const sinTurnosReservados = useCallback(() => {
    setMensaje(1);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => sinTurnosReservados(), 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [sinTurnosReservados]);

  return (
    <Backdrop className={classes.backdrop} open>
      {mensaje === 0 ? (
        <CircularProgress color="inherit" />
      ) : (
        <p>no se encontraron resultados, se retornara a inicio</p>
      )}
    </Backdrop>
  );
}
