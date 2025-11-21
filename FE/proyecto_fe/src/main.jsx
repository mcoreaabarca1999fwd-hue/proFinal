import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Routing from './rutas/Routing'
import "../src/estilos/Registro.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Routing/>
  </StrictMode>,
)
