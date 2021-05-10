import React from "react";
import axios from "axios";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  NavDropdown,
  Button,
} from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import Logo from "../img/logo.jpg";
import "../css/adminNavBar.css";

export default function AdminNavBar() {
  let history = useHistory();

  const logOut = async () => {
    const newUsuarioLog = {
      usuario: "noSession",
    };
    await axios.put(
      "https://proyecto-rolling.herokuapp.com/api/usuarioLog/609849ab45e6160015b2c27e",
      newUsuarioLog
    );

    history.push("/");
  };
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="adminNavBar"
      >
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={Logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          San Remo
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/adminPaciente" className="adminRedirect">
              Autorizar Pacientes
            </Link>
            <Link to="/adminMedico" className="adminRedirect">
              Autorizar Medicos
            </Link>

            <NavDropdown title="Configuracion" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/error">Mi perfil</NavDropdown.Item>
              <NavDropdown.Item href="/error">Configuracion</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                onClick={() => {
                  logOut();
                  console.log("hola");
                }}
              >
                Cerrar sesion
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl
              type="text"
              placeholder="Busqueda"
              className="mr-sm-2 mb-0"
            />
            <Link to="/error">
              <Button variant="outline-light">Buscar</Button>
            </Link>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      <section className="pt-2 pb-3  mb-1 adminSection ">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-8">
              <h1 id="usuarioLogueado" className="font-weight-bold mb-0">
                Admin
              </h1>
              <p className="lead text-muted">Revisa la última información</p>
            </div>
            <div className="col-lg-3 col-md-4 d-flex">
              <Link className="w-100 align-self-center" to="/error">
                <button className="btn btn-primary align-self-center">
                  Descargar reporte
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
