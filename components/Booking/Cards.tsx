import CardsList from '@/app/data/CardsList'
import Image from 'next/image'
import React, { useState } from 'react'

function Cards() {
    const [active , setActive] = useState<any>();
  return (
    <div>
        <h2 className='text-green-700 font-bold font-serif m-3 pb-2 text-2xl'>Payments Methods</h2> 
        <div className='grid  md:grid-cols-4 grid-cols-3  p-3'>
            {CardsList.map((item, index)=>(
                <div key={index} className={` sm:w-[70px] p-2 m-2  w-[50px] border-[3px] flex items-center justify-center rounded-md transition-all hover:scale-110   hover:border-green-400    bg-slate-400   ${active == index ? 'border-yellow-400 border-[2px]': null}`}
                onClick={()=> setActive(index)}
                > 
                    <Image src={item.image} width={35} height={25}  alt={item.name}/>

                </div>
            ))}
        </div>
      
    </div>
  )
}

export default Cards
