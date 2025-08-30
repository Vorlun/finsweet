import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo.svg";

const Header = () => {
  return (
    <header className="bg-[#1C1E53] fixed w-full z-[100]">
      <nav className="container flex justify-between items-center py-[16px]">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>

        <div className="flex items-center gap-10 text-[#BBBBCB]">
          <Link to="/" className="hover:text-white">
            Home
          </Link>
          <Link to="/about" className="hover:text-white">
            About Us
          </Link>
          <Link to="/pricing" className="hover:text-white">
            Pricing
          </Link>
          <Link to="/work" className="hover:text-white">
            Work
          </Link>
          <Link to="/blog" className="hover:text-white">
            Blog
          </Link>
          <Link
            to="/contact"
            className="border-2 border-[#F4F6FC33] text-white px-12 py-4 rounded-full hover:bg-white hover:text-[#1C1E53] transition"
          >
            Contact Us
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
