// @ts-check
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://jingtian-hu.github.io",
  trailingSlash: "ignore",
  build: { format: "directory" },
});
