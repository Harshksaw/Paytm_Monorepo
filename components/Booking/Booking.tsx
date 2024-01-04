import React from 'react'
import AutoCompleteAddress from './AutoCompleteAddress';


export default function Booking() {
    // const heightscreen = Window.innerHeight;



    return (
        <div className='p-5 h-full'>
            <h2 className='text-[20px] font-semibold '>Booking</h2>
            <div className='border-[1px] p-5 rounded-md ' >
                <AutoCompleteAddress/>
            </div>
        </div>
    )
}



