import React, { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  ZoomControl,
  useMap,
  useMapEvents,
} from "react-leaflet";
import { MdMyLocation } from "react-icons/md";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

function LocateButton({ setPosition }) {
  const map = useMap();

  const handleClick = () => {
    map.locate().once("locationfound", function (e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    });
  };

  return (
    <button
      onClick={handleClick}
      className="absolute z-[1000] bottom-5 right-5 bg-white text-text-gray rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-gray-100 active:scale-95 transition-all"
    >
      <MdMyLocation size={22} />
    </button>
  );
}

function LocationFinderDummy({ setPosition }) {
  const map = useMapEvents({
    click(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });
  return null;
}

function MapComponent({ position, setPosition }) {
  console.log(position);
  return (
    <div className="relative w-[755px] h-[400px] ">
      <MapContainer
        center={[36.5633, 53.0601]}
        zoom={14}
        scrollWheelZoom={true}
        zoomControl={true}
        style={{ height: "100%", width: "100%", borderRadius: "10px" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <LocationFinderDummy setPosition={setPosition} />
        <LocateButton setPosition={setPosition} />

        {position && (
          <Marker position={position}>
            <Popup>📍 موقعیت مکانی شما</Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
}

export default MapComponent;
