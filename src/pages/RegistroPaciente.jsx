import React, { useState, useEffect } from "react";
import "../css/registroPaciente.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function RegistroPaciente() {
  const [state, setState] = useState({
    form: {
      usuario: "",
      email: "",
      contrasena: "",
      permiso: "",
      contrasena2: "",
    },
  });

  const [usuarios, setUsuarios] = useState({});

  const [mensajeError1, setMensajeError1] = useState("");
  const [mensajeError2, setMensajeError2] = useState("");
  const [mensajeError3, setMensajeError3] = useState("");
  const [mensajeError4, setMensajeError4] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        "https://proyecto-rolling.herokuapp.com/api/pacientes"
      );
      setUsuarios(res.data);
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    setState({
      form: {
        ...state.form,
        [e.target.name]: e.target.value,
      },
    });
  };
  let history = useHistory();

  const handleError1 = (props) => {
    let myInput = document.getElementById(props);
    myInput.setAttribute("style", "border-color:#e74c3c;");
  };
  const handleSuccess1 = (props) => {
    let myInputSuccess = document.getElementById(props);

    myInputSuccess.setAttribute("style", "border-color:#2ecc71;");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.form.usuario === "") {
      setMensajeError1("El campo no puede quedar vacio");
      handleError1("usuario");
    } else {
      setMensajeError1("");
      handleSuccess1("usuario");
    }

    if (state.form.email === "") {
      setMensajeError2("El campo no puede quedar vacio");
      handleError1("email");
    } else if (!isEmail(state.form.email)) {
      setMensajeError2("No es un email valido");
      handleError1("email");
    } else {
      setMensajeError2("");
      handleSuccess1("email");
    }

    function isEmail(email) {
      let re = /\S+@\S+\.\S+/;
      return re.test(email);
    }

    if (state.form.contrasena2 === "") {
      setMensajeError4("El campo no puede quedar vacio");
      handleError1("contrasena2");
    } else {
      setMensajeError4("");
      handleSuccess1("contrasena2");
    }

    if (state.form.contrasena === "") {
      setMensajeError3("El campo no puede quedar vacio");
      handleError1("contrasena");
    } else if (state.form.contrasena !== state.form.contrasena2) {
      setMensajeError3("La contrasena tiene que coincidir");
      setMensajeError4("La contrasena tiene que coincidir");
      handleError1("contrasena");
      handleError1("contrasena2");
    } else {
      setMensajeError3("");
      handleSuccess1("contrasena");
    }
    checkUserName();

    if (
      checkUserName() &&
      state.form.usuario !== "" &&
      state.form.email !== "" &&
      isEmail(state.form.email) &&
      state.form.contrasena !== "" &&
      state.form.contrasena === state.form.contrasena2
    ) {
      almacenar();
    }
  };

  const almacenar = async (e) => {
    const newPaciente = {
      usuario: state.form.usuario,
      email: state.form.email,
      contrasena: state.form.contrasena,
      permiso: "denegado",
    };
    await axios.post(
      "https://proyecto-rolling.herokuapp.com/api/pacientes",
      newPaciente
    );
    history.push("/exito/registro");
  };

  function checkUserName() {
    if (usuarios.length > 0 && state.form.usuario !== "") {
      let userExist = 0;
      usuarios.find(function (user) {
        if (user.usuario === state.form.usuario) {
          setMensajeError1("usuario en uso");
          handleError1("usuario");
          userExist = userExist + 1;
          return true;
        }
        handleSuccess1("usuario");
        return null;
      });
      console.log(userExist);

      if (userExist === 1) {
        console.log("usuario existe");
        return null;
      } else {
        return true;
      }
    } else {
      return true;
    }
  }

  return (
    <div className="fondoPantallaRegistro">
      <div className="container1">
        <div className="header1">
          <h2>Crear cuenta</h2>
        </div>
        <form onSubmit={handleSubmit} className="formRegistroUsuario">
          <div className="form-group">
            <label>Usuario</label>
            <input
              type="text"
              placeholder="ingrese usuario"
              className="form-control form-control-1"
              onChange={handleChange}
              name="usuario"
              id="usuario"
            />
            <small className="mensajeError">{mensajeError1}</small>
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="text"
              placeholder="ingrese email"
              className="form-control"
              onChange={handleChange}
              name="email"
              id="email"
            />
            <small className="mensajeError">{mensajeError2}</small>
          </div>
          <div className="form-group">
            <label>Contrasena</label>
            <input
              type="password"
              placeholder="ingrese contrasena"
              className="form-control"
              onChange={handleChange}
              name="contrasena"
              id="contrasena"
            />
            <small className="mensajeError">{mensajeError3}</small>
          </div>
          <div className="form-group">
            <label>Chequear Contrasena</label>
            <input
              type="password"
              placeholder="reingrese usuario"
              className="form-control"
              onChange={handleChange}
              name="contrasena2"
              id="contrasena2"
            />
            <small className="mensajeError">{mensajeError4}</small>
          </div>

          <button className="btn btn-info ">Enviar</button>
        </form>
      </div>
    </div>
  );
}
