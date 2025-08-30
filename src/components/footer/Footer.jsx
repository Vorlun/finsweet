import React from "react";
import logo from "../../assets/Logo.svg";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1C1E53] w-full">
      <div className="container py-24">
        <div className="flex flex-wrap gap-65">
          <div className="max-w-[400px]">
            <img src={logo} alt="Logo" className="w-40 mb-6" />
            <p className="text-white opacity-80 leading-relaxed">
              We are always open to discuss your project and improve your online
              presence.
            </p>
          </div>

          <div className="flex-1 max-w-[400px]">
            <p className="text-white font-semibold text-4xl md:text-5xl mb-6">
              Lets Talk!
            </p>
            <p className="text-[#F4F6FC] opacity-80 leading-relaxed">
              We are always open to discuss your project, improve your online
              presence and help with your UX/UI design challenges.
            </p>

            <div className="flex gap-6 mt-6">
              <FaFacebook className="w-4 h-4 text-white hover:text-blue-500 cursor-pointer transition" />
              <FaTwitter className="w-4 h-4 text-white hover:text-sky-400 cursor-pointer transition" />
              <FaInstagram className="w-4 h-4 text-white hover:text-pink-500 cursor-pointer transition" />
              <FaLinkedin className="w-4 h-4 text-white hover:text-blue-600 cursor-pointer transition" />
            </div>
          </div>
        </div>
        <div className="bg-[#FCD980] w-full max-w-md md:w-[517px] py-4 px-6">
          <div className="flex items-center gap-[30px] h-full">
            <div className="flex flex-col">
              <p className="text-[18px] text-[#282938] font-medium">
                Email me at
              </p>
              <a
                href="mailto:contact@website.com"
                className="text-[#282938] opacity-80 mt-1 hover:underline"
              >
                contact@website.com
              </a>
            </div>

            <div className="flex flex-col">
              <p className="text-[18px] text-[#282938] font-medium">Call us</p>
              <a
                href="tel:0927627728525"
                className="text-[#282938] opacity-80 mt-1 hover:underline"
              >
                0927 6277 28525
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
