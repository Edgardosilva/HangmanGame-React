import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import './win.css'


const Win = ({ seconds, minutes }) => {
    const navigate = useNavigate()
    const btnReiniciar = () => {
        navigate('/');
        window.location.reload()
      };

  return (
    <div className="nextLvlDiv">
      <div className="winInfo">
        <h3>Felicidades! Ganaste!</h3>
        <h3>Tu tiempo fue de: {minutes}:{seconds}</h3>
        <button onClick={btnReiniciar}>Reiniciar juego</button>
        <button>Ver tabla de posiciones</button>
      </div>
    </div>
  );
};

export default Win;