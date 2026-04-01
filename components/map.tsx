"use client";

import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icons in React-Leaflet
const iconRetinaUrl = 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png';
const iconUrl = 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png';
const shadowUrl = 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png';

export default function Map() {
  useEffect(() => {
    delete (L.Icon.Default.prototype as any)._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl,
      iconUrl,
      shadowUrl,
    });
  }, []);

  const locations = [
    { name: "Lakewood", coords: [39.7047, -105.0814] as [number, number] },
    { name: "Denver", coords: [39.7392, -104.9903] as [number, number] },
    { name: "Golden", coords: [39.7555, -105.2211] as [number, number] },
    { name: "Wheat Ridge", coords: [39.7661, -105.0772] as [number, number] },
    { name: "Arvada", coords: [39.8028, -105.0875] as [number, number] },
    { name: "Edgewater", coords: [39.7530, -105.0633] as [number, number] },
  ];

  // Center around Lakewood
  const center: [number, number] = [39.75, -105.08];

  return (
    <div className="h-[400px] w-full rounded-2xl overflow-hidden border border-zinc-200 shadow-xl relative z-20">
      <MapContainer center={center} zoom={11} scrollWheelZoom={false} className="h-full w-full z-10">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        />
        {/* Service Area Highlight */}
        <Circle 
          center={center} 
          pathOptions={{ fillColor: '#f97316', color: '#ea580c', fillOpacity: 0.15, weight: 2 }} 
          radius={12000} 
        />
        {locations.map((loc, idx) => (
          <Marker key={idx} position={loc.coords}>
            <Popup>
              <div className="font-bold text-zinc-900">{loc.name}</div>
              <div className="text-sm text-zinc-600">Service Area</div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
