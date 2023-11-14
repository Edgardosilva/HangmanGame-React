import React, { useEffect, useState } from 'react';
import './puntajes.css'
import { useNavigate } from 'react-router-dom';

const Puntajes = () => {
  const navigate = useNavigate()
  const [data, setData] = useState([]);
  const [currentUser, setCurrentUser] = useState('')

  const btnReiniciar = () => {
    navigate("/");
    window.location.reload()
  };

  useEffect(() => {
    fetchData();
    setCurrentUser(localStorage.getItem('currentUser'))
  }, []);

  console.log(currentUser)

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/tiempos");
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    }
  };

  return (
    <section>
      <h1>Mejores Tiempos</h1>
      <div>
        <table border="1">
          <thead>
            <tr>
              <th>NOMBRE JUGADOR</th>
              <th>TIEMPOS</th>
            </tr>
          </thead>
          <tbody>
            {data.map((fila, index) => (
              <tr key={index}>
                <td>{fila.UserName}</td>
                <td>{fila.TiempoCompletado}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button onClick={btnReiniciar}>Volver a jugar</button>
    </section>
  );
};

export default Puntajes;