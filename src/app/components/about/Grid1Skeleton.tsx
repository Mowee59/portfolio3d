import React from "react";

/**
 * Grid1Skeleton component displays a loading skeleton version of the Grid1 component
 * using Tailwind's animate-pulse effect.
 */
const Grid1Skeleton = () => {
  return (
    <>
      {/* Skeleton for the image */}
      <div className="h-[276px] w-full animate-pulse bg-gray-200 dark:bg-gray-700" />
      
      <div className="space-y-4">
        {/* Skeleton for the headline text */}
        <div className="h-8 w-3/4 animate-pulse rounded-md bg-gray-200 dark:bg-gray-700" />
        
        {/* Skeleton for the subtext - using multiple lines */}
        <div className="space-y-2">
          <div className="h-4 w-full animate-pulse rounded-md bg-gray-200 dark:bg-gray-700" />
          <div className="h-4 w-5/6 animate-pulse rounded-md bg-gray-200 dark:bg-gray-700" />
          <div className="h-4 w-4/6 animate-pulse rounded-md bg-gray-200 dark:bg-gray-700" />
        </div>
      </div>
    </>
  );
};

export default Grid1Skeleton; 