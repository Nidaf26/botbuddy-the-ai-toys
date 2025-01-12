"use client";
import React from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import { IoStar } from "react-icons/io5";
import { useState, useEffect } from "react";
import Loader from "@/components/Loader";

function Page() {
  interface TextTrialBlazers {
    _id: string;
    productname: string;
    productdescription: string;
    productPrice: string;
    productraiting: string;
    productimage: string;
  }
  const [loading, setloading] = useState(false);
  const [Data, setData] = useState<TextTrialBlazers[]>([]);
  useEffect(() => {
    const fetchdata = async () => {
      setloading(true);
      try {
        const TechTrialBlazers: TextTrialBlazers[] = await client.fetch(`
          *[_type == "TechTrialBlazer"]{
            _id,
            productname,
            productdescription,
            productPrice,
            productraiting,
            productimage
            }`);
        console.log(TechTrialBlazers);
        setData(TechTrialBlazers);
      } catch (error) {
        console.log(error);
        return <div>product not found</div>;
      }
      setloading(false);
    };
    fetchdata();
  }, []);
  if (loading === true) {
    return <Loader />;
  }

  return (
    <section className="grid grid-cols-2 grid-rows-1 bg-[#dfd9f8]">
      {Data.map((product) => (
        <div className="flex justify-center items-center" key={product._id}>
          <div
            className="w-[270px] flex justify-center flex-col items-center gap-3 shadow-lg rounded-lg bg-[#A888B5] hover:border-[1px] border-purple-600 border-solid"
            key={product._id}
          >
            <Image
              height={200}
              width={200}
              src={urlFor(product.productimage).url()}
              alt={product.productname}
            ></Image>
            <span className="bg-white flex justify-center flex-col items-center gap-2">
              <h1 className="font-bold text-center text-pink-500">
                {product.productname}
              </h1>
              <p className="font-bold">Price: {product.productPrice} PKR</p>
              <p className="flex gap-2 items-center">
                <IoStar className="text-yellow-500" />
                {product.productraiting}
              </p>
              <p className="text-center ">{`${product.productdescription.slice(0, 100)}...`}</p>
              <Link
                href={`/TechTrialBlazers/${product._id}`}
                className="bg-black text-white h-[35px] w-full flex justify-center items-center rounded-lg"
              >
                view more
              </Link>
            </span>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Page;
