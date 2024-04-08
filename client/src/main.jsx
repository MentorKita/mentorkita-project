import React from 'react'
import ReactDOM from 'react-dom/client'
import Dashboard from './pages/Dashboard'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Dashboard />
  </React.StrictMode>,
)
