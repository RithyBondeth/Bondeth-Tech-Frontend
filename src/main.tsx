import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Navbar } from './components/header/navbar/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar isAuthenicated={false}/>
    <App />
  </StrictMode>,
)
