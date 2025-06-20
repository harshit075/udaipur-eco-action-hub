
import React, { useEffect, useRef, useState } from 'react';
import { Input } from '@/components/ui/input';
import { MapPin } from 'lucide-react';

interface LocationPickerProps {
  onLocationSelect?: (location: { lat: number; lng: number; address: string }) => void;
  placeholder?: string;
  className?: string;
}

const LocationPicker: React.FC<LocationPickerProps> = ({
  onLocationSelect,
  placeholder = "Search for a location...",
  className = ""
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [selectedLocation, setSelectedLocation] = useState<string>('');

  useEffect(() => {
    if (!window.google?.maps?.places || !inputRef.current) return;

    const autocomplete = new window.google.maps.places.Autocomplete(inputRef.current, {
      types: ['geocode'],
      componentRestrictions: { country: 'IN' } // Restrict to India
    });

    const handlePlaceChanged = () => {
      const place = autocomplete.getPlace();
      
      if (place.geometry && place.geometry.location) {
        const location = {
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
          address: place.formatted_address || place.name || ''
        };
        
        setSelectedLocation(location.address);
        onLocationSelect?.(location);
      }
    };

    autocomplete.addListener('place_changed', handlePlaceChanged);

    return () => {
      if (window.google?.maps?.event) {
        window.google.maps.event.clearListeners(autocomplete, 'place_changed');
      }
    };
  }, [onLocationSelect]);

  return (
    <div className={`relative ${className}`}>
      <div className="relative">
        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        <Input
          ref={inputRef}
          placeholder={placeholder}
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
          className="pl-10"
        />
      </div>
    </div>
  );
};

export default LocationPicker;
