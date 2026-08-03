'use client';

import React, { useState } from 'react';
import Map, { Marker, Popup } from 'react-map-gl/mapbox';
import 'mapbox-gl/dist/mapbox-gl.css';

interface AreaLocation {
  name: string;
  desc: string;
  latitude: number;
  longitude: number;
}

const areaLocations: AreaLocation[] = [
  { name: 'Franklin', desc: 'Historic charm, top schools, vibrant downtown', latitude: 35.7917, longitude: -86.8575 },
  { name: 'Brentwood', desc: 'Premium neighborhoods, excellent schools, convenient location', latitude: 35.9984, longitude: -86.7891 },
  { name: 'Nolensville', desc: 'Growing family favorite with strong value and new construction', latitude: 35.9595, longitude: -86.6689 },
  { name: 'Spring Hill', desc: 'Family-oriented, good schools, more affordable entry', latitude: 35.7512, longitude: -86.9240 },
  { name: 'Murfreesboro', desc: 'Strong growth, great downtown, solid appreciation', latitude: 35.8456, longitude: -86.3903 },
  { name: 'College Grove & Beyond', desc: 'Rural charm with easy access to everything', latitude: 35.7817, longitude: -86.6750 },
  { name: 'Mt. Juliet', desc: 'Fast-growing community with strong schools, convenient Nashville access, and expanding amenities.', latitude: 36.2002, longitude: -86.5189 },
  { name: 'Smyrna', desc: 'Affordable family living with solid schools, local parks, and easy access to major employers.', latitude: 35.9829, longitude: -86.5217 },
  { name: 'Lebanon', desc: 'Historic downtown charm combined with steady growth and a welcoming small-town feel.', latitude: 36.2088, longitude: -86.2911 },
  { name: 'La Vergne', desc: 'Convenient location with good value, growing neighborhoods, and quick access to Nashville and Murfreesboro.', latitude: 35.9915, longitude: -86.5811 },
  { name: 'Gallatin', desc: 'Lakeside living, strong community spirit, and continued residential and commercial growth.', latitude: 36.3812, longitude: -86.4461 },
  { name: 'Hendersonville', desc: 'Popular family destination known for excellent schools, Old Hickory Lake, and established neighborhoods.', latitude: 36.1742, longitude: -86.6191 },
  { name: 'Antioch', desc: 'Diverse, well-located community offering strong value and easy access to downtown Nashville.', latitude: 36.0658, longitude: -86.6911 },
  { name: 'Shelbyville', desc: 'Classic small-town atmosphere with deep roots, local character, and improving housing options.', latitude: 35.1557, longitude: -86.4566 },
  { name: 'Eagleville', desc: 'Quiet rural setting with space to spread out while remaining close to Murfreesboro amenities.', latitude: 35.7412, longitude: -86.6519 },
  { name: 'Christiana', desc: 'Peaceful countryside living with larger lots and a relaxed pace just outside Murfreesboro.', latitude: 35.6276, longitude: -86.4089 },
];

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN || '';

export default function ServiceAreaMap() {
  const [selectedArea, setSelectedArea] = useState<AreaLocation | null>(null);

  if (!MAPBOX_TOKEN) {
    return (
      <div className="rounded-2xl border border-[#C5A46E]/30 bg-[#0F1C2E] p-12 text-center">
        <div className="text-[#C5A46E] text-sm tracking-[2px] uppercase mb-3">Map Unavailable</div>
        <p className="text-white/60 max-w-md mx-auto">
          The interactive service area map is temporarily unavailable. Please explore the area cards above or contact us directly for neighborhood details.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-white">
      <Map
        initialViewState={{
          longitude: -86.6,
          latitude: 35.85,
          zoom: 9.2,
        }}
        mapboxAccessToken={MAPBOX_TOKEN}
        mapStyle="mapbox://styles/mapbox/light-v11"
        style={{ width: '100%', height: 'min(520px, 60vh)', minHeight: 350 }}
        cooperativeGestures
        touchPitch
        dragPan
        scrollZoom
        touchZoomRotate
      >
        {areaLocations.map((area) => (
          <Marker
            key={area.name}
            longitude={area.longitude}
            latitude={area.latitude}
            anchor="bottom"
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedArea(area);
              }}
              className="flex items-center justify-center w-7 h-7 rounded-full bg-[#C5A46E] border-2 border-white shadow-lg hover:scale-125 hover:bg-[#D4B580] transition-all duration-200 cursor-pointer"
              aria-label={area.name}
            >
              <span className="w-2 h-2 rounded-full bg-[#0F1C2E]" />
            </button>
          </Marker>
        ))}

        {selectedArea && (
          <Popup
            longitude={selectedArea.longitude}
            latitude={selectedArea.latitude}
            anchor="top"
            offset={12}
            onClose={() => setSelectedArea(null)}
            closeButton={true}
            className="service-area-popup"
          >
            <div className="px-1 py-0.5">
              <div className="font-semibold text-[#0F1C2E] text-base mb-1">{selectedArea.name}</div>
              <p className="text-[#4A5568] text-sm leading-relaxed max-w-[220px]">{selectedArea.desc}</p>
            </div>
          </Popup>
        )}
      </Map>
    </div>
  );
}
