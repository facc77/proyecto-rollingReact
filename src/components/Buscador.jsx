import { React, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from "react-router-dom";

export default function Buscador() {
  const [busqueda, setBusqueda] = useState("");

  const handleChange = (e) => {
    setBusqueda(e.target.value);
  };

  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/busquedaPaciente/${busqueda}`);
  };

  return (
    <div className="container fila2">
      <div className="row fila1">
        <div>
          <p>Saca un turno con un doctor local</p>
        </div>
        <div>
          <form className="form1" onSubmit={handleSubmit}>
            <div className="p-1 bg-light rounded rounded-pill shadow-sm mb-4">
              <div className="input-group">
                <input
                  type="search"
                  placeholder="Que estas buscando?"
                  aria-describedby="button-addon1"
                  className="form-control border-0 bg-light busquedaPlaceholder"
                  onChange={handleChange}
                />
                <div className="input-group-append">
                  <button
                    id="button-addon1"
                    type="submit"
                    className="btn btn-link text-primary"
                  >
                    <FontAwesomeIcon icon="search" />
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
