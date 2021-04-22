import React, { useState, useEffect } from "react";
import "../css/registroMedico.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function RegistroUsuario() {
  const [state, setState] = useState({
    form: {
      usuario: "",
      nombreCompleto: "",
      email: "",
      contrasena: "",
      contrasena2: "",
      permiso: "",
      sucursal: "san miguel",
      horario: "manana",
      disciplina: "",
    },
  });

  const [usuarios, setUsuarios] = useState({});

  const [mensajeError1, setMensajeError1] = useState("");
  const [mensajeError2, setMensajeError2] = useState("");
  const [mensajeError3, setMensajeError3] = useState("");
  const [mensajeError4, setMensajeError4] = useState("");
  const [mensajeError5, setMensajeError5] = useState("");
  const [mensajeError6, setMensajeError6] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      //const res = await axios.get("http://localhost:4000/api/medicos");
      const res = await axios.get(
        "https://proyecto-rolling.herokuapp.com/medicos"
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
    console.log(props);
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
    if (state.form.nombreCompleto === "") {
      setMensajeError6("El campo no puede quedar vacio");
      handleError1("nombreCompleto");
    } else {
      setMensajeError6("");
      handleSuccess1("nombreCompleto");
    }
    if (state.form.disciplina === "") {
      setMensajeError5("El campo no puede quedar vacio");
      handleError1("disciplina");
    } else {
      setMensajeError5("");
      handleSuccess1("disciplina");
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
      return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        true
      );
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

    async function checkUserName() {
      console.log(usuarios);
      if (usuarios.length > 0 && state.form.usuario !== "") {
        const busquedaUsuario = usuarios.find(function (user) {
          if (user.usuario === state.form.usuario) {
            setMensajeError1("usuario en uso");
            handleError1("usuario");
            console.log("usuario en uso");
            return user;
          }
          handleSuccess1("usuario");
          return null;
        });
        if (busquedaUsuario) {
          return true;
        } else {
          console.log("usuario no usado");
          return false;
        }
      } else {
        console.log("correcto");
        return true;
      }
    }

    if (
      checkUserName() &&
      state.form.usuario !== "" &&
      state.form.email !== "" &&
      !isEmail(state.form.email) &&
      state.form.contrasena !== "" &&
      state.form.contrasena === state.form.contrasena2
    ) {
      console.log("almacenado");
      almacenar();
    }
  };

  const almacenar = async () => {
    const newMedico = {
      nombreCompleto: state.form.nombreCompleto,
      usuario: state.form.usuario,
      email: state.form.email,
      contrasena: state.form.contrasena,
      permiso: "denegado",
      sucursal: state.form.sucursal,
      disciplina: state.form.disciplina,
      horario: state.form.horario,
      contrasena2: state.form.contrasena2,
    };
    //await axios.post("http://localhost:4000/api/medicos", newMedico);
    await axios.post(
      "https://proyecto-rolling.herokuapp.com/medicos",
      newMedico
    );
    console.log(newMedico);
    history.push("/exito/registro");
  };

  return (
    <div className="fondoRegistroMedico">
      <div className="containerMedico">
        <div className="headerMedico">
          <p>Crear cuenta</p>
        </div>
        <form onSubmit={handleSubmit} className="formRegistroMedico">
          <div className="row">
            <div className="col-6-md">
              <div className="form-group">
                <label>Nombre Completo</label>
                <input
                  type="text"
                  placeholder="ingrese nombre"
                  className="form-control"
                  onChange={handleChange}
                  name="nombreCompleto"
                  id="nombreCompleto"
                />
                <div className="errorContainer">
                  {" "}
                  <small className="mensajeErrorMedico">{mensajeError6}</small>
                </div>
              </div>
              <div className="form-group">
                <label>Sucursal</label>
                <select
                  name="sucursal"
                  onChange={handleChange}
                  className="form-control"
                >
                  <option value="San miguel">San Miguel</option>
                  <option value="Yerba Buena">Yerba Buena</option>
                  <option value="Tafi Viejo">Tafi Viejo</option>
                </select>
              </div>
              <div className="form-group">
                <label>Usuario</label>
                <input
                  type="text"
                  placeholder="ingrese usuario"
                  className="form-control"
                  onChange={handleChange}
                  name="usuario"
                  id="usuario"
                />
                <div className="errorContainer">
                  {" "}
                  <small className="mensajeErrorMedico">{mensajeError1}</small>
                </div>
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
                <div className="errorContainer">
                  {" "}
                  <small className="mensajeErrorMedico">{mensajeError3}</small>
                </div>
              </div>
            </div>
            <div className="col-6-md">
              <div className="form-group">
                <label>Disciplina</label>
                <input
                  type="text"
                  placeholder="ingrese disciplina"
                  className="form-control"
                  onChange={handleChange}
                  name="disciplina"
                  id="disciplina"
                />
                <div className="errorContainer">
                  {" "}
                  <small className="mensajeErrorMedico">{mensajeError5}</small>
                </div>
              </div>
              <div className="form-group">
                <label>Horario</label>
                <select
                  name="horario"
                  onChange={handleChange}
                  className="form-control"
                >
                  <option value="manana">Manana</option>
                  <option value="tarde">Tarde</option>
                </select>
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
                <div className="errorContainer">
                  <small className="mensajeErrorMedico">{mensajeError2}</small>
                </div>
              </div>
              <div className="form-group">
                <label>Chequear Contrasena</label>
                <input
                  type="password"
                  placeholder="reingrese contrasena"
                  className="form-control"
                  onChange={handleChange}
                  name="contrasena2"
                  id="contrasena2"
                />
                <div className="errorContainer">
                  {" "}
                  <small className="mensajeErrorMedico">{mensajeError4}</small>
                </div>
              </div>
            </div>
          </div>
          <button className="btn btn-info loginButton">Enviar</button>
        </form>
      </div>
    </div>
  );
}
