import React from 'react';
import logo from './logo.svg';
import './App.css';
import Tarea06Funcional from '../src/src/tarea06/Tarea06Funcional';
import Tarea06Clase from './src/tarea06/Tarea06Clase';

function App() {
  const a:number = 6;
  const b:number = 12;

  return (
    <React.Fragment>
      <Tarea06Funcional a={a} b={b}/>
      <Tarea06Clase a={a} b={b}/>
    </React.Fragment>
  );
}

export default App;
