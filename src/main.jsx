import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Routes.jsx'
import { AuthProvider } from './contexts/AuthProvider.jsx'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { HelmetProvider } from 'react-helmet-async';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

// Initialize AOS
AOS.init({
  duration: 1000,
  once: false,
  offset: 120,
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={router} />
        <ToastContainer />
      </AuthProvider>
    </HelmetProvider>
  </StrictMode>,
)
