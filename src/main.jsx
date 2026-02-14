// Dependencias
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Estilos
import './index.css';

// Componentes
import HomeScreen from './pages/HomeScreen.jsx';


const App = lazy(() => import('./App.jsx'));

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomeScreen />
      },
      {
        path: '/hola',
        element: <h1>Hola</h1>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
