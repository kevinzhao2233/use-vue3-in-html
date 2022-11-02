import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'node:path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    target: 'es2015',
    outDir: 'lib', // 输出目录
    minify: false,
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'MyApp',
      fileName: 'my-app',
    },
    rollupOptions: {
      external: ['vue'],
    },
  },
})
