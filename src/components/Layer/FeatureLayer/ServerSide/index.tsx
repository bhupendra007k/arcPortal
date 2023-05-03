import React, { useEffect, useState } from "react";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";

const index= (url: string) => {
  const featureLayer = new FeatureLayer({
    url: url,
  });

  return featureLayer;
};

export default index;
