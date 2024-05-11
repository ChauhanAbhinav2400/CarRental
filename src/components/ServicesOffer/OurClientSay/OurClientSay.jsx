import React from "react";
import SliderBox from "../OurClientSay/boxClientSay";
function OurClientSay() {
  return (
    <div>
      <section className="bg-white pt-8">
        <div className="w-full mb-[60px]">
          <div className="text-center relative z-1">
            <h6 className="text-[35px] font-bold text-gray-700 pt-[15px]">
              What Our Client Say
            </h6>
            <span className=" w-full absolute top-2/4 -z-1 transform -translate-y-1/2 -translate-x-1/2 text-neutral-400 font-extrabold opacity-15 text-[65px]">
              Client Review
            </span>
          </div>
        </div>
        <SliderBox />
      </section>
    </div>
  );
}

export default OurClientSay;
