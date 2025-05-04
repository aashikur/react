import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { router } from './Routes/Routes';
import { HelmetProvider } from 'react-helmet-async';


const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
    <HelmetProvider>
        <RouterProvider router={router} />
    </HelmetProvider>

);

