import { useState, useEffect } from 'react';
import '../../css/Primer_mes.css' // Importamos tu CSS puro

const PrimerMes = () => {
  // Configura aquí la fecha exacta en la que le pediste que fuera tu novia
  // Formato: AÑO-MES-DIA T HORA:MINUTO:SEGUNDO
  const fechaInicio = new Date("2026-04-11T00:00:00"); 

  const [tiempo, setTiempo] = useState({ dias: 0, horas: 0, minutos: 0, segundos: 0 });

  useEffect(() => {
    const temporizador = setInterval(() => {
      const ahora = new Date();
      const diferencia = ahora - fechaInicio;

      setTiempo({
        dias: Math.floor(diferencia / (1000 * 60 * 60 * 24)),
        horas: Math.floor((diferencia / (1000 * 60 * 60)) % 24),
        minutos: Math.floor((diferencia / 1000 / 60) % 60),
        segundos: Math.floor((diferencia / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(temporizador);
  }, []);

  return (
    <div className="aniversario-container">
      <h2 className="aniversario-titulo">
        ¡Feliz Primer Mes, mi amor! ❤️
      </h2>
      <p className="aniversario-mensaje">
        "El primer mes de muchos. Cada día a tu lado es un regalo que atesoro. Gracias por hacerme tan feliz. Te amo más de lo que las palabras pueden expresar."
      </p>
      
      <div className="contador-grid">
        <div className="contador-caja">
          <span className="contador-numero">{tiempo.dias}</span>
          <p className="contador-etiqueta">Días</p>
        </div>
        <div className="contador-caja">
          <span className="contador-numero">{tiempo.horas}</span>
          <p className="contador-etiqueta">Horas</p>
        </div>
        <div className="contador-caja">
          <span className="contador-numero">{tiempo.minutos}</span>
          <p className="contador-etiqueta">Minutos</p>
        </div>
        <div className="contador-caja">
          <span className="contador-numero">{tiempo.segundos}</span>
          <p className="contador-etiqueta">Segundos</p>
        </div>
      </div>
    </div>
  );
}

export default PrimerMes;