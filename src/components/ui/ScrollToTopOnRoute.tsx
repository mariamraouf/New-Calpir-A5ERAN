"use client";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export default function ScrollToTopOnRoute() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    // Allow react-helmet-async to update document.title before dispatching GA4 page_view
    const timer = setTimeout(() => {
      if (typeof window.gtag === "function") {
        window.gtag("event", "page_view", {
          page_title: document.title,
          page_location: window.location.href,
          page_path: pathname + search,
        });
      }
    }, 150);

    return () => clearTimeout(timer);
  }, [pathname, search]);

  return null;
}