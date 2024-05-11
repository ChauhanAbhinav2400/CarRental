import { Link } from "react-router-dom";


function Custom() {
  return (
    <div className="h-screen w-full text-black text-sm flex flex-col justify-center items-center border-2 border-green-600">
     
        <div  className="h-[90%] w-[90%] " >
          <div >
            <h1>Top-notch Car Rental Services in various cities of India</h1>
            <p>We provide car rental services to any city in India.</p>
            <Link to="/car-list">
              <button >Book Now</button>
            </Link>
          </div>
        </div>
        <div  >
          <div >
            <h2>Let us assist you in planning your Travel Itinerary</h2>
            <p>
              Take a look at our selection of travel packages and plan your
              travel itinerary with us.
            </p>
            <Link to="/tour-packages">
              <button>Book Now</button>
            </Link>
          </div>
        </div>
        <div
          className="sliderContent"
        >
          <div className="inner">
            <h2>Organize your Events with Our Travel Assistance</h2>
            <p>Rent Cars from us for your Special Occasions and Weddings.</p>
            <Link to="/contact-us">
              <button >Book Now</button>
            </Link>
          </div>
        </div>
    
    </div>
  );
}

export default Custom;