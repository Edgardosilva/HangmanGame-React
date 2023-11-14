import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import '../componentes/win.css'


const Win = ({ timeInSeconds }) => {

    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
      const currentUser = localStorage.getItem('currentUser')
      const currentUserObject = JSON.parse(currentUser) 
      setId(currentUserObject.id)
      setName(currentUserObject.name)
    }, [])

    const btnReiniciar = () => {
        navigate('/');
        window.location.reload()
      };

    const convertToSeconds = (timeSeconds) => {
      const minutes = Math.floor(timeSeconds / 60);
      const seconds = timeSeconds % 60;
      return `${minutes}:${String(seconds).padStart(2, '0')}`;
    }

    const crearPuntajes = async () => {
      console.log(id);
      console.log(name);
      try {
        const response = await fetch(
          "http://localhost:3000/api/createPuntajes",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              UsuarioID: id,
              UserName: name,
              TiempoCompletado: convertToSeconds(timeInSeconds),
            }),
          }
        );
        if (response.ok) {
          navigate("/scores");
        } else {
          alert("Error al crear el usuario");
        }
      } catch (error) {
        console.error("Error al realizar la solicitud:", error);
      }
    }; 

  return (
    <div className="nextLvlDiv">
      <div className="winInfo">
        <h3>Felicidades! Ganaste!</h3>
        <h3>Tu tiempo fue de: {Math.floor(timeInSeconds / 60)}:{timeInSeconds % 60}</h3>
        <button onClick={btnReiniciar}>Reiniciar juego</button>
        <button onClick={crearPuntajes}>Ver tabla de posiciones</button>
      </div>
    </div>
  );
};

export default Win;