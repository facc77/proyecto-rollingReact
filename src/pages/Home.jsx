import React from "react";
import NavBar from "../components/NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import "../css/home.css";
import Retrato from "../img/retratoMedico.jpg";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="homePage">
      <NavBar />
      <Jumbotron className="jumbotron">
        <div className="botones">
          <Link to="/loginPaciente">
            <Button variant="primary" size="lg" className="botonJumbotron">
              Paciente
            </Button>
          </Link>

          <Link to="/loginMedico">
            <Button variant="primary" size="lg" className="botonJumbotron">
              Médico
            </Button>
          </Link>
        </div>
      </Jumbotron>
      <div className="container barraContainer">
        <div className="barraSeparadora"></div>
      </div>
      <div className="m-3">
        <div className="row mt-5 rowRetratoMedico">
          <div className="col-md-6">
            <img className="retratoMedico" src={Retrato} alt="" />
          </div>
          <div className="col-md-6 mt-4">
            <h5 className="card-title">
              Clínica San Remo brinda servicios de excelencia
            </h5>{" "}
            <p className="card-text ">
              La Misión por la cual trabajamos en forma continua es para que
              nuestros pacientes sientan el bienestar en su salud e integridad,
              no solo a través de la atención personalizada sino a través de un
              click desde cualquier dispositivo móvil, ya que brindamos
              servicios online cuando la situación lo amerita.
            </p>
            <p className="card-text">
              La Visión de Clínica San Remo está centrada en la responsabilidad
              social. “Mantenernos en servicio de vanguardia, con la
              responsabilidad que nos caracteriza, para que nuestro aporte
              diario lleve a un mundo mejor”.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-primary py-3 text-center ">
        <FontAwesomeIcon className="icons" icon={["fab", "twitter-square"]} />
        <FontAwesomeIcon className="icons" icon={["fab", "instagram-square"]} />
        <FontAwesomeIcon className="icons" icon={["fab", "linkedin"]} />
        <FontAwesomeIcon className="icons" icon={["fab", "facebook-square"]} />
      </div>
      <div className="row homeFooter text-center  pt-4">
        <div className="col-md-4">
          <>
            <h6 className="footer-text text-size text-uppercase font-weight-blod text-white">
              Profesionales de la salud
            </h6>
            <hr className="hrFooter bg-primary mb-4 d-inline-block" />
            <p className="mt-2 text-white text-size">
              Medicina de alta complejidad. Todas las especialidades. Atención
              las 24 horas. Guardias Médicas.
            </p>
          </>
        </div>
        <div className="col-md-4">
          <h6 className="text-uppercase text-size font-weight-blod text-white">
            Selecciona opciones
          </h6>
          <>
            <hr className="hrFooter bg-primary mb-4 mt-0 d-inline-block mx-auto" />
          </>
          <ul className="list-unstyled">
            <li className="my-2 text-size text-white">
              <a href="../html/home.html">Home</a>
            </li>
            <li className="my-2 text-size text-white">
              <a href="../html/pagina404.html">About</a>
            </li>
            <li className="my-2 text-size text-white">
              <a href="../html/home.html">Services</a>
            </li>
            <li className="my-2 text-size text-white">
              <a href="https://rollingcodeschool.com/">Contact</a>
            </li>
          </ul>
        </div>
        <div className="col-md-4">
          <h6 className="text-uppercase text-size font-weight-blod text-white">
            Nuestros contactos
          </h6>
          <>
            {" "}
            <hr className="hrFooter bg-primary mb-4 mt-0 d-inline-block " />
          </>
          <ul className="list-unstyled">
            <li className="my-2 text-size text-white">
              <i className="fas fa-home  mr-2"></i> 25 de mayo 500
            </li>
            <li className="my-2 text-size text-white">
              <i className="fas fa-envelope-square mr-2"></i>hola@gmail.com
            </li>
            <li className="my-2 text-size text-white">
              <i className="fas fa-phone mr-2"></i>+54 9 381 6333333
            </li>
            <li className="my-2 text-size text-white">
              <i className="fas fa-print"></i>+3333333
            </li>
          </ul>
        </div>
        <div className="bottomFooter text-center text-size  text-white">
          <a href="../html/home.html" target="_blank">
            Acerca del grupo de profesionales
          </a>
        </div>
      </div>
    </div>
  );
}
