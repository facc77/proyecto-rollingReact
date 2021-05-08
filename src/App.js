import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./components/FontawesomeIcons/index.js";
import Home from "./pages/Home";
import LoginPaciente from "./pages/LoginPaciente";
import LoginMedico from "./pages/LoginMedico";
import RegistroPaciente from "./pages/RegistroPaciente";
import RegistroMedico from "./pages/RegistroMedico";
import AdminPaciente from "./pages/AdminPaciente";
import AdminMedico from "./pages/AdminMedico";
import InicioPaciente from "./pages/InicioPaciente";
import InicioMedico from "./pages/InicioMedico";
import BusquedaPaciente from "./pages/BusquedaPaciente";
import TurnosReservados from "./pages/TurnosReservados";

import Exito from "./pages/Exito";
import Error from "./pages/Error";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/loginPaciente" component={LoginPaciente} />
        <Route exact path="/loginMedico" component={LoginMedico} />
        <Route exact path="/registroPaciente" component={RegistroPaciente} />
        <Route exact path="/registroMedico" component={RegistroMedico} />
        <Route exact path="/adminPaciente" component={AdminPaciente} />
        <Route exact path="/adminMedico" component={AdminMedico} />
        <Route exact path="/inicioPaciente" component={InicioPaciente} />
        <Route exact path="/inicioMedico" component={InicioMedico} />
        <Route
          exact
          path="/busquedaPaciente/:id"
          component={BusquedaPaciente}
        />
        <Route exact path="/turnosReservados" component={TurnosReservados} />
        <Route exact path="/Exito/:id" component={Exito} />
        <Route exact path="/error/" component={Error} />
        <Route component={Error} />
      </Switch>
    </Router>
  );
}
