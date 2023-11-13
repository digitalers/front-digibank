import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Clientes.css'; // Importa el archivo CSS
import EditarCliente from './componentsEditar/componentsEditar';

function useClientes() {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    async function fetchClientes() {
      try {
        const response = await axios.get('http://localhost:8080/api/clientes');
        setClientes(response.data);
      } catch (error) {
        console.error('Error al obtener clientes:', error);
      }
    }

    fetchClientes();
  }, []);

  return { clientes, setClientes };
}

function ListaClientes() {
  const { clientes, setClientes } = useClientes();
  const [clienteSeleccionado, setClienteSeleccionado] = useState(null);

  const handleEditarCliente = (cliente) => {
    setClienteSeleccionado(cliente);
  };

  const handleGuardarEdicion = async (datosEditados) => {
    try {
      await axios.put(`http://localhost:8080/api/clientes/${datosEditados.id}`, datosEditados);
      
      const response = await axios.get('http://localhost:8080/api/clientes');
      setClientes(response.data);

      setClienteSeleccionado(null);
    } catch (error) {
      console.error('Error al guardar la edición:', error);
    }
  };

  const handleCancelarEdicion = () => {
    setClienteSeleccionado(null);
  };

  return (

    <div className="table-container">
      <h2 className='lista-header'>Lista de Clientes</h2>
      <table className='table-clientes'>
        <thead>
          <tr>
            <th className='table-headers'>Nombre</th>
            <th className='table-headers'>Apellido</th>
            <th className='table-headers'>Email</th>
            <th className='table-headers'>Teléfono</th>
            <th className='table-headers'>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map((cliente) => (
            <tr className="table-row" key={cliente.id}>
              <td className='table-data'>{cliente.nombre}</td>
              <td className='table-data'>{cliente.apellido}</td>
              <td className='table-data'>{cliente.email}</td>
              <td className='table-data'>{cliente.telefono}</td>
              <td className='table-data'>
              <EditarCliente/>
                <button onClick={() => handleEditarCliente(cliente)}>Editar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {clienteSeleccionado && (
        <EditarCliente
          cliente={clienteSeleccionado}
          onGuardarEdicion={handleGuardarEdicion}
          onCancel={handleCancelarEdicion}
        />
      )}
    </div>
  );
}

export default ListaClientes;
