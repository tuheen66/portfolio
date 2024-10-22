import React from "react";
import { FaBriefcase, FaEnvelopeOpen, FaHome, FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="">
      <div className="  justify-center mt-12 lg:mt-32 ">
        <div className="flex lg:flex-col gap-8  justify-center items-center lg:space-y-8 ">
          <NavLink to="/">
            <button className="bg-[#ffb400] p-4 rounded-full text-[#a9106b] text-2xl relative group  ">
              <FaHome></FaHome>
              <span class="opacity-0 group-hover:opacity-100 absolute   transform top-5 -translate-x-20 bg-black text-white text-sm px-2 py-1 rounded">
                Home
              </span>
            </button>
          </NavLink>
          <NavLink to="/about">
            <button className="bg-[#ffb400] p-4 rounded-full text-[#a9106b] text-2xl relative group">
              <FaUser></FaUser>
              <span class="opacity-0 group-hover:opacity-100 absolute  transform top-5 -translate-x-20 bg-black text-white text-sm px-2 py-1 rounded">
                About
              </span>
            </button>
          </NavLink>

          <NavLink to="/portfolio">
            <button className="bg-[#ffb400] p-4 rounded-full text-[#a9106b] text-2xl relative group">
              <FaBriefcase></FaBriefcase>
              <span class="opacity-0 group-hover:opacity-100 absolute  transform top-5 -translate-x-20 bg-black text-white text-sm px-2 py-1 rounded">
                Portfolio
              </span>
            </button>
          </NavLink>
          <NavLink to="/contact">
            <button className="bg-[#ffb400] p-4 rounded-full text-[#a9106b] text-2xl relative group ">
              <FaEnvelopeOpen></FaEnvelopeOpen>
              <span class="opacity-0 group-hover:opacity-100 absolute  transform top-5 -translate-x-20 bg-black text-white text-sm px-2 py-1 rounded">
                Contact
              </span>
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
