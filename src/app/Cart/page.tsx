import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CgArrowsScrollV } from "react-icons/cg";

function Page() {
  return (
    <section className='overflow-x-hidden'>
        <div className='w-full h-[150px] bg-[#A888B5] mt-5 mb-11'>
           <h1 className='text-[36px] font-bold text-white'>Shopping Cart</h1>
           <span className='flex gap-3 text-white'>
              <Link href={"/"}>Home</Link>
              <p className='text-white'>Shopping Cart</p>
           </span>
        </div> 
        <section className='w-screen overflow-x-hidden'>
      <div className='grid grid-rows-4 gap-3'>
        <div className='h-[72px]'>
           <ul className='flex justify-around items-center font-bold text-[#1D3178] xsm:text-sm'>
             <li>Product</li>
             <li>Price</li>
             <li>Quantity</li>
             <li>Total</li>
           </ul>
        </div>
        <div className='h-[72px] flex justify-around items-center'>
          <Image
          height={64}
          width={64}
          alt='controller'
          src={"/Images/CodeGuru.png"}>
          </Image>
          <p> 13000 PKR</p>
          <span className='h-[44px] w-[72px] flex justify-center items-center border-[1px] ml-2 border-solid border-black rounded-sm gap-2'>
            <p>01</p>
            <CgArrowsScrollV />
          </span>
          <p>13000 PKR</p>
        </div>       
        <div className='h-[72px] flex justify-around items-center'>
          <Image
          height={64}
          width={64}
          alt='controller'
          src={"/Images/Finopoly.png"}>
          </Image>
          <p>8000 PKR</p>
          <span className='h-[44px] w-[72px] flex justify-center items-center border-[1px] ml-2 border-solid border-black rounded-sm gap-2'>
            <p>01</p>
            <CgArrowsScrollV />
          </span>
          <p> 8000 PKR</p>
        </div>       
        <div className='h-[72px] flex justify-around items-center'>
          <Image
          height={64}
          width={64}
          alt='controller'
          src={"/Images/TalkyToon.png"}>
          </Image>
          <p>15000 PKR</p>
          <span className='h-[44px] w-[72px] flex justify-center items-center border-[1px] ml-2 border-solid border-black rounded-sm gap-2'>
            <p>01</p>
            <CgArrowsScrollV />
          </span>
          <p>15000 PKR</p>
        </div>       
        <div className='flex justify-around items-center '>
          <button className='h-[56px] w-[206px] text-white border-[1px] bg-[#6a51a4] border-solid border-black rounded-sm xsm:text-sm xsm:w-[130px] ssm:w-[150px]'>Return To Shop</button>
          <button className='h-[56px] w-[195px] text-white border-[1px] bg-[#6a51a4] border-solid border-black rounded-sm xsm:text-sm xsm:w-[130px] ssm:w-[150px]'>Update Cart</button>
        </div>
      </div>

      {/* shipping */}
      <div className='flex justify-around items-start mt-8 msm:flex-col xsm:flex-col ssm:flex-col
       ssm:justify-center msm:justify-center xsm:gap-4 xsm:items-center ssm:items-center ssm:gap-4 msm:gap-4
       msm:items-center sm:flex-col sm:justify-center sm:items-center'>

        <div className='flex gap-2 msm:h-[200px] ssm:flex-col xsm:flex-col xsm:justify-center 
           xsm:items-center ssm:items-center msm:flex-col msm:justify-center msm:items-center 
           sm:flex-col sm:justify-center sm:items-center'>

          <input type="text" placeholder='Coupon Code' className='h-[56px] w-[300px] border-[1px] 
          border-solid ml-2 border-black rounded-sm md:[240px] xsm:h-[40px] xsm:w-[270px] xsm:m-0 '/>
          <button className='h-[56px] w-[211px] bg-[#6a51a4] rounded-sm text-white md:w-[151px] 
          sm:text-sm xsm:ml-3 xsm:h-[40px]'>Apply Coupon</button>
        
        </div>


        <div className='flex justify-around items-center flex-col h-[324px]
         w-[470px] border-[1px] border-solid ml-2 border-black rounded-sm msm:h-[400px]
         xsm:w-[280px] xsm:m-0 ssm:m-0 ssm:w-[300px] msm:m-0 msm:w-[400px] md:w-[470px]'>

          <h5 className='w-[422px] text-start sm:w-[280px] xsm:w-[200px] ssm:w-[280px] msm:w-[380px]'>Cart Total</h5>
          <span className='flex w-[422px] justify-between border-b-[1px] border-solid ml-2 border-black
           sm:w-[280px] xsm:w-[200px] ssm:w-[280px] msm:w-[380px] '>
            <p>Subtotal:</p>
            <p>36000 PKR</p>
          </span>
          <span className='flex w-[422px] justify-between border-b-[1px] border-solid ml-2 border-black
           sm:w-[280px] xsm:w-[200px] ssm:w-[280px] msm:w-[380px]'>
            <p>Shipping:</p>
            <p>500 PKR</p>
          </span>
          <span className='flex w-[422px] justify-between border-b-[1px] border-solid ml-2 border-black
           sm:w-[280px] xsm:w-[200px] ssm:w-[280px] msm:w-[380px]'>
            <p>Total:</p>
            <p>36500 PKR</p>
          </span>
          <button className='h-[56px] w-[211px] sm:w[211px] bg-[#6a51a4] rounded-sm text-white 
          sm:text-sm xsm:w-[140px]'>Procees to checkout</button>
        </div>
      </div>
    </section>
    </section>
  )
}

export default Page;