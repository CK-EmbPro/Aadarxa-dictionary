import Link from 'next/link'
import React from 'react'

const Sidebar = () => {

    return (
        <div className='ms-2 bg-gray-50 rounded-sm md:w-[40px] hover:md:w-[19%] max-w-lg-[18%] hover:lg:w-[10%] lg:w-[40px] h-[50vh] flex flex-col justify-around p-1 group transition-all duration-300'>
            <Link href={"/"} className='bg-blue-100 ps-[10px] h-10 flex items-center gap-2 rounded-[6px] '><span>H</span><p className='hidden group-hover:block transition-opacity duration-500 delay-1000'>Home</p></Link>
            <Link href={"/settings"} className='bg-blue-100 ps-[10px] h-10 flex items-center gap-2 rounded-[6px] '><span>S</span><p className='hidden group-hover:block transition-opacity duration-500 delay-1000'>Settings</p></Link>
            <Link href={"/about"} className='bg-blue-100 ps-[10px] h-10 flex items-center gap-2 rounded-[6px] '><span>A</span><p className='hidden group-hover:block transition-opacity duration-500 delay-1000'>About</p></Link>
            <Link href={"/help"} className='bg-blue-100 ps-[10px] h-10 flex items-center gap-2 rounded-[6px] '><span>H</span><p className='hidden group-hover:block transition-opacity duration-500 delay-1000'>Help</p></Link>
            <Link href={"/purchase"} className='bg-blue-100 ps-[10px] h-10 flex items-center gap-2 rounded-[6px] '><span>P</span><p className='hidden group-hover:block transition-opacity duration-500 delay-1000'>Purchase</p></Link>
            <Link href={"/others"} className='bg-blue-100 ps-[10px] h-10 flex items-center gap-2 rounded-[6px] '><span>O</span><p className='hidden group-hover:block transition-opacity duration-500 delay-1000'>Others</p></Link>
        </div>
    )
}

export default Sidebar