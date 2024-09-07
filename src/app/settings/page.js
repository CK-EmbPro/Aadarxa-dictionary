import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col gap-4 w-[20%] mt-3'>
      <div className='flex flex-col gap-4'>
        <p>Default language</p>
        <div className='flex flex-col gap-2'>
          <label><input type="radio" value={"assamese"} name='language' />Assamese</label>
          <label><input type="radio" value={"english"} name='language' />English</label>
        </div>
      </div>

      <div className='flex flex-col gap-4'>
        <p>Select keyboard</p>
        <div className='flex flex-col gap-2'>
          <label><input type="radio" value={"in-app-keyboard"} name='keyboard' />In-app keyboard</label>
          <label><input type="radio" value={"phone-keyboard"} name='keyboard' />Phone keyboard</label>
        </div>
      </div>

      <button className='w-[30%] mx-auto bg-blue-600 text-white font-semibold'>SAVE</button>

    </div>
  )
}

export default page