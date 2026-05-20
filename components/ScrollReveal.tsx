"use client";
import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const sel = ".reveal, .reveal-left, .reveal-right";
    const els = Array.from(document.querySelectorAll<Element>(sel));

    els.forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) {
        // In viewport — reveal immediately with no animation
        (el as HTMLElement).style.transition = "none";
        el.classList.add("revealed");
        // Re-enable transition after a frame so future changes animate
        requestAnimationFrame(() => {
          (el as HTMLElement).style.transition = "";
        });
      } else {
        // Off-screen — hide it first (before transition kicks in)
        (el as HTMLElement).style.transition = "none";
        el.classList.add("will-animate");
        // Then enable transition so the reveal animates
        requestAnimationFrame(() => {
          (el as HTMLElement).style.transition = "";
        });
      }
    });

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("revealed");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.07, rootMargin: "0px 0px -24px 0px" }
    );

    els.forEach((el) => {
      if (el.classList.contains("will-animate")) obs.observe(el);
    });

    return () => obs.disconnect();
  }, []);

  return null;
}
