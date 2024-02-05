import { defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: tag => /^micro-app/.test(tag)
        }
      }
    })
  ],
 
  server: {
    port: 5555,
    proxy: {
      "/yhdp/": {
        target: "http://localhost:9999",
        changeOrigin: true,
      }
    }
  }
});
