import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '../Frontend/App';
import '../Frontend/styles/App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import StartPage from '../Frontend/pages/StartPage'


const router = createBrowserRouter([
  {
    path: "/",
    element:<StartPage />
  }, 
  {
    path: "/game",
    element: <App />
  }, 
]);



ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)
