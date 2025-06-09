
declare global {
  interface Window {
    google: typeof google;
  }
}

declare namespace google {
  namespace maps {
    class Map {
      constructor(mapDiv: Element | null, opts?: MapOptions);
    }
    
    class Marker {
      constructor(opts?: MarkerOptions);
    }
    
    interface MapOptions {
      center?: LatLngLiteral;
      zoom?: number;
      styles?: MapTypeStyle[];
    }
    
    interface MarkerOptions {
      position?: LatLngLiteral;
      map?: Map;
      title?: string;
      label?: MarkerLabel;
    }
    
    interface LatLngLiteral {
      lat: number;
      lng: number;
    }
    
    interface MarkerLabel {
      text: string;
      fontSize?: string;
    }
    
    interface MapTypeStyle {
      featureType?: string;
      elementType?: string;
      stylers?: Array<{ [key: string]: any }>;
    }
  }
}

export {};
