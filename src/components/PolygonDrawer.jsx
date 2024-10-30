import React, { useEffect } from 'react';
import MapboxDraw from '@mapbox/mapbox-gl-draw';

const PolygonDrawer = ({ mapRef }) => {
  useEffect(() => {
    const map = mapRef.current.getMap();
    const draw = new MapboxDraw({
      displayControlsDefault: false,
      controls: {
        polygon: true,
        trash: true,
      },
    });
    map.addControl(draw);

    map.on('draw.create', (event) => {
      const polygon = event.features[0];
      console.log('Polygon drawn:', polygon);
    });
  }, [mapRef]);

  return null;
};

export default PolygonDrawer;
