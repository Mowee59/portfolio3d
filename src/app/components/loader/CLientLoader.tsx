"use client";

import { useAssetLoader } from "../../hooks/useAssetLoader";

interface ClientLoaderProps {
  children: React.ReactNode;
}

export function ClientLoader({ children }: ClientLoaderProps) {
  const assetsLoaded = useAssetLoader();

  if (!assetsLoaded) {
    return <div>loading</div>;
  }

  return <>{children}</>;
}
