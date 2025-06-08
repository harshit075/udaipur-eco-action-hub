
import React, { useEffect, useRef } from 'react';

interface GoogleMapProps {
  center?: { lat: number; lng: number };
  zoom?: number;
  className?: string;
  markers?: Array<{
    position: { lat: number; lng: number };
    title: string;
    type: 'tree' | 'cleanup' | 'ewaste';
  }>;
}

const GoogleMap: React.FC<GoogleMapProps> = ({
  center = { lat: 24.5854, lng: 73.7125 }, // Udaipur coordinates
  zoom = 12,
  className = "w-full h-96 rounded-lg",
  markers = []
}) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<google.maps.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current || !window.google) return;

    // Initialize map
    mapInstanceRef.current = new google.maps.Map(mapRef.current, {
      center,
      zoom,
      styles: [
        {
          featureType: "all",
          elementType: "geometry.fill",
          stylers: [{ saturation: -20 }]
        },
        {
          featureType: "water",
          elementType: "geometry",
          stylers: [{ color: "#46bcec" }, { lightness: 10 }]
        }
      ]
    });

    // Add markers
    markers.forEach(marker => {
      const markerIcon = {
        tree: '🌳',
        cleanup: '🧹',
        ewaste: '♻️'
      };

      new google.maps.Marker({
        position: marker.position,
        map: mapInstanceRef.current,
        title: marker.title,
        label: {
          text: markerIcon[marker.type],
          fontSize: '20px'
        }
      });
    });
  }, [center, zoom, markers]);

  return <div ref={mapRef} className={className} />;
};

export default GoogleMap;
