import React, { useState } from 'react';
import ConsultaEstudiantes from './ConsultaEstudiantes'; // Importa el componente ConsultaEstudiantes
import CrearCurso from './CrearCurso'; // Importa el componente CrearCurso

function App() {
  const [view, setView] = useState('consulta'); // Estado para cambiar entre vistas

  return (
    <div>
      <h1>Sistema de Gestión</h1>

      {/* Menú para cambiar entre vistas */}
      <nav>
        <button onClick={() => setView('consulta')}>Consulta de Estudiantes</button>
        <button onClick={() => setView('crearCurso')}>Crear Curso</button>
      </nav>

      {/* Muestra la vista correspondiente */}
      {view === 'consulta' && <ConsultaEstudiantes />}
      {view === 'crearCurso' && <CrearCurso />}
    </div>
  );
}

export default App;
