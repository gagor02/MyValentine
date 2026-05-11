import { useState } from "react"; 
import "../../css/Recuerdos.css";

// Imagenes de recuerdos
import ajolote from "../../assets/images/recuerdos/ajolote.jpeg";
import firstFlowers from "../../assets/images/recuerdos/primeras-flores.jpeg";
import firstSong from "../../assets/images/recuerdos/canciones-dedicadas.jpeg";
import firstEverPic from "../../assets/images/recuerdos/firsteverpic.jpeg";
import dibujos from "../../assets/images/recuerdos/dibujos.jpeg";
import colorTurtle from "../../assets/images/recuerdos/pintarTortuga.jpeg";
import recentPic from "../../assets/images/recuerdos/SyG.jpeg";

const Recuerdos = () => {

    // Estado para controlar la foto abierta en el modal
    const [fotoAbierta, setFotoAbierta] = useState(null);

  // Aquí vas agregando todos los recuerdos que quieras
  const listaRecuerdos = [
    {
      id: 1,
      imagen: ajolote, // Pon tus fotos en la carpeta 'public/fotos/'
      titulo: "Nuestra Cita en el acuario",
      fecha: "7 DE FEBRERO, 2026",
      descripcion:
        "Un día tan bonito que pasamos juntos, nos encontramos este ajolote gordo jaja. Un momento muy hermoso que siempre recuerdo con cariño.",
    },
    {
      id: 2,
      imagen: firstFlowers,
      titulo: "Las primeras flores que te dí",
      fecha: "7 DE FEBRERO, 2026",
      descripcion:
        "Tenía nervios porque no sabía si te iban a gustar, pero tu sonrisa al recibirlas hizo que todo valiera la pena.",
    },
    {
      id: 3,
      imagen: firstEverPic,
      titulo: "Nuestra primera foto juntos",
      fecha: "11 DE ABRIL, 2026 ♡",
      descripcion:
        "A los dos nos tomó por sorpresa que nos tomaran foto luego luego entrando jaja, pero fue perfecto, porque justo fue el día más especial para tener esa foto de recuerdo.",
    },
    {
      id: 4,
      imagen: dibujos,
      titulo: "Nuestros 'graffitis'",
      fecha: "25 DE ABRIL, 2026",
      descripcion: "Los nuestros son los que más se notan entre todos;)",
    },
    {
      id: 5,
      imagen: colorTurtle,
      titulo: "Nuestra tortuga mitad y mitad",
      fecha: "25 DE ABRIL, 2026",
      descripcion:
        "Este dibujo que pintamos es muy especial porque este día también conocí a tu familia y me gustó mucho compartir y combinar nuestras ideas al pintar juntos<3",
    },
    {
      id: 6,
      imagen: recentPic,
      titulo: "Nuestra foto más reciente",
      fecha: "9 DE MAYO, 2026",
      descripcion: "Te amo tanto<3",
    },
  ];

  // Funcion para cerrar el modal
  const cerrarFoto = (e) => {
    if (e.target.className === "modal-overlay" || e.target.className === "boton-cerrar") {
      setFotoAbierta(null);
    }
  };

  return (
    <div className="recuerdos-seccion">
      <h2 className="recuerdos-titulo-principal">{`Mural de Recuerdos <3`}</h2>
      <span class="subtitulo-principal">
        Hay muchos, y se pueden ir actualizando;)
      </span>
      <span class="subtitulo-principal">
        (puedes hacer click en las imágenes para verlas)
      </span>

      <div className="recuerdos-grid">
        {listaRecuerdos.map((recuerdo) => (
          <div key={recuerdo.id} className="tarjeta-recuerdo">
            {/* Le agregamos un onClick a la imagen */}
            <div className="imagen-contenedor" onClick={() => setFotoAbierta(recuerdo.imagen)}>
              <img src={recuerdo.imagen} alt={recuerdo.titulo} className="imagen-foto" />
              {/* Un pequeño texto que aparece al hacer hover para invitar al clic */}
              <div className="capa-hover">Ver foto</div>
            </div>
            <div className="tarjeta-info">
              <h3 className="tarjeta-titulo">{recuerdo.titulo}</h3>
              <span className="tarjeta-fecha">{recuerdo.fecha}</span>
              <p className="tarjeta-descripcion">{recuerdo.descripcion}</p>
            </div>
          </div>
        ))}
      </div>

      {/* --- EL MODAL (Pantalla completa) --- */}
      {/* Solo se dibuja en pantalla si fotoAbierta tiene algo */}
      {fotoAbierta && (
        <div className="modal-overlay" onClick={cerrarFoto}>
          <div className="modal-contenido">
            <button className="boton-cerrar" onClick={() => setFotoAbierta(null)}>✖</button>
            <img src={fotoAbierta} alt="Recuerdo ampliado" className="modal-imagen" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Recuerdos;
