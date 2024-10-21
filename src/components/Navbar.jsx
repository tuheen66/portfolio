import React from "react";
import { FaBriefcase, FaEnvelopeOpen, FaHome, FaUser } from "react-icons/fa";
import {  NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="">
      <div className="  justify-center mt-32 ">
        <div className="flex flex-col justify-center items-center space-y-8 ">
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
            <button className="bg-[#ffb400] p-4 rounded-full text-[#a9106b] text-2xl ">
              <FaEnvelopeOpen></FaEnvelopeOpen>
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;