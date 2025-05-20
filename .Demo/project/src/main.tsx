import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import App from './App';
import './index.css';
import { AuthProvider } from './context/AuthContext';
import { AppDataProvider } from './context/AppDataContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <AppDataProvider>
          <App />
          <Toaster position="top-center" />
        </AppDataProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);