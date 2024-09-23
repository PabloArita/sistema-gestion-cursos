import React, { useState } from 'react';

function CrearCurso() {
  const [nombre, setNombre] = useState('');
  const [creditos, setCreditos] = useState(0);
  const [descripcion, setDescripcion] = useState('');
  const [mensaje, setMensaje] = useState('');

  const crearCurso = async () => {
    const curso = {
      nombre,
      creditos: Number(creditos),
      descripcion
    };

    try {
      const response = await fetch('https://test-deploy-12.onrender.com/cursos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(curso)
      });

      if (response.ok) {
        setMensaje('Curso creado exitosamente');
        setNombre('');
        setCreditos(0);
        setDescripcion('');
      } else {
        setMensaje('Error al crear el curso');
      }
    } catch (err) {
      setMensaje('Error en la conexión con la API');
    }
  };

  return (
    <div>
      <h2>Crear Curso</h2>
      <input
        type="text"
        placeholder="Nombre del curso"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <input
        type="number"
        placeholder="Créditos"
        value={creditos}
        onChange={(e) => setCreditos(e.target.value)}
      />
      <input
        type="text"
        placeholder="Descripción"
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
      />
      <button onClick={crearCurso}>Crear Curso</button>
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
}

export default CrearCurso;
