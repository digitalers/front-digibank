import React, { useState } from 'react';
import axios from 'axios';
import './componentsEditar.css';

function EditarCliente({ cliente, onGuardarEdicion, onCancel }) {
    const [nuevoNombre, setNuevoNombre] = useState(cliente.nombre);
    const [nuevoApellido, setNuevoApellido] = useState(cliente.apellido);
    const [nuevoEmail, setNuevoEmail] = useState(cliente.email);
    const [nuevoTelefono, setNuevoTelefono] = useState(cliente.telefono);

    const handleGuardar = () => {
        const datosEditados = {
            id: cliente.id,
            nombre: nuevoNombre,
            apellido: nuevoApellido,
            email: nuevoEmail,
            telefono: nuevoTelefono,
        };

        onGuardarEdicion(datosEditados);
    };
    return (
        <div className="editar-cliente-container">
            <h2>Editar Cliente</h2>
            <label>
                Nombre:
                <input type="text" value={nuevoNombre} onChange={(e) => setNuevoNombre(e.target.value)} />
            </label>
            <label>
                Apellido:
                <input type="text" value={nuevoApellido} onChange={(e) => setNuevoApellido(e.target.value)} />
            </label>
            <label>
                Email:
                <input type="text" value={nuevoEmail} onChange={(e) => setNuevoEmail(e.target.value)} />
            </label>
            <label>
                Teléfono:
                <input type="text" value={nuevoTelefono} onChange={(e) => setNuevoTelefono(e.target.value)} />
            </label>
            <div className="editar-botones">
                <button onClick={handleGuardar}>Guardar</button>
                <button onClick={onCancel}>Cancelar</button>
            </div>
        </div>
    );
    }

    export default EditarCliente;
    




