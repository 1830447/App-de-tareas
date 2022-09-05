import './App.css';
import freecode from './imagenes/freecode.svg';
import ListaDeTareas from './conponentes/ListaDeTareas';
function App() {
  return (
    <div className="aplicacion-tareas">
      <div className='titulo-controlador'>
        <h1 className='titulo'>Aplicacion de tareas</h1>
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
