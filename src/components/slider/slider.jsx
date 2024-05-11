import imgOne from "../../ImagesFile/slideImg/slide1.png"
import imgTwo from "../../ImagesFile/slideImg/slide4.png"
import imgThree from "../../ImagesFile/slideImg/slide5.png"

export const sliderImg=[
  {img:imgOne,
    headding:"Top-notch Car Rental Services in various cities of India",
    paragraph:"We provide car rental services to any city in India.",
    link:"/car-list"

},{ img:imgTwo,
  headding:"Let us assist you in planning your Travel Itinerary",
  paragraph:"Take a look at our selection of travel packages and plan your travel itinerary with us.",
  link:"/tour-packages"
},{ img:imgThree,
  headding:"Organize your Events with Our Travel Assistance",
  paragraph:"Rent Cars from us for your Special Occasions and Weddings.",
  link:"/contact-us"

}]

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";
import { useRef } from "react";
import { Link } from "react-router-dom";


function SliderPage(){


let sliderRef = useRef(null);
const next = () => {
  sliderRef.slickNext();
};
const previous = () => {
  sliderRef.slickPrev();
};

    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true
      };

    return(
        <>
        <div className="h-auto w-full flex flex-col justify-center items-center">
         <div className="h-[100%] w-[100%]  relative overflow-hidden">
            <Slider 
              ref={slider => {
                sliderRef = slider;
              }}
            {...settings}
            >
        {
            sliderImg.map((data,index)=>{
             
                return (
                      <div className="h-[530px] lg:h-[600px] 2xl:h-screen w-full" key={index}>
                    <img className="h-[100%] w-full bg-no-repeat bg-cover bg-center"  src={data.img} />
                    <div className="h-[430px] sm:h-[300px] 2xl:h-[600px] w-[100vw] text-center  absolute  top-[100px] sm:top-[150px] lg:top-[180px] 2xl:top-1/3  flex flex-col justify-center items-center 2xl:space-y-[40px]">
                    <h2 className="text-4xl sm:text-5xl text-white font-bold self-center text-center  my-8 lg:my-10 px-10">{data.headding}</h2>
                    <p className="text-xl text-white font-semibold text-center">{data.paragraph}</p>
                    <div className="w-full pt-10 text-center">
                      <Link  to={data.link} className="font-semibold text-lg cursor-pointer p-[10px] rounded-sm px-6 bg-[#00D231]  text-white">Book Now</Link>
                    
                    </div>
                    </div>
                    </div>
                )
            })
        }
        </Slider>
        <div className="w-full absolute inset-0 flex justify-between items-center p-4 text-6xl text-[#09e22da9]">
                          <button ><GrFormPrevious onClick={previous}  /></button>
                          <button><GrFormNext  onClick={next} /></button>
                    </div>
        </div>
        </div>
        </>
    )
}

export default SliderPage
