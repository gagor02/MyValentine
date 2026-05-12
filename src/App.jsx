import { useState, useRef } from "react";
import { Outlet } from "react-router-dom";
import BottomNav from "./components/UI/BottomNav.jsx";
import './css/ModalInicial.css';

import OurSong from "./assets/music/NuestraCancion.mp3";

function App() {
  // 1. Estado para controlar la "Puerta de Entrada"
  const [entro, setEntro] = useState(false);

  // 2. Referencia para controlar la música
  const reproductorRef = useRef(null);

  // 3. Función que se dispara cuando ella toca el botón inicial
  const comenzarExperiencia = () => {
    setEntro(true); // Oculta la pantalla de bienvenida y muestra la app
    if (reproductorRef.current) {
      reproductorRef.current.play(); // ¡Le da play a la música!
    }
  };

  return (
    <>
      <audio ref={reproductorRef} src={OurSong} loop />
      {!entro ? (
        <div className="pantalla-bienvenida">
          <div className="bienvenida-contenido">
            <h1 className="bienvenida-titulo">Hoy es un día especial y tengo una sorpresa para ti...</h1>
            <p className="bienvenida-texto">{`Hay actualización;). Sube el volumen de tu celular<3`}</p>

            {/* ESTE BOTÓN ES LA LLAVE: Al tocarlo, arranca todo */}
            <button className="boton-entrar" onClick={comenzarExperiencia}>
              Entrar
            </button>
          </div>
        </div>
      ) : (
        <>
          <main>
            <Outlet />
          </main>
          <BottomNav />
        </>
      )}
      ;
    </>
  );
}

export default App;
