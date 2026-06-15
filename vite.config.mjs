import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  // svgr lets us keep CRA-style `import { ReactComponent as X } from './x.svg'`
  // working via the `?react` query (used by layout/TopCTA.jsx).
  plugins: [react(), svgr()],
  server: {
    port: 3000, // match CRA's default dev port
    open: true,
  },
  build: {
    outDir: 'dist', // NOTE: CRA emitted to build/ — deployment config must be updated
  },
});
