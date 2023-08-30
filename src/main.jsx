import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//Bloco de criação das rotas
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './routes/Home.jsx'
import Produtos from './routes/Produtos.jsx'
import Error from './routes/Error.jsx'
import EditarProduto from './routes/EditarProdutos.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, 
    children: [
      {
        path: '/home',
        element: <Home/>
      },
      {
        path: '/produtos',
        element: <Produtos/>
      },
      {
        path: '/error',
        element: <Error/>
      },
      {
        path: '/editar/produto/:id',
        element: <EditarProduto/>
      },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
