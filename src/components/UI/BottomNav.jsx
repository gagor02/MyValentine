import "../../css/BottomNav.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const BottomNav = () => {
  const location = useLocation();

  return (
    <nav className="bottom-nav-container">
      <div className="bottom-nav-content">
        
        {/* Opción 1: Inicio (Activa y funcionando) */}
        <button className="nav-item active">
          <svg xmlns="http://www.w3.org/2000/svg" className="nav-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
          {/* <span className="nav-text">Inicio</span> */}
        </button>

        {/* Opción 2: Favoritos (Deshabilitada con letrero) */}
        <button className="nav-item disabled" disabled>
          <span className="coming-soon-badge">Pronto</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="nav-icon" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11.07 12.85c.77-1.39 2.25-2.21 3.11-3.44c.91-1.29.4-3.7-2.18-3.7c-1.69 0-2.52 1.28-2.87 2.34L6.54 6.96C7.25 4.83 9.18 3 11.99 3c2.35 0 3.96 1.07 4.78 2.41c.7 1.15 1.11 3.3.03 4.9c-1.2 1.77-2.35 2.31-2.97 3.45c-.25.46-.35.76-.35 2.24h-2.89c-.01-.78-.13-2.05.48-3.15M14 20c0 1.1-.9 2-2 2s-2-.9-2-2s.9-2 2-2s2 .9 2 2"/>
          </svg>
          {/* <span className="nav-text">Favoritos</span> */}
        </button>

        {/* Opción 3: Perfil (Deshabilitada con letrero) */}
        <button className="nav-item disabled" disabled>
          <span className="coming-soon-badge">Pronto</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="nav-icon" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11.07 12.85c.77-1.39 2.25-2.21 3.11-3.44c.91-1.29.4-3.7-2.18-3.7c-1.69 0-2.52 1.28-2.87 2.34L6.54 6.96C7.25 4.83 9.18 3 11.99 3c2.35 0 3.96 1.07 4.78 2.41c.7 1.15 1.11 3.3.03 4.9c-1.2 1.77-2.35 2.31-2.97 3.45c-.25.46-.35.76-.35 2.24h-2.89c-.01-.78-.13-2.05.48-3.15M14 20c0 1.1-.9 2-2 2s-2-.9-2-2s.9-2 2-2s2 .9 2 2"/>
          </svg>
          {/* <span className="nav-text">Perfil</span> */}
        </button>

      </div>
    </nav>
  );
};

export default BottomNav;
