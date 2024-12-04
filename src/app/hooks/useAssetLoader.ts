"use client";

import { useState, useEffect } from "react";

export function useAssetLoader() {
  const [assetsLoaded, setAssetsLoaded] = useState(false);

  useEffect(() => {
    console.log(`useAssetLoader - ${new Date().toLocaleTimeString()}`);
    const handleLoad = () => {
      setAssetsLoaded(true);
      console.log(`handleLoad - ${new Date().toLocaleTimeString()}`);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return assetsLoaded;
}
