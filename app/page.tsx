"use client"
import Image from 'next/image'
import {UserButton} from "@clerk/nextjs"
import Booking from '@/components/Booking/Booking'
import { Mapbox } from '@/components/Map/Mapbox'


export default function Home() {
  return(
    <div className=''>

   
       <div className='grid grid-cols-1 
     md:grid-cols-3'>
        <div className=''>
          <Booking/>
        </div>
        <div className='col-span-2
        '>
          <Mapbox/>
        </div>
        </div>
    </div>
  )
}
