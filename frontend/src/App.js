import React from 'react';
import divisasImg from './assets/divisas.jpg';
import './App.css';

function App() {
  const fechaHoy = new Date().toLocaleDateString(); // Obtener fecha actual

  return (
    <div className="contenedor">
      <h1 className="titulo">TASA DE CAMBIO - {fechaHoy}</h1>
      <img src={divisasImg} alt="Imagen de Divisas" className="imagen-fondo" />
    </div>
  );
}

export default App;
