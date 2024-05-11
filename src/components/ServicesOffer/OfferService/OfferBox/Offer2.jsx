import React from "react";
import BestPriceGuarantee from "../../../../ImagesFile/BestPriceGuarantee.png";

export default function ActionAreaCard() {
  return (
    <div className="max-w-96 mx-auto mb-8">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden  h-80 overflow-y-auto">
        <img
          className="w-full max-h-56 object-cover object-center"
          src={BestPriceGuarantee}
          alt="Best Price Guarantee"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-center">
            Best Price Guarantee
          </div>
          <p className="text-gray-700 text-base text-center">
            We strive to deliver superior services to our valued customers while
            keeping our prices competitive and reasonable. We have some
            fantastic deals available that we're sure you'll love.
          </p>
        </div>
      </div>
    </div>
  );
}
