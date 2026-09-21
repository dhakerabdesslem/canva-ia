import { useEffect, useRef, useCallback } from "react";

/**
 * Hook that applies scroll-reveal animations using IntersectionObserver.
 * Uses a MutationObserver to automatically pick up new `.reveal-on-scroll`
 * elements added to the DOM — safer than a raw querySelectorAll snapshot.
 *
 * Supports staggered animations: children of `.reveal-on-scroll` containers
 * that have `data-stagger` attribute will animate with incremental delay.
 */
export function useScrollReveal() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  const observeElement = useCallback((el: Element) => {
    if (observerRef.current && !el.classList.contains("is-visible")) {
      observerRef.current.observe(el);
    }
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const stagger = el.getAttribute("data-stagger-delay");
            if (stagger) {
              el.style.transitionDelay = stagger;
            }
            el.classList.add("is-visible");
            io.unobserve(el);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    observerRef.current = io;

    // Observe all existing elements
    const elements = document.querySelectorAll(".reveal-on-scroll");
    elements.forEach((el) => observeElement(el));

    // Watch for dynamically added elements
    const mo = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof HTMLElement) {
            if (node.classList.contains("reveal-on-scroll")) {
              observeElement(node);
            }
            node.querySelectorAll(".reveal-on-scroll").forEach(observeElement);
          }
        });
      });
    });

    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, [observeElement]);
}
