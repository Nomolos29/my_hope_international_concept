"use client";
import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    // Mark body so CSS can apply the hidden state
    document.body.classList.add("js-ready");

    const sel = ".reveal, .reveal-left, .reveal-right";

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("revealed");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.07, rootMargin: "0px 0px -32px 0px" }
    );

    const attach = () => {
      document.querySelectorAll<Element>(sel).forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight && r.bottom > 0) {
          // Already visible — reveal immediately, no animation needed
          el.classList.add("revealed");
        } else {
          obs.observe(el);
        }
      });
    };

    // Run immediately after paint
    requestAnimationFrame(() => {
      requestAnimationFrame(attach);
    });

    return () => {
      obs.disconnect();
      document.body.classList.remove("js-ready");
    };
  }, []);

  return null;
}
