import React,{useState,useEffect} from 'react';
import Formulario from './components/Formulario';
import TablaList from './components/TablaList';

function App() {
  let datosIniciales = JSON.parse(localStorage.getItem('datos'));
  if(!datosIniciales){
    datosIniciales = [];

  }

  const [datos, actualizarDatos] = useState(datosIniciales);
  useEffect( ()=>{
    if(datosIniciales){
      localStorage.setItem('datos', JSON.stringify(datos));
    }else{
      localStorage.setItem('datos', JSON.stringify([]));
    }
  }, [datosIniciales,datos]);

  const crearDatos=(dato)=>{
  actualizarDatos([
      ...datos,
      dato
    ]);
  }
  return (
    <div className="App">
     <nav className="navbar navbar-light bg-primary d-flex justify-content-center">
      <span className="navbar-brand mb-0 h1 text-white p-3">Formulario react</span>
    </nav>
      <div className="container">
      <Formulario
        crearDatos={crearDatos}
      />
      {datos.length===0 ? 
      <p className="alert alert-dark mt-2">no hay datos</p>
     : <TablaList
     datos={datos}
     />}
      
      </div>
    </div>
  );
}

export default App;
