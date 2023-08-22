import { createRoot } from 'react-dom/client'
import { App } from './src/App'

const root = createRoot(document.getElementById('app'))
root.render(<App />)

/**
 * este es mi punto de entrada de la aplicacion, es donde voy a mandar que se renderice, el h1 luego lo cambiare por mi componente principal de react
 * hay que cambiar la extension del main, porque sino no es capaz de transpilar el codigo, lo cambio por jsx
 * configurar rapido el linter, es importante npm install standard -D y configurar el package.json
 */
