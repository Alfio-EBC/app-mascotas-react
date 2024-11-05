
import React, { Component } from "react";
import Logopetclinic from "../img/logo-petclinic.png";
import Patamenu from "../img/pata.png";
import Perro from "../img/perro.png";


class Iniciopre extends Component {
  cita = () => {
    alert("Agende su cita en el siguiente formulario");
  };

  render() {
    return (
      <div className="PaginaPrincipal">
        <section>
          <img src={Logopetclinic} alt="Logo Petclinic" />
          <img src={Perro} alt="Perro" />
          <button onClick={this.cita}>
            <img src={Patamenu} alt="Pata Menu" />
          </button>
        </section>
      </div>
    );
  }
}

export { Iniciopre };
