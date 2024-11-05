import React, { useState } from "react";

function FormularioCita() {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        fecha: "",
        hora1: "",
        hora2: "",
        hora3: "",
        checkbox: false,
    });
    const [errorFecha, setErrorFecha] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        let isValid = true;
        setErrorFecha("");

        const { fecha, hora1, hora2, hora3, checkbox } = formData;

        if (!fecha) {
            setErrorFecha("Por favor, selecciona una fecha.");
            isValid = false;
        } else if (new Date(fecha) < new Date()) {
            setErrorFecha("La fecha debe ser actual.");
            isValid = false;
        }

        if (!hora1 && !hora2 && !hora3) {
            alert("Por favor, selecciona una hora.");
            isValid = false;
        }

        if (!checkbox) {
            alert("Por favor, acepta que la hora de la cita puede estar sujeta a cambios.");
            isValid = false;
        }

        if (isValid) {
            console.log("Datos del formulario:", formData);
            setFormSubmitted(true);
        }
    };

    const handleChange = (e) => {
        const { id, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [id]: type === "checkbox" ? checked : value,
        });
    };

    return (
        <div className="PaginaPrincipal">
            <section className="fade-in">
                {!formSubmitted ? (
                    <form id="formulario_cita" onSubmit={handleSubmit}>
                        <h2>Agenda el día de su cita</h2>
                        <label>Agende una hora específica en el formulario</label>
                        <br />
                        <br />
                        <label htmlFor="Fecha">Fecha:</label>
                        <input type="date" id="fecha" onChange={handleChange} />
                        <span className="error">{errorFecha}</span>
                        <br />
                        <br />
                        <label htmlFor="hora1">Hora 1:</label>
                        <input type="time" id="hora1" onChange={handleChange} />
                        <label htmlFor="hora2">Hora 2:</label>
                        <input type="time" id="hora2" onChange={handleChange} />
                        <label htmlFor="hora3">Hora 3:</label>
                        <input type="time" id="hora3" onChange={handleChange} />
                        <br />
                        <br />
                        <br />
                        <br />
                        <label>
                            <input type="checkbox" id="checkbox" onChange={handleChange} />
                            La hora de la cita puede estar sujeta a cambios.
                        </label>
                        <br />
                        <button className="btn-enviar" type="submit">
                            Enviar
                        </button>
                    </form>
                ) : (
                    <div className="fade-in text-light col-12">
                        <h2>Formulario enviado correctamente</h2>
                        <p className="text-light">Fecha seleccionada: {formData.fecha}</p>
                        <p className="text-light">Hora 1: {formData.hora1 || "No seleccionada"}</p>
                        <p className="text-light">Hora 2: {formData.hora2 || "No seleccionada"}</p>
                        <p className="text-light">Hora 3: {formData.hora3 || "No seleccionada"}</p>
                        <p className="text-light">Condiciones aceptadas: {formData.checkbox ? "Sí" : "No"}</p>
                    </div>
                )}
            </section>
        </div>
    );
}

export default FormularioCita;
