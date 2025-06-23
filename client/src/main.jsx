import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Stations from './pages/Stations.jsx';
import Home from './pages/Home.jsx';
import Contact from './pages/Contact.jsx';
import _Station from './pages/_Station.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {path: "/", element: <Home />},
  {path: "/stations", element: <Stations />},
  {path: "/stations/:id", element: <_Station />},
  {path: "/contact", element: <Contact />}
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
