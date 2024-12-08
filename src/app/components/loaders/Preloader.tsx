"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export function Preloader() {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const loaderRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Animate the loader
    tl.to(loaderRef.current, {
      duration: 1.5,
      rotate: 360,
      repeat: -1,
      ease: "linear",
    });

    // Fade in the text
    tl.to(
      textRef.current,
      {
        duration: 0.5,
        opacity: 1,
        y: 0,
        delay: 0.5,
      },
      0,
    );

    // Simulate loading time (you can replace this with your actual loading logic)
    setTimeout(() => {
      gsap.to(preloaderRef.current, {
        duration: 0.5,
        opacity: 0,
        onComplete: () => {
          if (preloaderRef.current) {
            preloaderRef.current.style.display = "none";
          }
          document.body.style.overflow = "unset";
        },
      });
    }, 3000); // 3 seconds for demonstration

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div
      ref={preloaderRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
    >
      <div className="text-center">
        <div
          ref={loaderRef}
          className="mx-auto mb-4 h-16 w-16 rounded-full border-t-4 border-white"
        />
        <h2
          ref={textRef}
          className="translate-y-4 transform text-2xl font-bold text-white opacity-0"
        >
          Chargement
        </h2>
      </div>
    </div>
  );
}

export default Preloader;
