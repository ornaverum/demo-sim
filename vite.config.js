import raw from "vite-raw-plugin";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig( {
  base: "./",
  plugins: [
    raw( {
      fileRegex: /\.ftl$/
    } )
  ]
} );
