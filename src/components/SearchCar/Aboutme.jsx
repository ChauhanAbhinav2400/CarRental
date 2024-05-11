import React from "react";
import { Link } from "react-router-dom";
import { FaCircle } from "react-icons/fa";

function AboutMe() {
  return (
    <div className="h-auto  w-full flex justify-center items-center ">
      <section className="h-[90%] w-[85%] text-sm my-10  md:mt-10 ">
        {/* <div> */}
        <div className="h-full w-full text-center">
          <h2 className="text-[25px] sm:text-[36px] font-bold text-[#526977] my-8 ">
            Why People Like Us?
          </h2>
        </div>

        <div className="h-auto w-full   flex flex-col md:flex-row  justify-between flex-wrap xl:flex-nowrap md:items-start items-center space-x-4 text-[#617C8D] text-md ">
          <div className="h-auto  w-[300px] sm:w-[450px]  md:w-[305px] xl:w-1/4 mb-8  box-border">
            {/* <FaCircle /> */}
            <h3 className="text-[17.55px]  font-bold text-[#617C8D] ml-8">
              Best Price Guarantee
            </h3>
            <div className="flex  m-2">
              <p className="m-2 text-[#00d231] text-[10px]">
                <FaCircle />
              </p>
              <p className="text-justify leading-[1.8] text-[16px]">
                We strive to deliver superior services to our valued customers
                while keeping our prices competitive and reasonable. We have
                some fantastic deals available that we're sure you'll love.
              </p>
            </div>
          </div>

          <div className="h-auto    w-[300px] sm:w-[450px]  md:w-[305px] xl:w-1/4 mb-8 box-border ">
            <h3 className="text-[17.55px] font-bold text-[#617C8D] ml-8">
              Best Quality Cars
            </h3>
            <div className="flex  m-2">
              <p className="m-2 text-[#00d231] text-[10px]">
                <FaCircle />
              </p>

              <p className="text-justify leading-[1.8] text-[16px]">
                We understand the importance of comfort and hygiene during a
                journey, which can make the experience feel much lighter. We
                ensures a comfortable and hygienic trip.
              </p>
            </div>
          </div>
          <div className="h-auto  w-[300px] sm:w-[450px]  md:w-[305px] xl:w-1/4 mb-8 box-border">
            <h3 className="text-[17.55px] font-bold text-[#617C8D] ml-8">
              City to City
            </h3>
            <div className="flex  m-2">
              <p className="m-2 text-[#00d231] text-[10px]">
                <FaCircle />
              </p>
              <p className="text-justify leading-[1.8] text-[16px] ">
                We are based in Jaipur, Rajasthan and offer services throughout
                the state. Whether you're planning a trip to any of the cities,
                we've got you covered.
              </p>
            </div>
          </div>

          <div className="h-auto   w-[300px] sm:w-[450px]  md:w-[305px] xl:w-1/4 mb-4 box-border">
            <h3 className="text-[17.55px] font-bold text-[#617C8D] ml-8">
              Airport Pickup and Drop
            </h3>
            <div className="flex  m-2">
              <p className="m-2 text-[#00d231] text-[10px]">
                <FaCircle />
              </p>
              <p className="text-justify leading-[1.8] text-[16px] ">
                We offer economical
                <Link>Airport pickup and drop services</Link>
                from any location in Jaipur City
              </p>
            </div>
          </div>
        </div>

        <div className="h-auto w-full flex flex-col md:flex-row  justify-between flex-wrap xl:flex-nowrap space-x-4  md:items-start items-center text-[#617C8D] text-md ">
          <div className="h-auto     w-[300px] sm:w-[450px]  md:w-[305px] xl:w-1/4 mb-8 box-border ">
            <h3 className="text-[17.55px] font-bold text-[#617C8D] ml-8">
              Rent Cars for Events
            </h3>
            <div className="flex  m-2">
              <p className="m-2 text-[#00d231] text-[10px]">
                <FaCircle />
              </p>
              <p className="text-justify leading-[1.8] text-[16px]">
                For your special occasions and weddings, choose us as your Rent
                A Car in Jaipur. We offer a wide selection of cars to
                accommodate any number of guests, ensuring convenience for all
                your special events.
              </p>
            </div>
          </div>

          <div className="h-auto   w-[300px] sm:w-[450px]  md:w-[305px] xl:w-1/4 mb-8 box-border ">
            <h3 className="text-[17.55px] font-bold text-[#617C8D] ml-8">
              Tour Package
            </h3>
            <div className="flex  m-2">
              <p className="m-2 text-[#00d231] text-[10px]">
                <FaCircle />
              </p>
              <p className="text-justify leading-[1.8] text-[16px]">
                Browse through our array of Affordable Rental Car Services in
                Jaipur and confirm your travel arrangements with us. We offer
                pre-arranged travel itineraries, and we also provide customized
                plans tailored to your preferences and convenience.
              </p>
            </div>
          </div>
          <div className="h-auto     w-[300px] sm:w-[450px]  md:w-[305px] xl:w-1/4 mb-8 box-border">
            <h3 className="text-[17.55px] font-bold text-[#617C8D] ml-8">
              Hygiene First
            </h3>
            <div className="flex  m-2">
              <p className="m-2 text-[#00d231] text-[10px]">
                <FaCircle />
              </p>
              <p className="text-justify leading-[1.8] text-[16px]">
                We make sure to wash and sanitize our cars thoroughly after
                every trip. Additionally, our drivers prioritize proper
                sanitization during the trip to ensure the safety and health of
                our passengers.
              </p>
            </div>
          </div>

          <div className="h-auto     w-[300px] sm:w-[450px]  md:w-[305px] xl:w-1/4 mb-8 box-border">
            <h3 className="text-[17.55px] font-bold text-[#617C8D] ml-8">
              24/7 Customer Support
            </h3>
            <div className="flex  m-2">
              <p className="m-2 text-[#00d231] text-[10px]">
                <FaCircle />
              </p>
              <p className="text-justify leading-[1.8] text-[16px] ">
                We are here to serve you anytime, day or night. Simply give us a
                call to book your car and we will deliver it right to your
                doorstep.
              </p>
            </div>
          </div>
        </div>

        {/* </div> */}
      </section>
    </div>
  );
}

export default AboutMe;
