import React from 'react'
import ReactDOM from 'react-dom/client'
import WeeklyOne from './pages/WeeklyOne'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './scss/all.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WeeklyOne />
  </React.StrictMode>,
)
