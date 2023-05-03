import React, { useRef, useEffect, useState } from "react";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import SceneView from "@arcgis/core/views/SceneView";
import Point from "@arcgis/core/geometry/Point.js";

interface IMapProps {
  mapType: "2D" | "3D" | string;
  basemap: string;
  layer: any[];
  handleStop?:any
}

const MapComponent: React.FC<IMapProps> = ({
  mapType,
  basemap,
  layer,handleStop
}: IMapProps) => {
  let view;
  const mapDiv = useRef<HTMLDivElement>(null);

  const [point,setPoint]=useState<any>(2)

  useEffect(() => {
    const map = new Map({
      basemap: basemap,
      layers: layer,
    });

    if (mapDiv.current) {
      if (mapType === "2D") {
        view = new MapView({
          map,
          container: mapDiv.current,
          center: [-118.244, 34.052],
          zoom: 12,
        });
      } else {
        view = new SceneView({
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
      view.on("click", (e) => {
        
        // var x=JSON.stringify(e.mapPoint)
        // var y=JSON.parse(x)
        handleStop(e.mapPoint)
        // handleStop(point)
      });
    }
  }, [mapType]);

  return <div ref={mapDiv} style={{ height: "100vh" }}></div>;
};

export default MapComponent;
