import React from 'react'
import AutoCompleteAddress from './AutoCompleteAddress';


export default function Booking() {




    return (
        <div className='p-5  h-[40vh] md:h-[80vh] bg-gray-600 sm:mt-96 md:mt-0 '>
            <h2 className='text-[20px] font-semibold '>Booking</h2>
            <div className='border-[1px] p-5 rounded-md  bg-gray-700' >
                <AutoCompleteAddress/>
            </div>
        </div>
    )
}



