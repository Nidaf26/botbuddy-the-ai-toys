import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

function Footer() {
  return (
    <footer className='bg-[#441752] text-white'>
      <div className='flex justify-around items-center bg-[#6e2584] ssm:flex-col xsm:flex-col'>
        <h1 className={`text-[35px] font-bold xsm:text-center`}>BotBuddy</h1>
        <span className='flex msm:h-[100px] msm:flex-col msm:gap-2 ssm:flex-col ssm:gap-2 xsm:flex-col xsm:gap-2'>
         <input type="email" name='email' placeholder='Enter your email' className='text-black px-4 border-none h-[35px] w-[230px] msm:mt-1'/>
         <button className='w-[230px] bg-black h-[35px] text-white'>Subscribe</button>
        </span>
      </div>


     <div className='grid grid-cols-3 grid-rows-1 gap-4 xsm:grid-cols-1 xsm:grid-rows-3 py-3'>
      <span className='xsm:flex xsm:justify-center xsm:flex-col xsm:items-center text-center'>
            <h6 className='font-bold text-[18px]'>Catagories</h6>
              <ul className='text-white sm:text-sm cursor-pointer'>
                 <li>Educational Toys</li>
                 <li>Little explorers</li>
                 <li>Young Innovators</li>
                 <li>Tech trailblazers</li>
             </ul>
       </span>
        <span className='xsm:flex xsm:justify-center xsm:flex-col xsm:items-center text-center'>
           <h6 className='font-bold text-[18px]'>Customer support</h6>
             <ul className='text-white sm:text-sm cursor-pointer'>
               <li>FAQ</li>
                <li>Blog</li>
                <li>Help center</li>
                <li>Privacy</li>
            </ul>
        </span>
        <span className='xsm:flex xsm:justify-center xsm:flex-col xsm:items-center text-center'>
           <h6 className='font-bold text-[18px]'>Get in touch</h6>
            <ul className='text-white sm:text-sm cursor-pointer'>
                <li>Contact Us</li>
                <li>Join our community</li>
                <li>Collaborate</li>
                <li>Cookies</li>
             </ul>
         </span>
      </div>
      <div className='flex justify-around items-center bg-[#6e2584]'>
            <p className='text-white'>© BotBuddy - All Rights Reserved</p>
             <span className=' flex justify-center items-center gap-1 text-white'>
                <FaFacebook />
                <FaTwitterSquare />
                <FaInstagramSquare />
             </span>
        </div>
    </footer>
  )
}

export default Footer;