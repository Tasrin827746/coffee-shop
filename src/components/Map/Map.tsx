"use client";

import dynamic from "next/dynamic";
import { FC, useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Load `react-leaflet` dynamically to prevent SSR issues
const MapContainer = dynamic(() => import("react-leaflet").then((mod) => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import("react-leaflet").then((mod) => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import("react-leaflet").then((mod) => mod.Marker), { ssr: false });
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), { ssr: false });

// Define the type for the position (latitude, longitude)
type LatLngTuple = [number, number];
const position: LatLngTuple = [40.7128, -74.006];

// Custom marker icon to fix missing default Leaflet icons in Next.js
const customIcon = L.icon({
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const MapComponent: FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensures it only runs in the browser
  }, []);

  if (!isClient) return <p>Loading map...</p>; // Prevents server-side rendering issues

  return (
    <div className="w-full h-[450px] rounded-lg overflow-hidden shadow-md mt-[70px]">
      <MapContainer center={position} zoom={15} className="h-full w-full">
        {/* OpenStreetMap Tiles */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        
        {/* Marker for Coffee Shop */}
        <Marker position={position} icon={customIcon}>
          <Popup>
            ☕ <b>Bean & Bliss</b> <br />
            Your favorite coffee spot!
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent;
