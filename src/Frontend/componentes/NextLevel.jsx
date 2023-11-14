import React from "react";
import "../componentes/nextLevel.css";
import { useNavigate } from "react-router-dom";
import { arrayPalabras } from "./palabras";
import { letras } from "./letras";

const NextLevel = ({
  secretWord,
  palabraAleatorea,
  letrasCuadros,
  setVidas,
  setBtnesLetra,
  setUrlImg
}) => {
  const navigate = useNavigate();

  const nextWord = () => {
    const div = document.querySelector(".nextLevelDiv");
      const indiceEliminar = arrayPalabras.indexOf(secretWord);
      if (indiceEliminar !== -1) {
        arrayPalabras.splice(indiceEliminar, 1);
        palabraAleatorea();
      }
      console.log(arrayPalabras);
      setVidas(7);
      setUrlImg("./src/Frontend/images/img0.png");
      letrasCuadros();
      setBtnesLetra(letras);
      div.style.display = "none";
  };

  const btnReiniciar = () => {
    navigate("/");
  };

  return (
    <div className="nextLvlDiv">
      <div className="winInfo">
        <h3>Palabra Adivinada!</h3>
        <button onClick={nextWord}>Siguiente palabra</button>
        <button onClick={btnReiniciar}>Reiniciar juego</button>
      </div>
    </div>
  );
};

export default NextLevel;
