const path = require('path');
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const analyze = require('rollup-plugin-analyzer')

export default defineConfig({
  clearScreen: false,
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/main.js'),
      name: 'output',
      formats: ['es', 'umd', 'iife'],
      fileName: (format) => `output.${format}.js`
    },
  },
  plugins: [
    vue(),
    analyze({
      summaryOnly: true,
      limit: 10,
    }),
  ]
})
