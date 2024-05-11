import React from "react";
import Youngman from "../../../../ImagesFile/CustomerSupport.png";

export default function ActionAreaCard() {
  return (
    <div className="max-w-96 mx-auto mb-8 ">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden h-80 overflow-y-auto">
        <img
          className="w-full max-h-56 object-cover object-center"
          src={Youngman}
          alt="Youngman"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-center">
            Customer Support
          </div>
          <p className="text-gray-700 text-base text-center">
            If you have any problems or questions, our team is available to help
            you. Simply send us a message or give us a call, and we will assist
            you in any way we can.
          </p>
        </div>
      </div>
    </div>
  );
}
