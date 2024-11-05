import React, { useState } from "react";

function Consulta() {
    const [formData, setFormData] = useState({
        nombre: "",
        email: "",
        telefono: "",
        nombreMascota: "",
        tipoMascota: "",
        edadMascota: "",
        autorizoDatos: false,
        recibirActualizaciones: false,
    });
    const [errors, setErrors] = useState({});
    const [resultados, setResultados] = useState("");

    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const validatePhone = (phone) => /^\d{7,}$/.test(phone);

    const handleSubmit = (e) => {
        e.preventDefault();
        let formIsValid = true;
        const newErrors = {};

        // Validación de cada campo
        if (!formData.nombre) {
            newErrors.nombre = "Por favor, ingrese su nombre.";
            formIsValid = false;
        }
        if (!formData.email) {
            newErrors.email = "Por favor, ingrese su correo electrónico.";
            formIsValid = false;
        } else if (!validateEmail(formData.email)) {
            newErrors.email = "Por favor, ingrese un correo electrónico válido.";
            formIsValid = false;
        }
        if (!formData.telefono) {
            newErrors.telefono = "Por favor, ingrese su teléfono.";
            formIsValid = false;
        } else if (!validatePhone(formData.telefono)) {
            newErrors.telefono = "Por favor, ingrese un teléfono válido.";
            formIsValid = false;
        }
        if (!formData.tipoMascota) {
            newErrors.tipoMascota = "Por favor, seleccione el tipo de mascota.";
            formIsValid = false;
        }
        if (!formData.edadMascota) {
            newErrors.edadMascota = "Por favor, ingrese la edad de su mascota.";
            formIsValid = false;
        }
        if (!formData.autorizoDatos) {
            newErrors.autorizoDatos = "Debe autorizar el tratamiento de sus datos personales.";
            formIsValid = false;
        }

        setErrors(newErrors);

        if (formIsValid) {
            setResultados(` 
        <h2>Datos del Formulario</h2>
        <p><strong>Nombre:</strong> ${formData.nombre}</p>
        <p><strong>Correo Electrónico:</strong> ${formData.email}</p>
        <p><strong>Teléfono:</strong> ${formData.telefono}</p>
        <p><strong>Tipo de Mascota:</strong> ${formData.tipoMascota}</p>
        <p><strong>Nombre Mascota:</strong> ${formData.nombreMascota}</p>
        <p><strong>Edad Mascota:</strong> ${formData.edadMascota}</p>
        <p><strong>Autoriza Datos:</strong> ${formData.autorizoDatos ? "Sí" : "No"}</p>
        <p><strong>Recibir Actualizaciones:</strong> ${formData.recibirActualizaciones ? "Sí" : "No"}</p>
      `);
        }
    };

    const handleChange = (e) => {
        const { name, type, checked, value } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    return (
        <div className="PaginaPrincipal fade-in">
            <section>
                <form id="basicForm" onSubmit={handleSubmit}>
                    <h2>Datos dueño de la mascota</h2>

                    <label htmlFor="nombre">Nombre:</label>
                    <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} />
                    <span className="error">{errors.nombre}</span>

                    <label htmlFor="email">Correo Electrónico:</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
                    <span className="error">{errors.email}</span>

                    <label htmlFor="telefono">Teléfono:</label>
                    <input type="text" id="telefono" name="telefono" value={formData.telefono} onChange={handleChange} />
                    <span className="error">{errors.telefono}</span>



                    <br />
                    <br />
                    <label>
                        <input type="checkbox" id="checkboxuno" name="autorizoDatos" checked={formData.autorizoDatos} onChange={handleChange} />
                        Autorizo el tratamiento de mis datos personales.
                    </label>
                    <span className="error">{errors.autorizoDatos}</span>
                    <br />
            
                    <button className="btn-enviar" type="submit">
                        Enviar
                    </button>
                </form>

                <div id="resultados" dangerouslySetInnerHTML={{ __html: resultados }}></div>
            </section>
        </div>
    );
}

export { Consulta };
