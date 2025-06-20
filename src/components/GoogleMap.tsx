
import React, { useEffect, useRef, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, AlertCircle } from 'lucide-react';

interface GoogleMapProps {
  center?: { lat: number; lng: number };
  zoom?: number;
  className?: string;
  apiKey?: string;
}

const GoogleMap: React.FC<GoogleMapProps> = ({
  center = { lat: 24.5854, lng: 73.7125 }, // Udaipur coordinates
  zoom = 13,
  className = "w-full h-64 rounded-lg",
  apiKey
}) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [userApiKey, setUserApiKey] = useState(
    apiKey || localStorage.getItem('google-maps-api-key') || ''
  );
  const [mapLoaded, setMapLoaded] = useState(false);
  const [error, setError] = useState<string>('');

  const initMap = async (key: string) => {
    if (!key) {
      setError('Please enter your Google Maps API key');
      return;
    }

    const loader = new Loader({
      apiKey: key,
      version: 'weekly',
      libraries: ['places']
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
          title: 'Event Location',
          icon: {
            path: window.google.maps.SymbolPath.CIRCLE,
            scale: 8,
            fillColor: '#10b981',
            fillOpacity: 1,
            strokeColor: '#ffffff',
            strokeWeight: 2
          }
        });

        setMapLoaded(true);
        setError('');
        localStorage.setItem('google-maps-api-key', key);
      }
    } catch (error) {
      console.error('Error loading Google Maps:', error);
      setError('Failed to load Google Maps. Please check your API key.');
    }
  };

  const handleApiKeySubmit = () => {
    initMap(userApiKey);
  };

  useEffect(() => {
    if (userApiKey) {
      initMap(userApiKey);
    }
  }, [center, zoom]);

  if (!mapLoaded && !userApiKey) {
    return (
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            Google Maps Setup
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            To display the map, please enter your Google Maps API key. You can get one from the{' '}
            <a 
              href="https://console.cloud.google.com/google/maps-apis" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Google Cloud Console
            </a>
          </p>
          <div className="flex gap-2">
            <Input
              type="password"
              placeholder="Enter Google Maps API Key"
              value={userApiKey}
              onChange={(e) => setUserApiKey(e.target.value)}
            />
            <Button onClick={handleApiKeySubmit}>
              Load Map
            </Button>
          </div>
          {error && (
            <div className="flex items-center gap-2 text-red-600 text-sm">
              <AlertCircle className="w-4 h-4" />
              {error}
            </div>
          )}
        </CardContent>
      </Card>
    );
  }

  if (error && !mapLoaded) {
    return (
      <Card className="w-full">
        <CardContent className="p-6">
          <div className="flex items-center gap-2 text-red-600">
            <AlertCircle className="w-5 h-5" />
            <span>{error}</span>
          </div>
          <Button 
            onClick={() => setUserApiKey('')} 
            variant="outline" 
            className="mt-4"
          >
            Try Again
          </Button>
        </CardContent>
      </Card>
    );
  }

  return <div ref={mapRef} className={className} />;
};

export default GoogleMap;
