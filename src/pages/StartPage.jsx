import React from 'react';
import './StartPage.css'
import { Navigate, useNavigate } from 'react-router-dom';

const StartPage = () => {

    const navigate = useNavigate()
    const btnStart = () => {
        navigate('/game')
    }

    return (
        <section>
            <h1>Juego del ahorcado</h1>
            <button onClick={btnStart}>Comenzar</button>
        </section>
    );
};

export default StartPage;