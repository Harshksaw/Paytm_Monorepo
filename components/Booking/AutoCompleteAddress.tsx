"use client";

import { it } from "node:test";
import { useEffect, useState } from "react";

const AutoCompleteAddress = () => {
  const [addressList, setAddressList] = useState<any>([]);
  const [destination, setDestination] = useState<any>();

  const [source, setSource] = useState<any>();
  const [sourceChange, setSourceChange] = useState<any>(false);
  const [destinationChange, setDestinationChange] = useState<any>(false);

  console.log(addressList?.data?.suggestions);

  const getAddresses = async () => {
    const res = await fetch("/api/search-address?q=" + source, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await res.json();
    setAddressList(result);
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (source) {
        getAddresses();
      }
    }, 1500);

    return () => clearTimeout(delayDebounceFn);
  }, [source, destination]);


  const onSourceAddressClick = async (item: any) => {
    setSource(item.full_address || item.place_formatted);
    setAddressList([]);
    setSourceChange(true);
   

  };


  const onDestinationAddressClick = async (item: any) => {
    setDestination(item.full_address || item.place_formatted);
    setAddressList([]);
    setDestinationChange(true);
   
  }


  return (
    <div className="mt-5 h-[20vh]  md:h-[60vh] flex flex-col  md:justify-evenly    ">
      <div className="py-5 relative">
        <label htmlFor="WhereFrom" className="text-gray-400">
          Where From
        </label>
        <input
          type="text"
          title="Where From"
          className="bg-blue-400 p-1 border-[1px] w-full  rounded-md outline-none focus:bg-yellow-300"
          onChange={(e) => 
            {

              setSource(e.target.value);
              setSourceChange(true)
            }

          }
          value={source}
        />

        {addressList?.data?.suggestions || sourceChange ? (
          <div className="shadow-md p-1 rounded-md absolute w-full bg-white">
            {addressList?.data?.suggestions.map((item: any, index: number) => (
              console.log(item),
              <h2
                key={item.mapbox_id}
                className="p-3 bg-gray-300 hover:bg-gray-500 text-yellow-300 font-semibold cursor-pointer"
                onClick={() => {
                  onSourceAddressClick(item);
                }}
              >
                {item.full_address || item.place_formatted}
              </h2>
            ))}
          </div>
        ) : null}
      </div>

      <div className="py-5">
        <label htmlFor="Where To?" className="text-gray-400">
          Where To{" "}
        </label>
        <input
          type="text"
          title="Where To?"
          className="bg-blue-300 p-1 border-[1px] w-full  rounded-md outline-none focus:bg-yellow-300"
          value={destination}
          onChange={(e) => {
            setDestination(e.target.value);
            setDestinationChange(true);
          }}
        />
         {addressList?.data?.suggestions && destinationChange ? (
          <div
            className="shadow-md p-1 rounded-md
            absolute w-full bg-white"
          >
            {addressList?.data?.suggestions.map((item: any, index: number) => (
              <h2
                key={item.mapbox_id}
                className="p-3 bg-gray-300 hover:bg-gray-500 text-yellow-300 font-semibold cursor-pointer"
                onClick={() => {
                  onDestinationAddressClick(item);
                }}
              >
                {item.full_address || item.place_formatted}
              </h2>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default AutoCompleteAddress;
