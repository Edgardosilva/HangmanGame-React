import React from 'react';
import '../pages/startpage.css'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const StartPage = () => {

    const navigate = useNavigate()
    const [valorCampo, setValorCampo] = useState('');
    const handleInputChange = (e) => {
      setValorCampo(e.target.value);
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(valorCampo)
      try {
        const response = await fetch("http://localhost:3000/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({"NombreUsuario" : valorCampo}),
        });

        if (response.ok) {
          const data = await response.json();
          localStorage.setItem('currentUser', JSON.stringify({"id":data.id, "name":valorCampo}))
          setValorCampo(""); 
          navigate("/game");
        } else {
          alert("El usuario ya existe, intenta con otro");
        }
      } catch (error) {
        console.error("Error al realizar la solicitud:", error);
      }
    };

    return (
      <section>
        <h1>Juego del ahorcado</h1>
        <form action="" method='post' onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder = 'Escribe tu nombre' 
            onChange={handleInputChange}
            required/>
          <button type='submit'>Comenzar</button>
        </form>
      </section>
    );
};

export default StartPage;