import Logopetclinic from "../img/logo-petclinic.png";
import Patamenu from "../img/pata.png";

function Presentacion() {

  let bienvenidaUsuario = () => {
    alert("Bienvenida usuario!");
  };

  return (
    <div className="PaginaPrincipal">
      <section>
        <img src={Logopetclinic} alt="Logo Petclinic" />
        <button onClick={bienvenidaUsuario}>
          <img src={Patamenu} alt="Pata Menu" />
        </button>
      </section>
    </div>
  );
}

export default Presentacion;
