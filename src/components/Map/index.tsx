import React, { useRef, useEffect } from "react";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import SceneView from "@arcgis/core/views/SceneView";


interface MapProps {
  mapType: "2D" | "3D" | string;
  basemap:string;
  layer: any[]
}
// 
const MapComponent: React.FC<MapProps> = ({
  mapType,
  basemap,
  layer,
}: MapProps) => {
  const mapDiv = useRef<HTMLDivElement>(null);

 

  useEffect(() => {
    const map = new Map({
      basemap: basemap,
      layers: layer,
    });

    if (mapDiv.current) {
      if (mapType === "2D") {
        const view = new MapView({
          map,
          container: mapDiv.current,
          center: [-118.244, 34.052],
          zoom: 12,
        });
      } else {
        const view = new SceneView({
          map,
          container: mapDiv.current,
          camera: {
            position: {
              x: -100, // lon
              y: 45, // lat
              z: 10654, // elevation in meters
            },
            tilt: 65,
          },
        });
      }
    }
  }, [mapType]);

  return <div ref={mapDiv} style={{ height: "100vh" }}></div>;
};

export default MapComponent;
