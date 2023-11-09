import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Clientes.css'; // Importa el archivo CSS

function ListaClientes() {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    async function fetchClientes() {
      try {
        const response = await axios.get('http://localhost:3001/api/clientes');
        setClientes(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchClientes();
  }, []);

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
          </tr>
        </thead>
        <tbody>
          {clientes.map((cliente) => (
            <tr className="table-row" key={cliente.id}>
              <td className='table-data'>{cliente.nombre}</td>
              <td className='table-data'>{cliente.apellido}</td>
              <td className='table-data'>{cliente.email}</td>
              <td className='table-data'>{cliente.telefono}</td>
            </tr>
          ))}
        </tbody>
      </table>
    
    </div>
  );
}

export default ListaClientes;
