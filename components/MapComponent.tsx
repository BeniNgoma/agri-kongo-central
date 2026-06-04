"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const createIcon = (color: string) =>
  L.divIcon({
    className: "",
    html: `<div style="width:14px;height:14px;border-radius:50%;background:${color};border:2px solid white;box-shadow:0 2px 6px rgba(0,0,0,0.4)"></div>`,
    iconSize: [14, 14],
    iconAnchor: [7, 7],
  });

export default function MapComponent() {
  return (
    <MapContainer
      center={[-5.29, 14.73]}
      zoom={11}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[-5.28, 14.72]} icon={createIcon("#3a9e68")}>
        <Popup>
          <strong>Banzangongo</strong>
          <br />
          Zone de production principale (maïs &amp; soja)
        </Popup>
      </Marker>
      <Marker position={[-5.30, 14.65]} icon={createIcon("#c9a84c")}>
        <Popup>
          <strong>Boko</strong>
          <br />
          Axe de commercialisation et desserte agricole
        </Popup>
      </Marker>
      <Marker position={[-5.25, 14.8667]} icon={createIcon("#ffffff")}>
        <Popup>
          <strong>Mbanza-Ngungu</strong>
          <br />
          Chef-lieu du territoire, siège administratif
        </Popup>
      </Marker>
    </MapContainer>
  );
}
