import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.tsx'; // Importação que faltava para a rota principal
import Home from './routes/Home/index.tsx';
import Produtos from './routes/Produtos/index.tsx';
import EditarProdutos from './routes/EditarProdutos/index.tsx';
import ErrorPage from './routes/Error/index.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />, // Corrigido de <Error /> para <ErrorPage />
    children: [
      { path: '/', element: <Home /> }, // Geralmente a home fica no caminho inicial
      { path: 'produtos', element: <Produtos /> }, // Caminhos simplificados
      { path: 'editar-produtos', element: <EditarProdutos /> },
      { path: 'error', element: <ErrorPage /> },
    ],
  },
]);

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);