import { useEffect, useRef, useState } from "react";

function useScrollReveal() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window !== "undefined") {
      const prefersReduced = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
      const noObserver = typeof IntersectionObserver === "undefined";
      if (prefersReduced || noObserver) {
        return true;
      }
    }
    return false;
  });

  useEffect(() => {
    if (isVisible) {
      return undefined;
    }

    const element = ref.current;
    if (!element) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(element);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [isVisible]);

  return [ref, isVisible];
}

export default useScrollReveal;
