import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/Portfolio-Website/',
  plugins: [
    react({
      babel: {
        presets: [reactCompilerPreset()],
      },
    }),
    tailwindcss(),
  ],
})