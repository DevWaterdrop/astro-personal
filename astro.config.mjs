// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import globalStatePlugin from "./src/plugins/globalState.plugin";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [globalStatePlugin()],
  },
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: "Nunito",
        cssVariable: "--font",
        weights: [300, 500, 700],
      },
    ],
  },
});
