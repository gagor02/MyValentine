import "../../css/Opened_letter_content.css";

import gato from "../../assets/images/sphynx.jpg";

import cacatua from "../../assets/images/cacatua-ninfa.webp";

const Opened_letter_content = ({ onClose }) => {
  return (
    <>
      <div className="fade-in-screen">
        <div className="letter-page-container">
          {/* Navegación Superior */}
          <div className="letter-header">
            <button onClick={onClose} className="icon-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ea4b6e"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
            </button>
          </div>
          {/* Tarjeta Principal */}
          <div className="paper-card">
            <div className="card-top-border"></div>

            <div className="card-content">
              <h2 className="salutation">Para la más bonita,</h2>

              <div className="letter-body">
                <p>Feliz día de San Valentín.</p>
                <p>
                  {`Me siento feliz de poder conocerte y compartir momentos contigo;). \n\n 
                Me pareces una persona maravillosa, inteligente, responsable y con una sonrisa muy linda. \n\n 
                Espero te agrade este pequeño detalle que estuve haciendo para tí.`}
                </p>
              </div>

              <h3 className="closing">Con cariño, Gabriel</h3>

              <div className="heart-divider">
                <div className="mini-heart"></div>
              </div>
            </div>

            <div className="card-footer">RECORDÉ QUE TE GUSTAN ESOS DOS</div>
          </div>

          {/* Galería de Fotos (Polaroids) */}
          <div className="photos-container">
            <div className="polaroid photo-left">
              {/* Reemplaza el src con la ruta de tu imagen */}
              <img src={gato} alt="Bills" />
            </div>
            <div className="polaroid photo-right">
              {/* Reemplaza el src con la ruta de tu imagen */}
              <img src={cacatua} alt="Ninfa" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Opened_letter_content;
