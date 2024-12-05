"use client";

import React, { useEffect, useState, Suspense } from "react";
import { useInView } from "react-intersection-observer";
import LoadingFallback from "../hoc/LoadingFallback";

interface WithLazyLoadOptions {
  fallback?: React.ReactNode;
  threshold?: number;
  triggerOnce?: boolean;
}

export function withLazyLoad<P extends object>(
  Component: React.ComponentType<P>,
  options: WithLazyLoadOptions = {},
) {
  return function WithLazyLoad(props: P) {
    const [loaded, setLoaded] = useState(false);
    const { ref, inView } = useInView({
      threshold: options.threshold ?? 0.1,
      triggerOnce: options.triggerOnce !== false,
    });

    useEffect(() => {
      if (inView) {
        setLoaded(true);
      }
    }, [inView]);

    return (
      <div ref={ref}>
        {loaded ? (
          <Suspense fallback={options.fallback || <LoadingFallback />}>
            <Component {...props} />
          </Suspense>
        ) : (
          options.fallback || <LoadingFallback />
        )}
      </div>
    );
  };
}
