import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function Map() {
  const position = [55.50229003878738, 13.48549341620316];

  return (
    <div className="drop-shadow-lg shadow-amber-900/10">
      <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ height: '56vh', width: '100%' }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          Svaneholm 295, 274 91 Skurup <br/> Skåne Län, Sweden
        </Popup>
      </Marker>
    </MapContainer>
    </div>
    
  );
}

export default Map;
