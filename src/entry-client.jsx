import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles/global.css'

// Client entry: mounts the app for interactivity (lead form, etc.).
// Prerendered static HTML is already inside #root; mount replaces it (no duplicate).
createRoot(document.getElementById('root')).render(React.createElement(App))
