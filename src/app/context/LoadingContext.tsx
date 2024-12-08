"use client";

import React, { createContext, useState, useContext, useCallback } from 'react';

/**
 * Interface defining the shape of the loading context
 */
interface LoadingContextType {
  /** Set of component IDs that have finished loading */
  componentsLoaded: Set<string>;
  /** Function to mark a component as loaded */
  setComponentLoaded: (componentId: string) => void;
  /** Whether all expected components have finished loading */
  allComponentsLoaded: boolean;
}

/** Context for tracking loading state of components */
const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

/**
 * Provider component that manages loading state of child components
 * @param children - Child components to wrap with the loading context
 * @param expectedComponents - Array of component IDs that need to load
 */
export const LoadingProvider: React.FC<{ children: React.ReactNode, expectedComponents: string[] }> = ({ children, expectedComponents }) => {
  // Track which components have finished loading
  const [componentsLoaded, setComponentsLoaded] = useState<Set<string>>(new Set());

  /**
   * Marks a component as loaded by adding its ID to the loaded set
   * @param componentId - ID of the component that finished loading
   */
  const setComponentLoaded = useCallback((componentId: string) => {
    setComponentsLoaded(prev => new Set(prev).add(componentId));
  }, []);

  // Check if all expected components have loaded
  const allComponentsLoaded = expectedComponents.every(id => componentsLoaded.has(id));

  return (
    <LoadingContext.Provider value={{ componentsLoaded, setComponentLoaded, allComponentsLoaded }}>
      {children}
    </LoadingContext.Provider>
  );
};

/**
 * Hook to access the loading context
 * @returns Loading context containing loaded components and helper functions
 * @throws Error if used outside of LoadingProvider
 */
export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
};
