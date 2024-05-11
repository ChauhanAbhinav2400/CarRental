import React from "react";
import airpot from "../../../../ImagesFile/airpot.png";

export default function ActionAreaCard() {
  return (
    <div className="max-w-96 mx-auto mb-8">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden  h-80 overflow-y-auto">
        <img
          className="w-full max-h-56 object-cover object-center"
          src={airpot}
          alt="Airport"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-center">
            Airport Pickup and Drop
          </div>
          <p className="text-gray-700 text-base text-center">
            We offer economical Airport pickup and drop services from any
            location in Jaipur City.
          </p>
        </div>
      </div>
    </div>
  );
}
