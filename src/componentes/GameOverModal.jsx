import React from 'react';
import './gameOverModal.css'
import { Navigate, useNavigate } from 'react-router-dom';

const GameOver = ({ palabra }) => {
  const navigate = useNavigate();

  const btnReiniciar = () => {
    navigate("/");
    window.location.reload()
  };

  return (
    <div className="modalLayout">
      <h1>Perdiste!</h1>
      <h2 className="palabraPerdida">La palabra era: {palabra}</h2>
      <button onClick={btnReiniciar}>Reiniciar</button>
    </div>
  );
};

export default GameOver;