
import React, { useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

interface GoogleMapProps {
  center?: { lat: number; lng: number };
  zoom?: number;
  className?: string;
}

const GoogleMap: React.FC<GoogleMapProps> = ({
  center = { lat: 24.5854, lng: 73.7125 }, // Udaipur coordinates
  zoom = 13,
  className = "w-full h-64 rounded-lg"
}) => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY || '',
        version: 'weekly',
      });

      try {
        await loader.load();
        
        if (mapRef.current && window.google) {
          const map = new window.google.maps.Map(mapRef.current, {
            center,
            zoom,
            styles: [
              {
                featureType: 'water',
                elementType: 'all',
                stylers: [{ color: '#10b981' }]
              },
              {
                featureType: 'landscape',
                elementType: 'all',
                stylers: [{ color: '#f3f4f6' }]
              }
            ]
          });

          new window.google.maps.Marker({
            position: center,
            map: map,
            title: 'Event Location'
          });
        }
      } catch (error) {
        console.error('Error loading Google Maps:', error);
      }
    };

    initMap();
  }, [center, zoom]);

  return <div ref={mapRef} className={className} />;
};

export default GoogleMap;
