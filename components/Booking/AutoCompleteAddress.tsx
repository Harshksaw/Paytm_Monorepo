import React from 'react'

const AutoCompleteAddress = () => {
  return (
    <div className='mt-5 '>

      <div>
        <label htmlFor="Where From?" className='text-gray-400'></label>
        <input type="text" title='Where From'  className='bg-white p-1 border-[1px] w-full  rounded-md outline-none focus:bg-yellow-300'/>

      </div>
      <div>
        <label htmlFor="Where To?" className='text-gray-400'></label>
        <input type="text"  title='Where To?' className='bg-white p-1 border-[1px] w-full  rounded-md outline-none focus:bg-yellow-300'/>

      </div>

    </div>
  )
}

export default AutoCompleteAddress
