import "../../css/BottomNav.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const BottomNav = () => {
  const location = useLocation();

  return (
    // Contenedor principal anclado al fondo
    <nav className="bottom-nav-container">
      {/* Contenedor interno para mantener el ancho máximo en PC */}
      <div className="bottom-nav-content">
        {/* Opción 1: Inicio (Activa) */}
        <Link
          to="/"
          className={`nav-item ${location.pathname === "/" ? "active" : ""}`}
        >
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
          <span className="nav-text"></span>
        </Link>

        {/* Opción 2: Favoritos */}
        <Link
          to="/hola"
          className={`nav-item ${location.pathname === "/hola" ? "active" : ""}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="nav-icon"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
          <span className="nav-text"></span>
        </Link>

        {/* Opción 3: Perfil */}
        <button className="nav-item" disabled>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M7.92 7.54c-.8-.34-1.14-1.33-.66-2.05C8.23 4.05 9.85 3 11.99 3c2.35 0 3.96 1.07 4.78 2.41c.7 1.15 1.11 3.3.03 4.9c-1.2 1.77-2.35 2.31-2.97 3.45c-.15.27-.24.49-.3.94c-.09.73-.69 1.3-1.43 1.3c-.87 0-1.58-.75-1.48-1.62c.06-.51.18-1.04.46-1.54c.77-1.39 2.25-2.21 3.11-3.44c.91-1.29.4-3.7-2.18-3.7c-1.17 0-1.93.61-2.4 1.34c-.35.57-1.08.75-1.69.5M14 20c0 1.1-.9 2-2 2s-2-.9-2-2s.9-2 2-2s2 .9 2 2"
            />
          </svg>
          <span className="nav-text">Soon</span>
        </button>
      </div>
    </nav>
  );
};

export default BottomNav;
