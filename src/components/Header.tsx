"use client";
import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { FaShoppingCart } from "react-icons/fa";
import Image from 'next/image';

function Header() {
  const [Opensidebar,setOpensidebar] = useState(false);
  const [Closesidebar,setClosesidebar] = useState(true);
  const togglesidebar = ()=>{
    setOpensidebar(!Opensidebar)
    setClosesidebar(!Closesidebar)
  }

  return (
    <header className='overflow-x-hidden'>
      {/* dekstop side bar */}
        <nav className='flex justify-around items-center bg-[#441752] text-white h-[70px] xsm:hidden ssm:hidden'>
          <div className='text-[30px] flex gap-1 justify-end items-center font-bold ssm:text-[24px] msm:text-[20px] xsm:text-[20px]'>
           <Image height={60} width={60} src={"/Images/Botbuddy Logo.png"} alt='logo' className='rounded-[50%]'></Image>
            BotBuddy: The AI toys
          </div>
          <div className=' w-[310px] text-[18px] flex justify-between items-center ssm:w-[230px] xsm:text-sm xsm:w-[210px]'>
            <Link href={"/"}>Home</Link>
            <Link href={"/aboutus"}>About us</Link>
            <Link href={"/contactUs"}>Contact us</Link>
            <span className='flex'>
            <Link href={"/Cart"} className='mt-1'><FaShoppingCart/></Link>
            </span>
          </div>
        </nav>
        {/*for mobile screens*/}
        <nav className='flex justify-around items-center bg-[#441752] text-white h-[70px] msm:hidden sm:hidden md:hidden lg:hidden'>
         <div className='text-[30px] flex justify-center items-center gap-2 ssm:text-[24px] xsm:text-[20px] font-bold'>
           <Image height={40} width={40} src={"/Images/Botbuddy Logo.png"} alt='logo' className='rounded-[50%]'></Image>
            BotBuddy: The AI toys
          </div>
         <button
         onClick={togglesidebar}
          className="text-white text-[20px] focus:outline-none"
         ><IoMenu/></button>
        </nav>
        {/* mobile side bar */}
        <nav className={`fixed inset-y-0 right-0 transform ${
          Opensidebar ? 'translate-x-0' : 'translate-x-full'
         } md:hidden transition-transform duration-300 ease-in-out bg-white w-52 h-full shadow-lg z-50`}>
          <button onClick={togglesidebar}><RxCross2 className='font-bold'/></button>
          <div className='text-[18px] flex justify-center items-center text-[#213555] font-bold ssm:text-[18px] xsm:text-[18px] ml-8'>
          <Image height={40} width={40} src={"/Images/Botbuddy Logo.png"} alt='logo' className='rounded-[50%]'></Image>
           BotBuddy: The AI toys
          </div>
          <div className=' w-[280px] flex justify-between items-center mt-3 flex-col gap-5 ssm:w-[230px] xsm:text-sm xsm:w-[210px]'>
            <Link href={"/"}>Home</Link>
            <Link href={"/aboutus"}>About us</Link>
            <Link href={"/contactUs"}>Contact us</Link>
            <span className='flex'>
            <Link href={"/Cart"} className='mt-1'><FaShoppingCart/></Link>
            </span>
          </div>
        </nav>
        {Opensidebar && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-40"
          onClick={togglesidebar}
        >
        </div>
         )}

    </header>
  )
}

export default Header;