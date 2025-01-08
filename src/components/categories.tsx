"use client"
import React from 'react';
import Link from 'next/link';

function Categories() {
  return (
    <nav >
     <span className='bg-slate-50 h-[50px] flex justify-around items-center font-bold msm:text-sm text-center ssm:text-sm xsm:text-sm'>
        <Link href={""}>Little Explorers <br /> (3 to 8) </Link>
        <Link href={"/youngInnovaters"}>Young Innovators <br /> (9 to 14)</Link>
        <Link href={"/"}>Tech Trialblazzer <br /> (15 to 18)</Link>
     </span> 
    </nav>
  )
}

export default Categories;