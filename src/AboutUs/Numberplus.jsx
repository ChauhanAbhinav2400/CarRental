import React, { useState } from "react";
import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";


function Numberplus({ className, ...rest }) {
  const [viewPortEntered, setViewPortEntered] = useState(false);

  return (
    <>
      <section className=" relative  bg-cover h-[220px]" style={{ backgroundImage: 'url("https://di-uploads-pod10.dealerinspire.com/jaguarparamusspanish/uploads/2019/07/2020-jaguar-f-type-white-on-road.jpg")' }}>
      <div className='absolute  bg-[#112e3bd9] w-full h-full opacity-80'></div>

        <div className="mx-auto py-20 z-10 " >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 z-10 " >
            <div className="text-center z-10">
              <strong data-number="310">
                <CountUp {...rest} start={viewPortEntered ? null : 0} end={100}>
                  {({ countUpRef }) => (
                    <ReactVisibilitySensor
                      active={!viewPortEntered}
                      onChange={(isVisible) => {
                        if (isVisible) {
                          setViewPortEntered(true);
                        }
                      }}
                      delayedCall
                    >
                      <span className="text-white " ref={countUpRef} />
                    </ReactVisibilitySensor>
                  )}
                </CountUp>
              </strong>
              <span className="block text-sm mt-2 text-white ">Car For Rent</span>
            </div>

            <div className=" text-center z-10">
              <strong data-number="1250">
                <CountUp {...rest} start={viewPortEntered ? null : 0} end={1000}>
                  {({ countUpRef }) => (
                    <ReactVisibilitySensor
                      active={!viewPortEntered}
                      onChange={(isVisible) => {
                        if (isVisible) {
                          setViewPortEntered(true);
                        }
                      }}
                      delayedCall
                    >
                      <span className="text-white" ref={countUpRef} />
                    </ReactVisibilitySensor>
                  )}
                </CountUp>
              </strong>
              <span className="block text-sm mt-2 text-white">Happy Clients</span>
            </div>

            <div className="text-center z-10">
              <strong data-number="125">
                <CountUp {...rest} start={viewPortEntered ? null : 0} end={500}>
                  {({ countUpRef }) => (
                    <ReactVisibilitySensor
                      active={!viewPortEntered}
                      onChange={(isVisible) => {
                        if (isVisible) {
                          setViewPortEntered(true);
                        }
                      }}
                      delayedCall
                    >
                      <span className="text-white" ref={countUpRef} />
                    </ReactVisibilitySensor>
                  )}
                </CountUp>
              </strong>
              <span className="block text-white text-sm mt-2">Positive Reviews</span>
            </div>

            <div className="text-center z-10">
              <strong data-number="24">
                <CountUp {...rest} start={viewPortEntered ? null : 0} end={100}>
                  {({ countUpRef }) => (
                    <ReactVisibilitySensor
                      active={!viewPortEntered}
                      onChange={(isVisible) => {
                        if (isVisible) {
                          setViewPortEntered(true);
                        }
                      }}
                      delayedCall
                    >
                      <span className="text-white" ref={countUpRef} />
                    </ReactVisibilitySensor>
                  )}
                </CountUp>
              </strong>
              <span className="block text-white text-sm mt-2 ">Drivers</span>
            </div>
          </div>
        </div>
      </section>








    </>
  );
}

export default Numberplus;