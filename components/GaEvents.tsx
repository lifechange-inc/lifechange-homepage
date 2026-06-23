"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/gtag";

export function GaEvents() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target instanceof Element ? event.target.closest("[data-ga-event]") : null;
      if (!target) {
        return;
      }
      const eventName = target.getAttribute("data-ga-event");
      if (eventName) {
        trackEvent(eventName, {
          label: target.textContent?.trim().slice(0, 80) || "",
          path: window.location.pathname
        });
      }
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
