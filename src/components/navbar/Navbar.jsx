import React, { useState } from "react";
import logo from "../../assets/kemmylogo.png";
import { Link } from "react-router-dom";
import { RiHomeHeartFill } from "react-icons/ri";
import { IoWomanSharp } from "react-icons/io5";
import { FaFolderOpen } from "react-icons/fa6";
import { GrTechnology } from "react-icons/gr";
import { IoMdContacts } from "react-icons/io";
import { MdWork } from "react-icons/md";
import { TiThMenu } from "react-icons/ti";
import { FaTimes } from "react-icons/fa";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className=" flex items-center justify-between mt-3">
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="" className="w-20 mx-2" />
      </div>
      <div className=" hidden m-8 lg:flex items-center justify-end gap-8 text-2xl cursor-pointer">
        <Link to="/" className="hover:text-purple-500">
          <RiHomeHeartFill />
        </Link>
        <Link to="/about" className="hover:text-purple-500">
          <IoWomanSharp />{" "}
        </Link>
        <Link to="/technology" className="hover:text-purple-500">
          {" "}
          <GrTechnology />
        </Link>
        <Link to="/experience" className="hover:text-purple-500">
          {" "}
          <MdWork />
        </Link>
        <Link to="/project" className="hover:text-purple-500">
          {" "}
          <FaFolderOpen />
        </Link>

        <Link to="/contact" className="hover:text-purple-500">
          <IoMdContacts />
        </Link>
      </div>
      <div onClick={toggleMenu}>
        {isMenuOpen ? (
          <FaTimes className="mt-2 lg:hidden block text-2xl cursor-pointer" />
        ) : (
          <TiThMenu className="mt-2 lg:hidden block text-2xl cursor-pointer" />
        )}{" "}
      </div>

      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } absolute z-50 lg:hidden top-10 right-0 max-w-[300px] w-full bg-black bg-opacity-100 flex flex-col items-center  gap-6 font-semibold transform transition-transform`}
      >
        <li className="list-none w-full text-center p-4 hover:bg-neutral-900 hover:text-white transition-all cursor-pointer">
          <Link to="/">Home</Link> 
        </li>

        <li className="list-none w-full text-center p-4 hover:bg-neutral-900 hover:text-white transition-all cursor-pointer">
        <Link to="/about">About Me</Link> 
        </li>
        <li className="list-none w-full text-center p-4 hover:bg-neutral-900 hover:text-white transition-all cursor-pointer">
        <Link to="/technology">Technology</Link> 
        </li>
        <li className="list-none w-full text-center p-4 hover:bg-neutral-900 hover:text-white transition-all cursor-pointer">
        <Link to="/experience">Experience</Link> 
        </li>
        <li className="list-none w-full text-center p-4 hover:bg-neutral-900 hover:text-white transition-all cursor-pointer">
        <Link to="/project">Projects</Link> 
        </li>
        <li className="list-none w-full text-center p-4 hover:bg-neutral-900 hover:text-white transition-all cursor-pointer">
        <Link to="/contact">Contact Us</Link> 
        </li>
      </div>
    </nav>
  );
};

export default Navbar;
