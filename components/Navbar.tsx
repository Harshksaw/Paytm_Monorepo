import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

function Navbar() {
  return (
    <div className='flex justify-between p-3 px-10 border-b-[3px] shadow-md'>
        <div className='flex gap-10 justify-between'>

            <Image src="" alt="" width={120} height={60}/>

            <div className='hidden md:flex gap-6'>
                <h2 className='hover:bg-gray-100 p-2 rounded-md cursor-pointer transition-all'>Home</h2>
                <h2 className='hover:bg-gray-100 p-2 rounded-md cursor-pointer transition-all'>H</h2>
                <h2 className='hover:bg-gray-100 p-2 rounded-md cursor-pointer transition-all'>Help</h2>


            </div>
        </div>

        <UserButton afterSignOutUrl="/"/>


    </div>
  )
}

export default Navbar
