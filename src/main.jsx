import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Counter from './components/counter.jsx'
import Todo from './components/todo.jsx'
import Toggle_theme from './components/toggle_theme.jsx'
import Calc from './components/calc.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />

  </StrictMode>
)
