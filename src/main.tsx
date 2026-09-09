import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";
import "./globals.css";

// scripts/prerender.mjs writes the SEO head tags into the static HTML so that
// crawlers see them without running JavaScript. react-helmet-async renders its
// own copies on mount, so drop the prerendered ones first to avoid duplicate
// canonical and description tags in the DOM.
document
  .querySelectorAll('head [data-prerendered]')
  .forEach((el) => el.remove());

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);