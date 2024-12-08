"use client";

import { useEffect } from 'react';
import { useLoading } from '../context/LoadingContext';

export const useComponentLoaded = (componentId: string) => {
  const { setComponentLoaded } = useLoading();

  useEffect(() => {
    setComponentLoaded(componentId);
  }, [componentId, setComponentLoaded]);
};

