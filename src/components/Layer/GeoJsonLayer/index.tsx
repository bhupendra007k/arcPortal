import React, { useEffect, useState } from "react";
import GeoJSONLayer from "@arcgis/core/layers/GeoJSONLayer";

const index = ({ coordinates, type }: any) => {
  const [point, setpoint] = useState<any[]>([]);
  const [geomType, setGeomType] = useState(null);
  const [layer, setLayer] = useState<GeoJSONLayer>();

  useEffect(() => {
    setpoint(coordinates);
    setGeomType(type);
    const geojson = {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          geometry: {
            type: geomType,
            coordinates: [point],
          },
          properties: {
            prop0: "value0",
          },
        },
      ],
    };

    // create a new blob from geojson featurecollection
    const blob = new Blob([JSON.stringify(geojson)], {
      type: "application/json",
    });

    // URL reference to the blob
    const url = URL.createObjectURL(blob);
    // create new geojson layer using the blob url
    const layer = new GeoJSONLayer({
      url,
    });
    setLayer(layer);
  }, [geomType, point]);

  return layer;
};

export default index;
