import React from "react";

/**
 * Grid2Skeleton component displays a loading skeleton version of the Grid2 component
 * using Tailwind's animate-pulse effect.
 */
const Grid2Skeleton = () => {
  return (
    <>
      {/* Skeleton for the image */}
      <div className="relative mx-auto">
        <div className="h-fit w-full animate-pulse bg-gray-200 dark:bg-gray-700 sm:h-[276px] sm:w-[276px]" />
      </div>
      
      <div className="space-y-4">
        {/* Skeleton for the headline text */}
        <div className="h-8 w-2/3 animate-pulse rounded-md bg-gray-200 dark:bg-gray-700" />
        
        {/* Skeleton for the subtext - using multiple lines */}
        <div className="space-y-2">
          <div className="h-4 w-full animate-pulse rounded-md bg-gray-200 dark:bg-gray-700" />
          <div className="h-4 w-5/6 animate-pulse rounded-md bg-gray-200 dark:bg-gray-700" />
          <div className="h-4 w-4/6 animate-pulse rounded-md bg-gray-200 dark:bg-gray-700" />
          <div className="h-4 w-3/4 animate-pulse rounded-md bg-gray-200 dark:bg-gray-700" />
        </div>
      </div>
    </>
  );
};

export default Grid2Skeleton; 