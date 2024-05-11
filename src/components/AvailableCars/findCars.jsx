import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import img from "../../ImagesFile/page-titlebar.png"
import { IoIosPeople } from "react-icons/io";
import { BsFillLuggageFill } from "react-icons/bs";
import { FaRupeeSign } from "react-icons/fa";
import { BsFillFuelPumpDieselFill } from "react-icons/bs";
import { FaFan } from "react-icons/fa";
import Footer from "../footer/footer";
import CarBoocking from "./carBoocking";
import Loader from "../loaderSppiner/loader";
import withTokenHandler from "../../globalTokenGenerated";

function FindCars({ token, tokenExpiration, generateTokenAndUpdateState } ){
       
     const [Token,setToken]=useState()
    
     const [show,setShow]=useState(false)
     const [carRentalInfo,setCarRentalInfo]=useState(null)
    const searchCar= useSelector(state=>state.CarRentalServiceSearchCar.searchCar)
    const carDetails= useSelector(state=>state.CarRentalServiceSearchCar.carDetails)



    useEffect(() => {
      const fetchData = async () => {
        const storedToken = localStorage.getItem("NewToken");
        if (storedToken) {
          await fetchDataWithToken(storedToken);
        } else {
          generateTokenAndUpdateState().then((token) => {
            fetchDataWithToken(token);
          });
        }
      };
  
      fetchData();
    }, [token]);

    const fetchDataWithToken = async (token) => {
      setToken(token)
    };

    const bookNowHandler=(car)=>{
      setShow(true)
      setCarRentalInfo(car)
    }
    return(
        <>
        <div className="h-auto w-full   bg-[#eee] flex flex-col justify-center items-center">
          <div className="h-[470px] w-full relative">
            <div className="h-full w-full absolute">
              <img className="h-full w-full" src={img}/>
            </div>
  
            <div className="h-full w-full absolute bg-[#112E3BD8] flex justify-center items-center pt-[110px]">
                  <div className=" h-[200px] w-[90%] text-white  flex flex-col justify-center items-center space-y-4">
                    <h2 className="text-3xl font-bold">Cars Search</h2>
                    <p className="text-xl font-normal text-center">Select the perfect car for your family and friends to ensure an enjoyable journey.</p>
                  </div>
            </div>
        </div>
            <div className="h-auto w-[90%]   my-4 flex flex-wrap justify-between">
              {
                searchCar.length<1 ? <Loader/> : (
                  <>
                    {
                    searchCar.map((car,index)=>{
                       return (
  
                        <div className="h-[430px] w-[360px]  bg-white my-8 border-[1.5px] rounded-md border-b-gray-400 hover:scale-110" key={index}>
                        <div className="h-[45%] w-full ">
                         <img className="h-full w-full" src={car.imgUrl} />
                        </div>
  
  
                        <div className="h-[40%]">
                          <h2 className="h-[50px] w-[90%]  flex justify-center items-center  text-[#112E3B] text-[22px] ml-0 sm:ml-10">{car.oemNm}</h2>
  
                          <div className=" h-[70%] w-full flex justify-center items-center ">
                            <div className="h-full w-[40%] flex flex-col  text-[17px]  justify-center items-start">
                                    <p className="flex items-center space-x-2 text-[#6c757d]">
                                    <IoIosPeople className="text-[#37a81a]"/>
                                    <h3>{car.noOfPsgnr}  Passengers</h3> 
                                     </p>
                                    <p className="flex items-center space-x-2 text-[#6c757d] text-[17px]">
                                    <BsFillFuelPumpDieselFill className="text-[#37a81a]" />
                                     <h3>Petrol</h3> 
                                      </p>
                                    <p className="flex items-center space-x-2 text-[#6c757d] text-[17px]">
                                    <FaFan className="text-[#37a81a]"/>
                                      <h3>A.C.</h3>
                                      </p>
                              </div>
                              <div className="h-full w-[40%] flex flex-col justify-center items-center">
                               <p className="w-full text-center text-xl text-gray-900">From</p> 
                              <div className="w-full  flex justify-center items-center ">
                               <FaRupeeSign />
                               <p className="text-3xl font-semibold">{Math.floor(car.perKmPrice)}<span className="text-sm font-medium">/KM</span></p>
                               </div>
                              </div>
                          </div>
                        </div>
                      
                        <div className="h-[15%] w-full flex flex-col justify-center  items-center text-2xl ">
                               
                      
                             <button className="bg-[#37A81A] text-white text-lg p-[6px] px-4 hover:border-2 hover:border-[#37A81A] hover:text-[#37A81A] hover:bg-[white] rounded-md" onClick={()=>bookNowHandler(car)}>Book Now</button>
                
                         </div>

                   </div>
                       )
                    })
                   }
                  </>
                )
              }
             
                  
                
            </div> 
        </div>
            {
              show &&  <CarBoocking show={()=>setShow(false)} carDetails={carDetails} carRentalInfo={carRentalInfo} Token={Token} />
            }
         <Footer/>
      </>
    )
}



const FindCarsPageWithTokenHandler = withTokenHandler(FindCars);
export default FindCarsPageWithTokenHandler;
