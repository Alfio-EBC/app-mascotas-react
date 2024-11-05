import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Iniciopre } from './components/Inicio';
import Presentacion from './components/Presentacion';
import { FormularioInscripcion } from './components/Formularioinscripcion';
import Formulariocita from './components/Formulariocita';
import { Consulta }  from './components/Consulta';
import Menu from './components/Menu';


function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Menu />
                <Routes>
                    <Route path="/" element={<Presentacion />} />
                    <Route path="/Iniciopre" element={<Iniciopre />} />
                    <Route path="/Presentacion" element={<Presentacion />} />
                    <Route path="/Formularioinscripcion" element={<FormularioInscripcion />} />
                    <Route path="/Formulariocita" element={<Formulariocita />} />
                    <Route path="/Formularioconsulta" element={<Consulta />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
