import React from "react";
import offer9 from "../../../../ImagesFile/offer9.png";

export default function ActionAreaCard() {
  return (
    <div className="max-w-96 mx-auto mb-8">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden h-80 overflow-y-auto">
        <img
          className="w-full max-h-56 object-cover object-center"
          src={offer9}
          alt="Customized Tour Packages"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-center">
            Customized Tour Packages
          </div>
          <p className="text-gray-700 text-base text-center">
            We offer personalized tour packages that can be tailored to suit
            individual preferences and needs. Our clients can choose from a
            range of activities, destinations, and accommodations to create
            their ideal itinerary. With our customized tour packages, travelers
            can have a unique and unforgettable experience that perfectly fits
            their interests and budget.
          </p>
        </div>
      </div>
    </div>
  );
}
