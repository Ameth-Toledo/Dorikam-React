import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFound from './components/Pages/NotFound/NotFound.jsx';
import MetodosPagos from './components/Pages/MetodosPagos/MetodosPagos.jsx';
import Entregas from './components/Pages/Entregas/Entregas.jsx';
import Catalogos from './components/Pages/Catalogos/Catalogos.jsx';

const router = createBrowserRouter([
  { path: '/Dorikam-React', element: <App/>, errorElement: <NotFound /> },
  { path: '/Dorikam-React/metodos/de/pago', element: <MetodosPagos /> },
  { path: '/Dorikam-React/entregas', element: <Entregas/> },
  { path: '/Dorikam-React/catalogos', element: <Catalogos/> }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
