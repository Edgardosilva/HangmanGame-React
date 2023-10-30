import { useEffect, useState } from 'react'
import './styles/general.css'
import { arrayPalabras } from './componentes/palabras'
import { letras } from './componentes/letras'
import GameOver from '../Frontend/componentes/GameOverModal'
import NextLevel from '../Frontend/componentes/NextLevel'
import Win from '../Frontend/componentes/Win'


function App() {

  const [secretWord, setSecretWord] = useState('')
  const [urlImg, setUrlImg] = useState('./images/img0.png')
  const [guionesBajos, setGuionesBajos] = useState('')
  const [btnesLetra, setBtnesLetra] = useState()
  const [vidas, setVidas] = useState(7)
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [isPaused, setIsPaused] = useState(false)
  const timeGame = minutes + ':' + seconds
  let coincidencias = 0
  let errores = 0


  useEffect(() => {
    const timer = setInterval(() => {
      if (!isPaused) {
        if (seconds === 59) {
          setSeconds(0);
          setMinutes(minutes + 1);
        } else {
          setSeconds(seconds + 1);
        }
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [seconds, minutes, isPaused]);

  useEffect(() => {
    palabraAleatorea()
    letrasCuadros()
  }, [secretWord])

  useEffect(() => {
    deshabilitarBtn()
  }, [guionesBajos])

  const palabraAleatorea = () => {
    const randomIndex = Math.floor(Math.random() * arrayPalabras.length)
    const word = arrayPalabras[randomIndex]
    if (arrayPalabras.length === 0){
      setIsPaused(true)
      win()
    }
    const guiones = word.split('').map(() => ' _ ');
    setSecretWord(word)
    setGuionesBajos(guiones)
  }

  const manejarClicBoton = (e) => {
    const valor = e.target.value
    console.log(secretWord)
    for (let i = 0; i < secretWord.length; i++) {
      const letraIteracion = secretWord[i]
      if (valor === letraIteracion) {
        guionesBajos[i] = valor;
        if (guionesBajos.includes(valor)) {
          coincidencias++
        }
      }
    }
    nextModal()
    manejoErorres(valor)
    setGuionesBajos(guionesBajos.join(''))
  };

  const manejoErorres = (valor) => {
    if (!secretWord.includes(valor)) {
      errores++
      setUrlImg(`./images/img${errores}.png`)
      setVidas(vidas - errores)
    }
    gameOver()
  }

  const gameOver = () => {
    if (errores === 7) {
      const modal = document.querySelector('.modalDiv')
      modal.style.display = 'block';
    }
  }

  const letrasCuadros = () => {
    const btnLetras = letras.map(letra => {
      return <button key={letra} value={letra} className='btnLetra' onClick={manejarClicBoton}>{letra}</button>
    })
    setBtnesLetra(btnLetras)
  }

  const deshabilitarBtn = () => {
    const botones = document.querySelectorAll('.btnLetra');
    botones.forEach((btn) => {
      btn.addEventListener('click', () => {
        btn.style.display = 'none';
      });
    });
  };

  const nextModal = () => {
    const divNext = document.querySelector('.nextLevelDiv')
    if (coincidencias === secretWord.length){
      divNext.style.display = 'block'
    }
  }

  const win = () => {
    const divWin = document.querySelector('.win')
    const divNext = document.querySelector('.nextLevelDiv')
    divWin.style.display = 'block'
    divNext.style.display = 'none'
  }

  return (
    <>
      <div className='win'>
        <Win setSecretWord={setSecretWord} seconds={seconds} minutes={minutes}/>
      </div>
      <div className='nextLevelDiv'>
        <NextLevel 
          secretWord={secretWord} 
          guionesBajos={guionesBajos} 
          palabraAleatorea={palabraAleatorea} 
          letrasCuadros={letrasCuadros} 
          setVidas={setVidas} 
          setBtnesLetra={setBtnesLetra} 
          setUrlImg={setUrlImg}
          setIsPaused={setIsPaused}
          isPaused={isPaused}
          setSeconds={setSeconds}
          />
      </div>
      <div className='modalDiv'>
        <GameOver palabra={secretWord}/>
      </div>
      <section className='main'>
        <div className='vidas'>
          {'Vidas: ' + vidas}
        </div>
        <div className='time'>
          {'Tiempo: ' + timeGame}
        </div>
        <div className='imgDiv'>
          <img src={urlImg} alt="imgAhorcado" />
        </div>
        <div className='divLetras'>
          <h2 className='guiones'>{guionesBajos}</h2>
        </div>
        <div className='letras'>
          {btnesLetra}
        </div>
      </section>
    </>

  )
}

export default App
