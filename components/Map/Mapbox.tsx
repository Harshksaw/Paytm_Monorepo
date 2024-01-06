import React from "react";
import Map from "react-map-gl";


export const Mapbox = () => {
  return (
    <div className="p-5">
        <h2 className="text-[20px] font-semibold ">Map</h2>
        <Map
            // ref={mapRef}
            mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
            initialViewState={{
              longitude: -122.4,
              latitude: 37.8,
              zoom: 14,
            }}
            style={{ width: 600 , height: 400 }}
            mapStyle="mapbox://styles/mapbox/streets-v9"
          >


          </Map>
     
      
    </div>
  );
};
