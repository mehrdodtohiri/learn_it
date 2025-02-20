import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    base: "/learn_it/", // Указываем путь к репозиторию
    plugins: [react()],
  });
  