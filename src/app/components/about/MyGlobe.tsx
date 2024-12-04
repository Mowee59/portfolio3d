"use client";

import { GlobeMethods } from "react-globe.gl";
import { useRef } from "react";
import Globe from "react-globe.gl";
const MyGlobe: React.FC = () => {
  const globeMethods = useRef<GlobeMethods | undefined>(undefined);

  return (
    <Globe
      ref={globeMethods}
      onGlobeReady={() =>
        globeMethods.current?.pointOfView(
          { lng: 3.066667, lat: 50.633333, altitude: 2.5 },
          500,
        )
      }
      height={326}
      width={326}
      backgroundColor="rgba(0,0,0,0)"
      showAtmosphere
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
      bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
      labelsData={[
        {
          lat: 50.633333,
          lng: 3.066667,
          text: "Lille",
          color: "#fff",
          size: 20,
          dotRadius: 20,
        },
      ]}
      labelDotRadius={1}
      labelText="text"
    />
  );
};

export default MyGlobe;
