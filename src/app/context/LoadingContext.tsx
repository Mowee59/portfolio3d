"use client";

import React, { createContext, useState, useContext, useCallback } from 'react';

interface LoadingContextType {
  componentsLoaded: Set<string>;
  setComponentLoaded: (componentId: string) => void;
  allComponentsLoaded: boolean;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const LoadingProvider: React.FC<{ children: React.ReactNode, expectedComponents: string[] }> = ({ children, expectedComponents }) => {
  const [componentsLoaded, setComponentsLoaded] = useState<Set<string>>(new Set());

  const setComponentLoaded = useCallback((componentId: string) => {
    setComponentsLoaded(prev => new Set(prev).add(componentId));
  }, []);

  const allComponentsLoaded = expectedComponents.every(id => componentsLoaded.has(id));

  return (
    <LoadingContext.Provider value={{ componentsLoaded, setComponentLoaded, allComponentsLoaded }}>
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
};
