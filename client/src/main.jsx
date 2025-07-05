import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Stations from './pages/Stations.jsx';
import Home from './pages/Home.jsx';
import Contact from './pages/Contact.jsx';
import _Station_Info from './pages/Station_Profile.jsx';
import PointRoute from './pages/PointRoute.jsx'
import About from './pages/About.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {path: "/", element: <Home />},
  {path: "/stations", element: <Stations />},
  {path: "/stations/:station_name", element: <_Station_Info />},
  {path: "/stations/:station_name/:route_id", element: <PointRoute />},
  {path: "/contact", element: <Contact />},
  {path: "/about", element: <About />}
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
