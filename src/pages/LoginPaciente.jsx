import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/loginPaciente.css";
import Logo from "../img/logo.jpg";
import Modal from "react-modal";
import { Link, useHistory } from "react-router-dom";
import Spinner from "../components/Spinner";
import { CircularProgress } from "@material-ui/core";

export default function LoginPaciente() {
  const [loadingButton, setLoadingButton] = useState("0");

  const [usuarios, setUsuario] = useState({});
  const [datoIngresado, setDatosIngresado] = useState({
    datos: {
      usuario: "",
      contrasena: "",
    },
  });
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [mensajeModal, setMensajeModal] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        "https://proyecto-rolling.herokuapp.com/api/pacientes"
      );
      setUsuario({
        usuarios: res.data,
      });
    };
    fetchData();
  }, []);

  const style = {
    height: 20,
    width: 20,
    color: "white",
  };

  const handleChange = (e) => {
    setDatosIngresado({
      datos: {
        ...datoIngresado.datos,
        [e.target.name]: e.target.value,
      },
    });
  };

  let history = useHistory();

  const verificarInicio = async () => {
    if (
      ("admin" === datoIngresado.datos.usuario) &
      ("admin" === datoIngresado.datos.contrasena)
    ) {
      setLoadingButton("1");
      const newUsuarioLog = {
        usuario: "admin",
      };
      await axios.put(
        "https://proyecto-rolling.herokuapp.com/api/usuarioLog/609849ab45e6160015b2c27e",
        newUsuarioLog
      );
      history.push("/adminPaciente");
    }
    const busquedaUsuario = usuarios.usuarios.find(function (user) {
      if (
        user.usuario === datoIngresado.datos.usuario &&
        user.contrasena === datoIngresado.datos.contrasena
      ) {
        return user;
      }
      return null;
    });

    if (busquedaUsuario) {
      if (busquedaUsuario.permiso === "aceptado") {
        setLoadingButton("1");
        const newUsuarioLog = {
          usuario: busquedaUsuario.usuario,
        };
        await axios.put(
          "https://proyecto-rolling.herokuapp.com/api/usuarioLog/609849ab45e6160015b2c27e",
          newUsuarioLog
        );
        history.push("/inicioPaciente");
      } else {
        let aviso = "tienes que aguardar a la verificacion de la cuenta";
        handleOpenModal(aviso);
      }
    } else {
      let aviso = "las credenciales enviadas no son correctas";
      //mostrarModal(aviso);
      handleOpenModal(aviso);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (usuarios === {}) {
      let aviso = " Hay demoras en el servidor, vuelva a intentar";
      handleOpenModal(aviso);
    } else {
      verificarInicio();
    }
  };

  const handleOpenModal = (props) => {
    setModalIsOpen(true);
    setMensajeModal(props);
  };

  return (
    <>
      {usuarios.length !== 0 ? (
        <>
          <div className="fondoPantalla">
            <div className="container2">
              <div className="headerLogin">
                <img src={Logo} alt="" />
                <h2>BIENVENIDO</h2>
              </div>
              <form onSubmit={handleSubmit} className="formLogin">
                <div className="form-group">
                  <label>Usuario</label>
                  <input
                    type="text"
                    placeholder="ingrese usuario"
                    className="form-control"
                    onChange={handleChange}
                    name="usuario"
                  />
                </div>
                <div className="form-group">
                  <label>Contrasena</label>
                  <input
                    type="password"
                    placeholder="ingrese contrasena"
                    className="form-control"
                    onChange={handleChange}
                    name="contrasena"
                  />
                </div>
                <Link className="linkRegister" to="/registroPaciente">
                  No estas registrado?
                </Link>
                <button className="btn btn-info loginButton">
                  {loadingButton === "1" ? (
                    <CircularProgress style={style} />
                  ) : (
                    "Enviar"
                  )}
                </button>
              </form>
            </div>
          </div>
          <Modal
            isOpen={modalIsOpen}
            ariaHideApp={false}
            onRequestClose={() => setModalIsOpen(false)}
            mensajeModal={mensajeModal}
            className="modalLogin-content"
          >
            <p className="modalTitle">Atencion!</p>
            <p>{mensajeModal}</p>
            <button
              onClick={() => setModalIsOpen(false)}
              className="btn btn-primary"
            >
              Cerrar
            </button>
          </Modal>
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
}
