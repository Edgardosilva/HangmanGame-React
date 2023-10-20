import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import StartPage from './pages/StartPage.jsx';



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
