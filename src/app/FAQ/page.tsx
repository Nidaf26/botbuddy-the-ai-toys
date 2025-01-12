import React from 'react'

function Page() {
  return (
    <main>
       <section className='overflow-x-hidden'> 
            <div className='bg-[#A888B5]'>
                <div className='flex justify-center items-center flex-col'>
                  <span className='flex justify-center flex-col items-center mt-11'>
                   <h1 className='text-[50px] text-center font-bold ssm:text-[50px] xsm:text-[50px] xsm:text-center text-white '>Frequently Asked Questions</h1>
                   <p className='text-white'>Empowering Young Minds Through Innovations</p>
                 </span>
                </div>
            </div>
      </section>
       <section>
        <div className='mt-7 flex justify-center items-center flex-col'>
        <h1 className='text-[#6a51a4] font-bold text-[35px]'>General Questions</h1>
          <p className='font-bold'>Q1: What are AI toys, and how do they work?</p>
          <p>Ans: AI toys are interactive toys that use artificial intelligence to learn and adapt to a child&apos;s behavior.</p>
          <br />
          <p className='font-bold'>Q2:What are the benefits of AI toys for children?</p>
          <p>Ans: AI toys promote learning, creativity, and critical thinking.</p>        
        </div>
        <div className='mt-7 flex justify-center items-center flex-col'>
        <h1 className='text-[#6a51a4] font-bold text-[35px]'>Safety and Security</h1>
        <p className='font-bold'>Q3: How do you ensure the security and privacy of my child&apos;s data?</p>
        <p>Ans: We use encryption and secure servers to protect data.</p>
        <br />
        <p className='font-bold'>Q4: How do I report any safety or security concerns?</p>
        <p>Ans: Contact our customer support team immediately via, our cutomer support page.</p>
        </div>
        <div className='mt-7 flex justify-center items-center flex-col'> 
          <h1 className='text-[#6a51a4] font-bold text-[35px]'> Technical Support</h1>
          <p className='font-bold'>Q5: What devices are compatible with your AI toys?</p>
          <p>Ans: Our AI toys are compatible with iOS and Android devices.</p>
          <br />
          <p className='font-bold'>Q6: How do I set up and activate my AI toy?</p>
          <p>Ans: Follow the instructions in the user manual.</p>
        </div>
        <div className='mt-7 flex justify-center items-center flex-col'>
        <h1 className='text-[#6a51a4] font-bold text-[35px]'> Parental Controls</h1>
        <p className='font-bold'> Q7: Can I set limits on my child&apos;s screen time or usage?</p>
        <p>Ans: Yes, through our parental control dashboard.</p>
        <br />
        <p className='font-bold'>Q8: Can I reset or delete my child&apos;s account or data?</p>
        <p>Ans: Yes, contact our customer support team for assistance.</p>
        </div>
        <div className='mt-7 flex justify-center items-center flex-col'>
          <h1 className='text-[#6a51a4] font-bold text-[35px]'>Warranty and Support</h1>
          <p className='font-bold'> Q9: What hours are customer support available?</p>
          <p>Ans: Customer support is available Monday-Friday, 9am-5pm.</p>
          <br />
          <p  className='font-bold'>Q10: How do I provide feedback or suggestions for improving the AI toy?</p>
          <p>Ans: Contact our customer support team or fill out our feedback </p>
        </div>
       </section>
    </main>
  )
}

export default Page;