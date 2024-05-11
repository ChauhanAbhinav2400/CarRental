import React from "react";
import { Link } from "react-router-dom";
import logo from "../../ImagesFile/alx-logo.png";
import { SlSocialInstagram } from "react-icons/sl";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { GiRotaryPhone } from "react-icons/gi";
import { HiOutlineMail } from "react-icons/hi";
import { VscLocation } from "react-icons/vsc";

const Footer = () => {
  return (
    <>
      <div className="h-auto w-full text-[#f1f5f7] flex  flex-col justify-between items-center bg-[#112e3b]">
        <div className="h-[90%] w-[95%]  flex flex-col justify-center  md:justify-evenly   md:flex-row m-20">
          <div className="h-full w-[89%] md:w-[35%] ">
            <div className="my-6 md:my-4">
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </div>

            <p className="text-lg font-normal  text-[#f7f3f3] text-[14px] text-justify pt-[15px]">
              Are you looking for reliable and affordable rental car services in
              India to meet your travel needs? Look no further! We've handpicked
              a range of top-rated car rental services that guarantee
              comfortable and dependable transportation throughout your journey.
            </p>
            <ul className="flex text-2xl my-6 md:my-14 space-x-6">
              <li>
                <FaFacebookF className="text-md text-white" />
              </li>
              <li>
                <SlSocialInstagram className="text-md text-white" />
              </li>
              <li>
                <FaXTwitter className="text-md text-white" />
              </li>
              <li>
                <FaLinkedinIn className="text-md text-white" />
              </li>
            </ul>
          </div>

          <div className="h-full w-[89%] md:w-[20%]    flex flex-col">
            <h2 className="text-[22px]  md:my-4 font-[500]">Quick Links</h2>
            <div className="flex justify-between">
              <ul className="space-y-2">
                <li className="text-[#f7f3f3] text-[14px]">
                  <Link to="/about-us"> About Us </Link>
                </li>
                <li className="text-[#f7f3f3] text-[14px]">
                  <Link to="/contact-us">Contact Us</Link>
                </li>
                <li className="text-[#f7f3f3] text-[14px]">
                  <Link to="/service">Service</Link>
                </li>
                <li className="text-[#f7f3f3] text-[14px]">
                  <Link to="/blog">Blog</Link>
                </li>
                <li className="text-[#f7f3f3] text-[14px]">
                  <Link to="/car-list">Book Now</Link>
                </li>
              </ul>

              <ul className="space-y-2 ">
                <li className="text-[#f7f3f3] text-[14px]">
                  <Link to="/vendor-register">Join Our Team</Link>
                </li>

                <li className="text-[#f7f3f3] text-[14px]">
                  <Link to="/privacy-policy">Privacy Policy</Link>
                </li>
                <li className="text-[#f7f3f3] text-[14px]">
                  <Link to="/refund-policy">Refund Policy</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="h-[100%] w-[89%] md:w-[25%]  flex flex-col  ">
            <h2 className="text-[22px] my-2 md:my-4 font-[500] mb-2">
              Contact Us
            </h2>

            <ul className=" space-y-2  text-[#f7f3f3] text-[14px]">
              <li className="flex">
                {" "}
                <p>
                  <GiRotaryPhone className="text-[#00D231] text-3xl" />
                </p>
                <p className="ml-2 text-[15px]">+ 91-9602646089</p>
              </li>
              <li className="flex">
                <p>
                  <GiRotaryPhone className="text-[#00D231] text-3xl" />
                </p>
                <p className="ml-2 text-[15px]">+ 91-9571144478</p>
              </li>
              <li className="flex">
                <p>
                  <HiOutlineMail className="text-[#00D231] text-2xl" />
                </p>
                <p className="ml-2 text-[15px]">ajay.kumar@algodox.co.in </p>
              </li>
              <li className="flex">
                <p>
                  <VscLocation className="text-[#00D231] text-3xl" />
                </p>
                <p className="ml-2 text-[15px]">
                  605, SGH, Vaishali Nagar, Jaipur, India{" "}
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="h-[10] w-full border-t-[1px] border-gray-300 flex justify-center items-center">
          <p className="h-[100%] w-[85%] md:w-[95%] text-[#fff] my-6 text-[12px] md:text-lg  font-normal flex justify-start items-center">
            Copyright © AlgoDox Technology 2023. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
