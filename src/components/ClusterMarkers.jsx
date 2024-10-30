import React, { useEffect, useRef } from 'react';
import { Marker, Source, Layer } from 'react-map-gl';
import Supercluster from 'supercluster';

const ClusterMarkers = ({ properties, viewport, setViewport, setSelectedProperty }) => {
  const supercluster = useRef(null);


  const points = properties.map(property => ({
    type: 'Feature',
    properties: { cluster: false, propertyId: property.id },
    geometry: { type: 'Point', coordinates: [property.longitude, property.latitude] }
  }));

  useEffect(() => {
    supercluster.current = new Supercluster({
      radius: 40,  
      maxZoom: 16,
    });
    supercluster.current.load(points);
  }, [points]);

  const clusters = supercluster.current.getClusters(
    [-180, -85, 180, 85], // World bounds
    Math.floor(viewport.zoom)
  );

  return (
    <>
      {clusters.map(cluster => {
        const [longitude, latitude] = cluster.geometry.coordinates;
        const { cluster: isCluster, point_count: pointCount } = cluster.properties;

        if (isCluster) {
          return (
            <Marker
              key={`cluster-${cluster.id}`}
              latitude={latitude}
              longitude={longitude}
            >
              <div
                className="cluster-marker"
                style={{
                  width: `${10 + (pointCount / properties.length) * 20}px`,
                  height: `${10 + (pointCount / properties.length) * 20}px`
                }}
                onClick={() => {
                  const expansionZoom = Math.min(supercluster.current.getClusterExpansionZoom(cluster.id), 20);
                  setViewport({
                    ...viewport,
                    zoom: expansionZoom,
                    longitude,
                    latitude,
                    transitionDuration: 500
                  });
                }}
              >
                {pointCount}
              </div>
            </Marker>
          );
        }

        return (
          <Marker
            key={`property-${cluster.properties.propertyId}`}
            latitude={latitude}
            longitude={longitude}
          >
            <button
              className="marker-btn"
              onClick={() => setSelectedProperty(cluster.properties)}
            >
              <img src="/assets/markers/office-icon.png" alt="Property Marker" />
            </button>
          </Marker>
        );
      })}
    </>
  );
};

export default ClusterMarkers;
