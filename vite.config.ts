import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const isDev = process.env.NODE_ENV === "development";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  resolve: {
    alias: !isDev ? {} : {
      react: "https://esm.sh/react",
      "react-dom": "https://esm.sh/react-dom",
      "@mui/material": "https://esm.sh/@mui/material?standalone",
      "@emotion/react": "https://esm.sh/@emotion/react?standalone",
      "@emotion/styled": "https://esm.sh/@emotion/styled?standalone",


      // not work
      // "@mui/material": "https://esm.sh/@mui/material",
      // "@emotion/react": "https://esm.sh/@emotion/react",
      // "@emotion/styled": "https://esm.sh/@emotion/styled",
    },
  },
});
