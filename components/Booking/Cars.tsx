
import CarList from '@/app/data/CarsList'
import Image from 'next/image'
import React, { useState } from 'react'

type Props = {}

const Cars = () => {

    const [selected, setSelected] = useState<any>();

  return (
    <div className='mt-3'>
        <h2 className='font-semibold'>
            <div className='grid grid-cols-2 md:grid-col-2 lg:grid-cols-3 p-2'>

            {CarList.map((item , index)=>(
                <div key={index} className={`w-[90%]   m-2 p-2 border-[3px] rounded-md  hover:border-green-400 cursor-pointer bg-gray-600 ${index == selected ? 'border-yellow-400 border[2px]' : null}`}
                onClick={()=>setSelected(index)}>
                    <Image src={item.image} alt={item.name} width={75} height={90} className='w-full mx-1'/>
                    <h2>{item.name}</h2>
                    <span className='float-right font-medium '>${item.charges}</span>
                </div>
            ))}
            </div>
        </h2>
    </div>
  )
}
export default Cars