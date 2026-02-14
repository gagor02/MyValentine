import "../../css/HomeContent.css";
import carta from "../../assets/images/carta-img.png";

const HomeContent = ({ onOpen }) => {

  return (
    <>
      <div className="content-container">
        <div className="title-container">
          <h3>Un mensaje especial para tí;)</h3>
        </div>
        <div className="title-container">
          <h1>
            Para:<span>Shadia</span>
          </h1>
          <h2>
            De:<span>Gabriel</span>
          </h2>
        </div>
        <div className="letter-img-container">
          <img src={carta} alt="Carta de Gabriel pa Shadia" />
        </div>
        <div className="btn-container">
          <button onClick={onOpen}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4l-8 5l-8-5V6l8 5l8-5z"
              />
            </svg>
            Abrir mi tarjeta
          </button>
          <span>TOCA PARA DESCUBIR</span>
        </div>
      </div>
    </>
  );
};

export default HomeContent;
