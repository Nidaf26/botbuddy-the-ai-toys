import React from 'react';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import Link from 'next/link';
import { IoStar } from "react-icons/io5";

async function Page() {
   interface youngInnovater{
    _id:string,
    productname:string,
    productdescription:string,
    productPrice:string,
    productraiting:string,
    productimage:string
   }
    const youngInnovaters:youngInnovater[] = await client.fetch(`
 *[_type=="youngInnovaters"]{
  _id,
  productname,
  productdescription,
  productPrice,
  productraiting,
  productimage
}`)
console.log(youngInnovaters);
if(!youngInnovaters){
    console.log("product not found")
    return(
        <div>product not found</div>
    )
}
  return (
    <section>
       {youngInnovaters.map((product)=>(
       <div className='flex justify-center items-center flex-col' key={product._id} >
      <div className='w-[270px] flex justify-center flex-col items-center gap-3 shadow-lg bg-neutral-300' key={product._id}>
        <Image height={200} width={200} src={urlFor(product.productimage).url()} alt={product.productname}></Image>
        <span className='bg-white flex justify-center flex-col items-center gap-2'>
         <h1 className='font-bold text-center text-pink-500'>{product.productname}</h1>
         <p className='font-bold'>Price: {product.productPrice} PKR</p>
         <p className='flex gap-2 items-center'><IoStar className='text-yellow-500'/>{product.productraiting}</p>
         <p className='text-center '>{`${product.productdescription.slice(0,100)}...`}</p>
         <Link href={`/AllProducts/${product._id}`} className='bg-black text-white h-[35px] w-full flex justify-center items-center rounded-lg'>view more</Link>
        </span>
      </div>
     </div>
       ))}
    </section>
  )
}

export default Page