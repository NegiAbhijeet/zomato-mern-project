import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./styles/theme.css";
import "./styles/auth-shared.css";
createRoot(document.getElementById('root')).render(
    <App />
)
