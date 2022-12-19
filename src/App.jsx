import './App.css'
import logo from './assets/freecodecamp-logo.png';
import ListaDeTareas from './components/ListaDeTareas';

function App() {
  return (
    <div className="AppTodo">
      <div className="contenedor-logo">
        <img className='img-logo' src={logo} alt="logo de freeCodeCamp" />
      </div>
      <div className="tareas-lista-principal">
        <h1>Mis tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  )
}

export default App
