"use client"
import Image from 'next/image'
import {UserButton} from "@clerk/nextjs"
import Booking from '@/components/Booking/Booking'
import { Mapbox } from '@/components/Map/Mapbox'
import { useEffect, useState } from 'react'
import { UserLocationContext } from '@/context/UserLocationContext'



export default function Home() {


  const [ userLocation , setuserLocation] = useState<any>();

  useEffect(()=>{
    getUserLocation();
  })

  const getUserLocation = ()=>{
    navigator.geolocation.getCurrentPosition(function(pos){
      setuserLocation({
        lat:pos.coords.latitude,
        lng:pos.coords.longitude
      })

    })
  }
  return(
    <div className='max-h-[90vh] overflow-y-auto'>

      <UserLocationContext.Provider value={{userLocation, setuserLocation}}>


   
       <div className='grid grid-cols-1 md:grid-cols-3'>
        <div className=''>
          <Booking/>
        </div>
        <div className='col-span-2'>
          <Mapbox/>
        </div>
        </div>
      </UserLocationContext.Provider>
    </div>
  )
}
