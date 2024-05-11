import React from "react";
import Offer1 from "./OfferBox/Offer1";
import Offer2 from "./OfferBox/Offer2";
import Offer3 from "./OfferBox/Offer3";
import Offer4 from "./OfferBox/Offer4";
import Offer5 from "./OfferBox/Offer5";
import Offer6 from "./OfferBox/Offer6";

function PopularTour() {
  return (
    <div>
      <section className="bg-white pt-8">
        <div className="w-full mb-[60px]">
          <div className="text-center relative z-1">
            <h6 className="text-[40px] font-bold text-gray-700">
              What We Offer
            </h6>
            <span className=" w-full absolute top-2/4 -z-1 transform -translate-y-1/2 -translate-x-1/2 text-neutral-400 font-extrabold opacity-15 text-[65px]">
              What We Offer
            </span>
          </div>
        </div>
        <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
            <div className="flex justify-center">
              <Offer1 />
            </div>
            <div className="flex justify-center">
              <Offer2 />
            </div>
            <div className="flex justify-center">
              <Offer3 />
            </div>
            <div className="flex justify-center">
              <Offer4 />
            </div>
            <div className="flex justify-center">
              <Offer5 />
            </div>
            <div className="flex justify-center">
              <Offer6 />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PopularTour;
