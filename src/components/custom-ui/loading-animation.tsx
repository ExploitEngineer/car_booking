"use client";

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";

export function LoadingAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const carRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          gsap.to(containerRef.current, {
            opacity: 0,
            duration: 0.8,
            ease: "power3.inOut",
            onComplete: () => setIsAnimating(false),
          });
        },
      });

      tl.fromTo(
        carRef.current,
        { x: -200, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: "power3.out" }
      ).to(carRef.current, {
        x: 50,
        duration: 0.5,
        ease: "power2.inOut",
        repeat: 1,
        yoyo: true,
      });

      tl.fromTo(
        progressRef.current,
        { width: "0%" },
        { width: "100%", duration: 2, ease: "power2.out" },
        "-=1.5"
      );

      tl.fromTo(
        textRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=2"
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  if (!isAnimating) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] bg-white flex items-center justify-center"
    >
      <div className="text-center">
        <div ref={carRef} className="mb-8">
          <svg
            width="240"
            height="60"
            viewBox="0 0 240 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto"
          >
            <path
              d="M20 35h200c4 0 6-2 6-5V20c0-3-2-5-6-5H26c-4 0-6 2-6 5v10c0 3 2 5 6 5z"
              fill="#1f2937"
            />
            <path
              d="M40 20h160c3 0 4-1 4-3v-5c0-2-1-3-4-3H40c-3 0-4 1-4 3v5c0 2 1 3 4 3z"
              fill="#374151"
            />
            <circle cx="45" cy="42" r="8" fill="#1f2937" />
            <circle cx="45" cy="42" r="5" fill="#6b7280" />
            <circle cx="195" cy="42" r="8" fill="#1f2937" />
            <circle cx="195" cy="42" r="5" fill="#6b7280" />
            <rect x="50" y="12" width="20" height="6" rx="1" fill="#e5e7eb" />
            <rect x="75" y="12" width="20" height="6" rx="1" fill="#e5e7eb" />
            <rect x="100" y="12" width="20" height="6" rx="1" fill="#e5e7eb" />
            <rect x="125" y="12" width="20" height="6" rx="1" fill="#e5e7eb" />
            <rect x="150" y="12" width="20" height="6" rx="1" fill="#e5e7eb" />
            <rect x="175" y="12" width="20" height="6" rx="1" fill="#e5e7eb" />
          </svg>
        </div>

        <div ref={textRef} className="mb-6">
          <h2 className="text-2xl font-light text-neutral-900 tracking-wider mb-2">
            TEXAS LIMO
          </h2>
          <p className="text-sm font-light text-neutral-600 uppercase tracking-widest">
            Loading Experience
          </p>
        </div>

        <div className="w-64 h-px bg-neutral-200 mx-auto overflow-hidden">
          <div ref={progressRef} className="h-full bg-neutral-900" />
        </div>
      </div>
    </div>
  );
}
