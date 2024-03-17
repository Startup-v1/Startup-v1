import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './scss/index.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  //FIXME: Remove for production?
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
