import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Work = () => {
  return (
    <>
      <section className="bg-[#F4F6FC] pb-24 pt-47 flex justify-center">
        <div className="flex flex-col gap-6 w-[733px] items-center">
          <h2 className="font-[400] text-[#282938] text-[18px]">About Us</h2>
          <h3 className="text-[#282938] text-[54px] font-[600]">
            Our designs solve problems
          </h3>
          <p className="text-[#282938] opacity-70 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
          <div className="flex gap-6 mt-6">
            <FaFacebook className="w-4 h-4 hover:text-blue-500 cursor-pointer transition" />
            <FaTwitter className="w-4 h-4 hover:text-sky-400 cursor-pointer transition" />
            <FaInstagram className="w-4 h-4 hover:text-pink-500 cursor-pointer transition" />
            <FaLinkedin className="w-4 h-4 hover:text-blue-600 cursor-pointer transition" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Work;
