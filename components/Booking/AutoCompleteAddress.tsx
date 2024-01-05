"use client";

import { useEffect, useState } from "react";


const AutoCompleteAddress = () => {
  const [source, setSource] = useState<any>();
  const [addressList, setAddressList] = useState<any>([]);
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
      getAddresses();
    }, 1500);

    return () => clearTimeout(delayDebounceFn);
  }, [source]);

  return (
    <div className="mt-5 h-[60vh] flex flex-col justify-center  ">
      <div className="py-5 relative">
        <label htmlFor="WhereFrom" className="text-gray-400">
          Where From
        </label>
        <input
          type="text"
          title="Where From"
          className="bg-white p-1 border-[1px] w-full  rounded-md outline-none focus:bg-yellow-300"
          onChange={(e) => setSource(e.target.value)}
          value={source}
        />

        {addressList?.data?.suggestions ? (
          <div className="shadow-md p-1 rounded-md w-full bg-white"
          >
            {addressList?.data?.suggestions?.map((address: any, index: number) => (
              <h2 key={index} className="p-3 hover:bg-gray-500 cursor-pointer" onClick={()=> {setSource(address.full_address); setAddressList([]) }}>{address.full_address}</h2>
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
          className="bg-white p-1 border-[1px] w-full  rounded-md outline-none focus:bg-yellow-300"
        />
      </div>
    </div>
  );
};

export default AutoCompleteAddress;
