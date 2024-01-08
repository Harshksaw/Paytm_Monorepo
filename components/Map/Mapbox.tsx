import { UserLocationContext } from "@/context/UserLocationContext";
import React, { useContext } from "react";
import Map, { Marker } from "react-map-gl";

import 'mapbox-gl/dist/mapbox-gl.css'
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import img1 from "../../public/pin.png"
import { FaMapMarkerAlt } from "react-icons/fa";
export const Mapbox = () => {
  const {userLocation , setUserLocation} = useContext(UserLocationContext)
  useUser();

  return (
    <div className="p-5 h-screen">
        <h2 className="text-[20px] font-semibold ">Map</h2>
        <div className="rounded-lg overflow-hidden">


    {userLocation ?

        <Map

            mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
            initialViewState={{
              longitude: userLocation?.lng,
              latitude: userLocation?.lat,
              zoom: 14,
            }}
            style={{ width:'100%', height: '80vh', borderRadius:10 }}
            mapStyle="mapbox://styles/mapbox/streets-v9">
                  <Marker longitude={userLocation?.lng} latitude={userLocation?.lat} anchor="bottom">
                  <FaMapMarkerAlt className="w-5 h-8 text-blue-600" />
                  </Marker>

          </Map> :null}
            </div>
     
      
    </div>
  );
};
