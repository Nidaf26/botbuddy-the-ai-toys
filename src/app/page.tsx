import Heroparallax from "@/components/hero-parallax";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <main>
      <section>
        <Heroparallax />
      </section>
  
       <section className='overflow-x-hidden'> 
            <div>
                <div className='flex justify-center items-center flex-col'>
                  <span className='flex justify-center flex-col items-center mt-11'>
                   <h1 className='text-[40px] font-bold ssm:text-[40px] xsm:text-[40px] xsm:text-center  '>Our Most Selling Products</h1>
                 </span>
                </div>
            </div>
       </section>

      <section className="grid grid-cols-3 grid-rows-1 p-11 sm:grid-cols-2 sm:grid-rows-2 msm:grid-cols-1 msm:grid-rows-1 ssm:grid-cols-1 ssm:grid-rows-1 xsm:grid-cols-1 xsm:grid-rows-1">
        <div className="flex justify-center items-center">
         <div className="w-[280px] text-center">
           <Image height={280} width={280} src={"/Images/TalkyToon.png"} alt="product Image"></Image>
           <p>⭐4.5</p>
           <p>Interactive cat robot that engages kids in conversation, enhancing communication skills and social c...</p>
          <Link href={"/LittleExplorers"} className="flex justify-center items-center bg-black text-white h-[35px] rounded-sm">product Page </Link>
         </div>
        </div>
        <div className="flex justify-center items-center">
         <div className="w-[280px] text-center">
           <Image height={280} width={280} src={"/Images/CodeGuru.png"} alt="product Image"></Image>
           <p>⭐4.7</p>
           <p>A coding adventure game where players solve puzzles, create algorithms, and learn programming concep...</p>
          <Link href={"/youngInnovaters"} className="flex justify-center items-center bg-black text-white h-[35px] rounded-sm">product Page </Link>
         </div>
        </div>
        <div className="flex justify-center items-center">
         <div className="w-[280px] text-center">
           <Image height={280} width={280} src={"/Images/Finopoly.png"} alt="product Image"></Image>
           <p>⭐4.9</p>
           <p>Get ready to shape the next generation of financial leaders with Finopoly! This innovative board gam...</p>
          <Link href={"/TechTrialBlazers"} className="flex justify-center items-center bg-black text-white h-[35px] rounded-sm">product Page </Link>
         </div>
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
         <h1 className="text-[40px] font-bold text-center">Customers Guide</h1>
          <div className="flex flex-wrap w-full">
            <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none" />
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-bold title-font text-sm text-gray-900 mb-1 tracking-wider">
                    STEP 1:Browse and Select a Product
                  </h2>
                  <p className="leading-relaxed">
                    1. Visit our website and browse through our collection of AI
                    toys.
                    <br />
                    2. Click on the product image to view its details.
                  </p>
                </div>
              </div>
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none" />
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-bold title-font text-sm text-gray-900 mb-1 tracking-wider">
                    Step 2: View Product Details
                  </h2>
                  <p className="leading-relaxed">
                    1. Read the product description, features, and
                    specifications.
                    <br />
                    2. Check the product&apos;s price, availability, and estimated
                    delivery time.
                  </p>
                </div>
              </div>
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none" />
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <circle cx={12} cy={5} r={3} />
                    <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3" />
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-bold title-font text-sm text-gray-900 mb-1 tracking-wider">
                    Step 3: Add to Cart
                  </h2>
                  <p className="leading-relaxed">
                    1. If you&apos;re satisfied with the product, &quot;click the Add to
                    Cart&quot; button.
                    <br />
                     2. The product will be added to your shopping
                    cart. 
                    <br />
                    3. You can continue shopping or proceed to checkout.
                  </p>
                </div>
              </div>
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none" />
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                    <circle cx={12} cy={7} r={4} />
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-bold title-font text-sm text-gray-900 mb-1 tracking-wider">
                    Step 4: Checkout
                  </h2>
                  <p className="leading-relaxed">
                    1. Click on the &quot;Checkout&quot; button to proceed with your
                    order.
                    <br />
                     2. If you&apos;re a new customer, create an account or
                    continue as a guest.
                    <br />
                     3. Enter your shipping address, email
                    address, and phone number.
                  </p>
                </div>
              </div>
              <div className="flex relative">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                    <path d="M22 4L12 14.01l-3-3" />
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-bold title-font text-sm text-gray-900 mb-1 tracking-wider">
                    Step 5: Payment Method
                  </h2>
                  <p className="leading-relaxed">
                  1. Choose your preferred payment method (e.g., credit card, COD).
                  <br />
                  2. Enter your payment details and confirm the payment.
                  </p>
                </div>
              </div>
            </div>
            <Image
             height={500}
             width={500}
              className="lg:w-3/5 md:w-1/2 object-contain object-center rounded-lg md:mt-0 mt-12"
              src="/Images/steps.png"
              alt="step"
            />
          </div>
        </div>
      </section>

        <h1 className="font-bold text-[40px] text-center">Unique Selling Point</h1>
      <section className="grid grid-cols-3 grid-rows-1 p-11">
        <div className="flex justify-center items-center">
           <span className="bg-[#ffffff] shadow-xl">
            <Image height={150} width={150} src={"/Images/affodable.webp"} alt="affordable prices"></Image>
           </span>
        </div>
        <div className="flex justify-center items-center">
           <span className="bg-[#ffffff] shadow-xl">
            <Image height={150} width={150} src={"/Images/delivery Image.jpg"} alt="affordable prices"></Image>
           </span>
        </div>
        <div className="flex justify-center items-center">
           <span className="bg-[#ffffff] shadow-xl">
            <Image height={150} width={150} src={"/Images/madeInPak.jpg"} alt="affordable prices"></Image>
           </span>
        </div>
      </section>
  </main>
  );
}
