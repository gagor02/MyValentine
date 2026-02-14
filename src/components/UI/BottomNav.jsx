import '../../css/BottomNav.css';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const BottomNav = () => {
  const location = useLocation();

  return (
    // Contenedor principal anclado al fondo
    <nav className="bottom-nav-container">
      {/* Contenedor interno para mantener el ancho máximo en PC */}
      <div className="bottom-nav-content">
        
        {/* Opción 1: Inicio (Activa) */}
        <Link to="/" className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4l-8 5l-8-5V6l8 5l8-5z"/></svg>
          <span className="nav-text">Carta</span>
        </Link>

        {/* Opción 2: Favoritos */}
        <Link to="/hola" className={`nav-item ${location.pathname === '/hola' ? 'active' : ''}`}>
          <svg xmlns="http://www.w3.org/2000/svg" className="nav-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
          <span className="nav-text"></span>
        </Link>

        {/* Opción 3: Perfil */}
        <button className="nav-item">
          <svg xmlns="http://www.w3.org/2000/svg" className="nav-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
          <span className="nav-text">Perfil</span>
        </button>

      </div>
    </nav>
  );
};

export default BottomNav;