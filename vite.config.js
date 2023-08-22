import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()]
})

/**
 * con estas tres lineas configuro vite para usar react, ademas tengo que instalar en las dependencias
 * el plugin de react y react y react-dom
 * asi si me piden en una prueba tecnica que configure vite para usar react sin usar el template
 */
