import { Link, Outlet } from "react-router-dom";
import logo from "../ImagesFile/alx-logo.png";
import { useState } from "react";
import { SlSocialInstagram } from "react-icons/sl";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import { IoCloseSharp } from "react-icons/io5";
import { VscLocation } from "react-icons/vsc";
import { GiRotaryPhone } from "react-icons/gi";

function Navbar() {
  const [mobileDeviceNav, setMobileDeviceNav] = useState(false);

  return (
    <>
      <div className="h-[50px] hidden  fixed w-full  top-0 bg-[#071016] opacity-[0.8]  lg:flex justify-center z-50 items-center ">
        <div className="h-[80%] w-[90%] flex justify-between items-center relative">
          <ul className="flex space-x-4 ">
            <li className="border-[1px] border-white rounded-full p-[8px]  hover:bg-[#20fd03]">
              <FaFacebookF className="text-sm text-white" />
            </li>
            <li className="border-[1px] border-white rounded-full p-[7px] hover:bg-[#20fd03]">
              <SlSocialInstagram className="text-sm text-white" />
            </li>
            <li className="border-[1px] border-white rounded-full p-[7px] hover:bg-[#20fd03]">
              <FaXTwitter className="text-sm text-white" />
            </li>
            <li className="border-[1px] border-white rounded-full p-[7px] hover:bg-[#20fd03]">
              <FaLinkedinIn className="text-sm text-white" />
            </li>
          </ul>
          <ul className="flex  text-white text-[10px]]">
            <li className="w-[200px]  flex justify-center items-center">
              <span>
                <GiRotaryPhone className="text-[#00D231] text-3xl" />
              </span>{" "}
              <span className="hover:text-[#20fd03]">+91-9602646089</span>
            </li>
            <li className="w-[200px] flex justify-center items-center">
              <span>
                <GiRotaryPhone className="text-[#00D231] text-3xl" />{" "}
              </span>
              <span className="hover:text-[#20fd03]">+91-9571144478</span>
            </li>
            <li className="w-[300px]  flex justify-center items-center">
              {" "}
              <span>
                <VscLocation className="text-[#00D231] text-3xl" />
              </span>{" "}
              <span className="hover:text-[#20fd03]">
                {" "}
                605, SGH, Vaishali Nagar, JaipurIndia
              </span>
            </li>
          </ul>
        </div>
      </div>
      <nav className="h-[80px] w-full  bg-[#071016] opacity-[0.8]  flex justify-center items-center fixed lg:top-[49.6px] top-0 z-50">
        <div className="h-full w-full md:w-[87%]  flex justify-between items-center">
          <div>
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className="flex md:hidden">
            {!mobileDeviceNav ? (
              <TiThMenu
                className="text-white text-4xl"
                onClick={() => setMobileDeviceNav(true)}
              />
            ) : (
              <IoCloseSharp
                className="text-white text-4xl font-bold"
                onClick={() => setMobileDeviceNav(false)}
              />
            )}
          </div>

          <ul
            className={
              !mobileDeviceNav
                ? "text-xl hidden md:flex space-x-10 text-white"
                : "absolute top-20 flex flex-col space-y-16  items-center text-white bg-[#071016] opacity-[0.8] h-screen w-full text-2xl font-semibold pt-8"
            }
          >
            <li
              className="hover:bg-[#00d231] p-[5px] px-4 rounded-md"
              onClick={() => setMobileDeviceNav(false)}
            >
              <Link to="/"> Home</Link>
            </li>
            <li
              className="hover:bg-[#00d231] p-[5px] px-4 rounded-md"
              onClick={() => setMobileDeviceNav(false)}
            >
              <Link to="/car-list"> Cars </Link>
            </li>

            <li
              className="hover:bg-[#00d231] p-[5px] px-4 rounded-md"
              onClick={() => setMobileDeviceNav(false)}
            >
              <Link to="/service"> Services </Link>
            </li>
            <li
              className="hover:bg-[#00d231] p-[5px] px-4 rounded-md"
              onClick={() => setMobileDeviceNav(false)}
            >
              <Link to="/contact-us">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>

      <Outlet />
    </>
  );
}
export default Navbar;
