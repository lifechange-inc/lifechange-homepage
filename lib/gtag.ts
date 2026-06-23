"use client";

export function trackEvent(eventName: string, params?: Record<string, string | number | boolean>) {
  if (typeof window === "undefined") {
    return;
  }

  const gtag = window.gtag;
  if (typeof gtag === "function") {
    gtag("event", eventName, params || {});
  }
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}
