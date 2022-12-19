import { useState } from 'react'
import '../css/TareaFormulario.css'
import {v4 as uuidv4} from 'uuid';

function TareaFormulario(props){

  const [input, setInput] = useState('');

  const manejarCambio = e => {
    setInput(e.target.value);
  };

  const manejarEnvio = e => {
    e.preventDefault();
    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false
    };

    props.onSubmit(tareaNueva);

  }

  return(
    <form onSubmit={manejarEnvio} className="tarea-form">
      <input 
        type="text" 
        className="tarea-input"
        placeholder="Escribe una Tarea"
        name="texto"
        onChange={manejarCambio}
      />
      <button 
        className="tarea-btn"
        >
          Agregar Tarea
      </button>
    </form>
  );
}

export default TareaFormulario;