import React, { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

function LocateButton({ setPosition }) {
  const map = useMap();

  const handleClick = () => {
    map.locate().on("locationfound", function (e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    });
  };

 
  return (
    <button
      onClick={handleClick}
      className="absolute z-[1000] bottom-5 right-5 bg-pink-700 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-pink-800 transition-all"
    >
      📍
    </button>
  );
}

const LocationFinderDummy = ({setPosition}) => {
    const map = useMapEvents({
        click(e) {
            setPosition(e.latlng);
            map.flyTo(e.latlng, map.getZoom());
        },
    });
    return null;
};

function MapComponent() {
  const [position, setPosition] = useState(null);
console.log("positon",position)
  return (
    <div className="relative w-screen h-[500px] border">
      <MapContainer
        center={[36.5633, 53.0601]} 
        zoom={16}
        scrollWheelZoom={true}
        zoomControl={true}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <LocationFinderDummy setPosition={setPosition}/>
        <LocateButton setPosition={setPosition} />

        {position&& (
          <Marker position={position}>
            <Popup>📍 موقعیت مکانی شما</Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
}

export default MapComponent;
