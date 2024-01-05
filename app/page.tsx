import Image from 'next/image'
import {UserButton} from "@clerk/nextjs"
import Booking from '@/components/Booking/Booking'


export default function Home() {
  return(
    <div>

      <div className='grid grid-cols-1 md:grid-cols-3 h-full bg-gray-400 '>
        <div className='h-full'>

          <Booking/>
        </div>
        <div className='col-span-2 bg-red-200 order-first md:order-last'>Map</div>

      </div>
    </div>
  )
}
