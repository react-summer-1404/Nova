import React, { useState, useEffect } from "react";
import mapPic from "../../../../../../assets/images/map.jpg";
import { LuMapPin } from "react-icons/lu";
import ModalSection from "../../../../../ui/Modal/ModalSection";
import useToggle from "../../../../../../hooks/useToggle";
import MapComponent from "../../../../../ui/Map/MapComponent";
import { FaCheck } from "react-icons/fa";

const MapContainer = ({ setFieldValue, values, currentProf }) => {
  const [isModalOpen, toggleModal] = useToggle(false);
  const [position, setPosition] = useState({
    lat: values.Latitude || currentProf?.latitude || null,
    lng: values.Longitude || currentProf?.longitude || null,
  });
  useEffect(() => {
    if (position?.lat && position?.lng) {
      setFieldValue("Latitude", position.lat);
      setFieldValue("Longitude", position.lng);
    }
  }, [position, setFieldValue]);

  return (
    <div className=" relative overflow-hidden  rounded-full w-[150px] h-[150px] ">
      <img src={mapPic} className="w-full h-full" />
      <ModalSection
        isOpen={isModalOpen}
        onClose={toggleModal}
        onOpen={toggleModal}
        Icon={<LuMapPin size={27} className="text-white" />}
        size={"4xl"}
        StyleModal={
          "h-[30px] w-full bg-[#0E0E0E66] absolute bottom-0 flex justify-center items-center cursor-pointer"
        }
        content={
          <div className="w-full flex flex-col gap-5">
            <div className="w-full flex-center p-5 relative">
              <MapComponent position={position} setPosition={setPosition} />
              <button
                className="w-[50px] h-[50px] bg-dark-purple absolute bottom-1 z-999 rounded-full flex-center cursor-pointer"
                onClick={toggleModal}
              >
                <FaCheck size={25} className="text-white" />
              </button>
            </div>
            <div className="flex flex-col gap-2 px-10">
              <div className="flex gap-3 items-center">
                <span className="text-base text-dark-purple">
                  طول جغرافیایی:
                </span>
                <span className="text-sm text-text-gray">{position?.lng}</span>
              </div>
              <div className="flex gap-3 items-center">
                <span className="text-base text-dark-purple">
                  عرض جغرافیایی:
                </span>
                <span className="text-sm text-text-gray">{position?.lat}</span>
              </div>
            </div>
          </div>
        }
      />
    </div>
  );
};

export default MapContainer;
