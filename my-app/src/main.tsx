import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";


import App from './App.tsx';
import Home from "./routes/Home";
import Produto from "./routes/Produto";
import Erro from './routes/Erro';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Erro />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/produto", element: <Produto /> },
    ],
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
