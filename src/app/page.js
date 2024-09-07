"use client"
import React, { useState } from 'react'

const page = () => {
  const [searchText, setsearchText] = useState("")
  const [hideSuggestedText, sethideSuggestedText] = useState(false)
  const handleTextChange = (e) => {
    setsearchText(e.target.value)
  }

  const handleDeleteSearchText = ()=>{
    setsearchText("")
  }

  const handleClick = () => {
    sethideSuggestedText((hideSuggestedText)  => !hideSuggestedText)
  }

  const handleClick2 = ()=> {
    sethideSuggestedText(false)
  }

  const suggestedText = [
    "name", "named", "namedc", "nameg"
  ]
  return (
    <div className=' border h-full flex border-gray-500 rounded-md flex-col  lg:w-[50%] overflow-x-hidden'>
      <div className='bg-gray-400 items-center h-[50px] flex justify-center p-1'>
        <input type='text' placeholder='Search' onChange={(e) => handleTextChange(e)} value={searchText} className='relative  rounded-[4px]  w-[80%] outline-none p-1 h-[80%]' />
        <button onClick={()=> handleDeleteSearchText()} className='absolute left-[52em]'>X</button>
      </div>

      <div className='flex h-full '>
        <div className={`flex flex-col w-[25%]  transition-all duration-1000 h-full border-r-0 ${hideSuggestedText ? "ms-[-160px]": ""} `}>
          {
            suggestedText.map((suggestedText, index) => (
              <button key={index} className={`py-1 border-b-gray-400 border-[0.1px] bg-teal-200 ${hideSuggestedText ? "": ""}`}>{suggestedText}</button>
            ))
          }
        </div>

        <div className='border-l-[7px] w-full'>
          <div className='flex justify-between w-full'>
            <button onClick={() => handleClick()}>X</button>
            <button onClick={() => handleClick2()}>Y</button>
          </div>

          <div className='m-2'> 
            transalted assamese
          </div>
        </div>
      </div>

    </div>

  )
}

export default page