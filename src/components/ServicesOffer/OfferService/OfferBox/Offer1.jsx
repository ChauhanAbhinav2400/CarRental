import React from "react";
import CarBookingWithPhone from "../../../../ImagesFile/Phonebooking.png";

export default function ActionAreaCard() {
  return (
    <div className="max-w-96 mx-auto mb-8">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden h-80 overflow-y-auto">
        <img
          className="w-full max-h-56 object-cover object-center"
          src={CarBookingWithPhone}
          alt="Phone Reservation"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-center">
            Phone Reservation
          </div>
          <p className="text-gray-700 text-base text-center">
            We offer round-the-clock availability to book your reservation
            either through our website or by giving us a call.
          </p>
        </div>
      </div>
    </div>
  );
}
