
declare global {
  interface Window {
    google: typeof google;
  }
}

declare namespace google {
  namespace maps {
    class Map {
      constructor(mapDiv: HTMLElement, opts?: MapOptions);
    }
    
    class Marker {
      constructor(opts?: MarkerOptions);
    }
    
    interface MapOptions {
      center?: LatLng | LatLngLiteral;
      zoom?: number;
      styles?: MapTypeStyle[];
    }
    
    interface MarkerOptions {
      position?: LatLng | LatLngLiteral;
      map?: Map;
      title?: string;
      label?: string | MarkerLabel;
    }
    
    interface MarkerLabel {
      text: string;
      fontSize?: string;
    }
    
    interface LatLng {
      lat(): number;
      lng(): number;
    }
    
    interface LatLngLiteral {
      lat: number;
      lng: number;
    }
    
    interface MapTypeStyle {
      featureType?: string;
      elementType?: string;
      stylers?: MapTypeStyler[];
    }
    
    interface MapTypeStyler {
      color?: string;
      lightness?: number;
      saturation?: number;
    }
  }
}

export {};
