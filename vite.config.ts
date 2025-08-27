import path from 'node:path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react-swc'
import { defineConfig, loadEnv } from 'vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Carga las variables de entorno basadas en el modo actual
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    define: {
      // Exponer variables de entorno específicas al código cliente
      'import.meta.env.BASE_SERVER_URL': JSON.stringify(env.BASE_SERVER_URL),
    },
  }
})
