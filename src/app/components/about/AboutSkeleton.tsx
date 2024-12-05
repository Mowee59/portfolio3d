import React from "react";
import Bounded from "../hoc/Bounded";
import Grid1Skeleton from "./Grid1Skeleton";
import Grid2Skeleton from "./Grid2Skeleton";
import Grid3Skeleton from "./Grid3Skeleton";

/**
 * AboutSkeleton component that displays loading state for the About section
 * using skeleton versions of all grid components.
 */
const AboutSkeleton = () => {
  return (
    <Bounded className="my-20">
      {/* Skeleton for the heading */}
      <div className="mb-12 h-12 w-64 animate-pulse rounded-md bg-gray-200 dark:bg-gray-700" />

      <div className="grid h-full grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 xl:grid-rows-6">
        {/* Grid section 1 skeleton */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <Grid1Skeleton />
          </div>
        </div>

        {/* Grid section 2 skeleton */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <Grid2Skeleton />
          </div>
        </div>

        {/* Globe and contact button skeleton */}
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container space-y-4">
            {/* Globe skeleton */}
            <div className="mx-auto h-[300px] w-[300px] animate-pulse rounded-full bg-gray-200 dark:bg-gray-700" />
            
            <div className="space-y-4">
              {/* Heading skeleton */}
              <div className="h-8 w-4/5 animate-pulse rounded-md bg-gray-200 dark:bg-gray-700" />
              
              {/* Subtext skeleton */}
              <div className="h-4 w-3/4 animate-pulse rounded-md bg-gray-200 dark:bg-gray-700" />
              
              {/* Button skeleton */}
              <div className="mt-10 h-12 w-full animate-pulse rounded-full bg-gray-200 dark:bg-gray-700" />
            </div>
          </div>
        </div>

        {/* Grid section 3 skeleton */}
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <Grid3Skeleton />
          </div>
        </div>

        {/* Contact section skeleton */}
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container space-y-4">
            {/* Contact heading skeleton */}
            <div className="h-8 w-3/4 animate-pulse rounded-md bg-gray-200 dark:bg-gray-700" />
            
            {/* Contact info skeletons */}
            <div className="space-y-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center space-x-3">
                  <div className="h-8 w-8 animate-pulse rounded-full bg-gray-200 dark:bg-gray-700" />
                  <div className="h-4 w-2/3 animate-pulse rounded-md bg-gray-200 dark:bg-gray-700" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Bounded>
  );
};

export default AboutSkeleton; 