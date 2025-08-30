import React from 'react'
import gr from '../assets/gr.png'

const About = () => {
  return (
    <>
      <section className="pb-32 pt-55">
        <div className="container h-[337.05328369140625px] flex gap-40">
          <div className='flex flex-col gap-6'>
            <h2 className="font-[400] text-[#282938] text-[18px]">About Us</h2>
            <h3 className="text-[#282938] text-[54px] font-[600]">
              Our designs solve problems
            </h3>
            <p className="text-[#282938] opacity-70">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>
          <img src={gr} alt="" className='w-full'/>
        </div>
      </section>
    </>
  );
}

export default About