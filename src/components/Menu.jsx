function Menu() {
    function home_view() {
      window.location = "/";
    }
  
    function view_register() {
      window.location = "/Iniciopre";
    }
  
    function view_consult() {
      window.location = "/Presentacion";
    }

    function view_FormularioInscripcion() {
        window.location = "/FormularioInscripcion";
      }

    let view_contact = () => {
      window.location = "/Formulariocita";
    }
    let view_consulta = () => {
        window.location = "/Formularioconsulta";
      }
    return (
      <nav className="block-items">
        <ul className="Menu">
        <li className="item">
            <button onClick={view_consult}>Presentacion</button>
          </li>
          <li className="item">
            <button onClick={view_register}> Inicio</button>
          </li>
        
          <li className="item">
            <button onClick={view_FormularioInscripcion}>Formulario inscripcion</button>
          </li>
          <li className="item">
            <button onClick={view_contact}>Formulariocita</button>
          </li>
          <li className="item">
            <button onClick={view_consulta}>Consulta</button>
          </li>
        </ul>
      </nav>
    );
  }
  
  export default Menu;
  