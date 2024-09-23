import React, { useState } from 'react';

function ConsultaEstudiantes() {
  const [carnet, setCarnet] = useState('');
  const [estudiante, setEstudiante] = useState(null);
  const [error, setError] = useState('');

  const buscarEstudiante = async () => {
    try {
      const response = await fetch(`https://test-deploy-12.onrender.com/estudiantes/${carnet}`);
      const data = await response.json();
      if (response.ok && data.length > 0) {
        setEstudiante(data[0]);
        setError('');
      } else {
        setEstudiante(null);
        setError('Estudiante no encontrado');
      }
    } catch (err) {
      setError('Error en la conexión con la API');
    }
  };

  const limpiarFormulario = () => {
    setCarnet('');
    setEstudiante(null);
    setError('');
  };

  return (
    <div>
      <h2>Consulta de Estudiantes</h2>
      <input 
        type="text" 
        placeholder="Ingrese Carnet" 
        value={carnet}
        onChange={(e) => setCarnet(e.target.value)}
      />
      <button onClick={buscarEstudiante}>Buscar</button>
      <button onClick={limpiarFormulario}>Limpiar</button>

      {estudiante && (
        <div>
          <p><strong>Carnet:</strong> {estudiante.Carnet}</p>
          <p><strong>Nombre:</strong> {estudiante.Estudiante}</p>
          <p><strong>Email:</strong> {estudiante.Email}</p>
          <p><strong>Sección:</strong> {estudiante.Seccion}</p>
        </div>
      )}

      {error && <p>{error}</p>}
    </div>
  );
}

export default ConsultaEstudiantes;
