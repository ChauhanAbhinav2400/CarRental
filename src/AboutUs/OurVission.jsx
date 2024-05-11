import React from "react";
import { FaCircle } from "react-icons/fa";

function OurVission() {
  return (

    <div >
    <section className="bg-gray-50 overflow-hidden pb-5">
      <div>
        <div className=" text-center p-0 text-3xl font-bold mt-[12px]  mb-[10px]  font-serif  text-[#526977]">
          <h2>Our Vision</h2>
        </div>
<div className="flex flex-wrap justify-center mt-4 gap-y-8 lg:gap-y-0 lg:gap-x-12">
  <div className="w-full sm:w-1/2 lg:w-1/6 ">
    <div className=" flex p-4 rounded-md">

      <div>
      <div className='icon'><i>< FaCircle className="mr-2 text-[#00d231] w-3 h-3 " /></i>Best Price Guarantee</div>
        <p className="text-sm">We strive to deliver superior services to our valued customers while keeping our prices competitive and reasonable. We have some fantastic deals available that we're sure you'll love.</p>
      </div>
    </div>
  </div>
  <div className="w-full sm:w-1/2 lg:w-1/6">
    <div className=" p-4 ">
      <div>
      <div className='icon '><i>< FaCircle className="mr-2 text-[#00d231]  w-3 h-3 " /></i>Best Quality Cars</div>

        <p className="text-sm">We understand the importance of comfort and hygiene during a journey, which can make the experience feel much lighter. We ensure a comfortable and hygienic trip.</p>
      </div>
    </div>
  </div>
  <div className="w-full sm:w-1/2 lg:w-1/6">
    <div className=" p-4 ">
      <div>
      <div className='icon'><i>< FaCircle className="mr-2 text-[#00d231] w-3 h-3" /></i>City to City</div>

        <p className="text-sm">We are based in Jaipur, Rajasthan and offer services throughout the state. Whether you're planning a trip to any of the cities, we've got you covered.</p>
      </div>
    </div>
  </div>
  <div className="w-full sm:w-1/2 lg:w-1/6">
    <div className=" p-4 ">
      <div>
      <div className='icon'><i>< FaCircle className="mr-2 text-[#00d231] w-3 h-3 " /></i>Customer Support</div>

        <p className="text-sm">We are here to serve you anytime, day or night. Simply give us a call to book your car and we will deliver it right to your doorstep.</p>
      </div>
    </div>
  </div>
</div>

      </div>
    </section>
  </div>

  );
}

export default OurVission;
