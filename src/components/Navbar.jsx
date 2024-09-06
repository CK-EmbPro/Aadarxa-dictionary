"use client"
import React, { useEffect, useState } from 'react'

const Navbar = () => {
    const [activeTab, setactiveTab] = useState(null)
    const handleTabClick = (tab) => {
        setactiveTab(tab)
    }
     
    useEffect(()=>{
        setactiveTab("assamese")
    }, [])
    return (
        <div className=" h-[40px] bg-blue-700  md:flex gap-[17vw] justify-center items-center lg:gap-[40vw] ">
            <p className='text-amber-200'>Aadarxa Bilingual Dictionary</p>
            <div className='text-yellow-400 md:flex gap-[5vw]  lg:gap-[10vw]'>
                <p className={`${activeTab === "assamese" ? "before:absolute before:bottom-0 before:left-0 before:h-1 before:w-full before:content-[''] before:bg-yellow-400" : "text-yellow-400"} cursor-pointer relative`} onClick={()=> handleTabClick("assamese")}>Assamese</p>
                <p className={`${activeTab === "english" ? "before:absolute before:bottom-0 before:left-0 before:h-1 before:w-full before:content-[''] before:bg-yellow-400" : "text-yellow-400"} cursor-pointer relative`} onClick={()=> handleTabClick("english")}>English</p>
            </div>
        </div>
    )
}

export default Navbar