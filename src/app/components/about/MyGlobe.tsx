"use client";

// import { GlobeMethods } from "react-globe.gl";
// import { useRef } from "react";
import dynamic from "next/dynamic";
const Globe = dynamic(() => import("react-globe.gl"), { ssr: false });

/**
 * MyGlobe component renders an interactive 3D globe using the react-globe.gl library.
 * It initializes the globe with a specific point of view and displays a label for Lille.
 */
const MyGlobe: React.FC = () => {
  // Reference to access globe methods for controlling the globe's point of view
  // const globeMethods = useRef<GlobeMethods | undefined>(undefined);

  return (
    <Globe
      // ref={globeMethods}
      // // Set the initial point of view to focus on Lille, France
      // onGlobeReady={() =>
      //   globeMethods.current?.pointOfView(
      //     { lng: 3.066667, lat: 50.633333, altitude: 2.5 },
      //     500, // Animation duration in milliseconds
      //   )
      // }
      height={326} // Height of the globe component
      width={326} // Width of the globe component
      backgroundColor="rgba(0,0,0,0)" // Transparent background
      showAtmosphere // Display the atmosphere around the globe
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg" // URL for the globe's texture image
      bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png" // URL for the globe's bump map image
      labelsData={[
        {
          lat: 50.633333, // Latitude for the label
          lng: 3.066667, // Longitude for the label
          text: "Lille", // Text to display on the label
          color: "#fff", // Color of the label text
          size: 20, // Size of the label text
          dotRadius: 20, // Radius of the dot representing the label
        },
      ]}
      labelDotRadius={1} // Radius of the label's dot
      labelText="text" // Property name for the label text
    />
  );
};

export default MyGlobe;
