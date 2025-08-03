import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/globals.css'

// Render the React application
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)