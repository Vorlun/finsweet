import React from "react";
import hero from "../../assets/Illustration.svg";

const Hero = () => {
  return (
    <section className="bg-[#1C1E53] w-full pt-54 pb-32">
      <div className="container flex justify-between gap-15">
        <div>
          <h2 className="font-[600] text-white text-[54px]">
            Building stellar websites for early startups
          </h2>
          <p className="font-medium text-white opacity-70 my-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
          <div>
            <button className="bg-[#FCD980] text [#1B1C2B] text-[18px] font-[600] py-4 px-14 rounded-full">
              View our work
            </button>
            <button className="py-4 px-14 text-white font-medium">
              View Pricing
            </button>
          </div>
        </div>
        <img src={hero} alt="" />
      </div>
    </section>
  );
};

export default Hero;
