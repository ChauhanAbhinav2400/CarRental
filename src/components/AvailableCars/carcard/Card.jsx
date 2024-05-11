import { useEffect } from "react";
import { CarRentalServiceCars } from "../../../Redux/actions/carRentalServiceCarFeature.action";
import { useDispatch, useSelector } from "react-redux";
import { FaRupeeSign } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { BsFillLuggageFill } from "react-icons/bs";
import { BsFillFuelPumpDieselFill } from "react-icons/bs";
import { FaFan } from "react-icons/fa";
import Loader from "../../loaderSppiner/loader";


function MediaCard({show,Token}) {
      
   const dispatch=  useDispatch()
     const Data= useSelector(state=>state.CarRentalServiceCars)
     
     

     const showModal=()=>{
      show()
     }

 useEffect(()=>{
    dispatch(CarRentalServiceCars(Token))
 },[Token])

  return (
    <>
    <div className="h-full w-full bg-[#F4F8F9]  rounded-md  flex flex-col  space-y-8">
            {
              Data.cars.length<1  ? <Loader/> :(

                <>
                  {
               Data.cars.map((data,index)=>{
                     return (
                         <div className="h-[550px] sm:h-[230px] w-full bg-white rounded-md flex  flex-col sm:flex-row justify-between items-center border-b-[2px] border-gray-300" key={index}>
                            <div className="h-[56%] w-[90%] sm:h-full sm:w-[30%] flex justify-center items-center">
                               <img className="h-full w-full" src={data.imgUrl}/>
                            </div>
                            
                            <div className="h-[25%] w-[90%] sm:h-full  sm:w-[50%] flex flex-col justify-center items-center text-3xl ">
                             
                              <p className="h-[50px] w-[90%]  flex justify-center sm:justify-start  items-center  text-[#112E3B] text-[26px] ml-0 sm:ml-10">{data.oemNm}</p>
                           
                              <div className=" h-[70px] w-[90%] flex flex-wrap justify-evenly text-[17px] ">
                                   <p className="flex items-center space-x-2 text-[#6c757d]">
                                   <IoIosPeople className="text-[#37a81a]"/>
                                   <span>{data.noOfPsgnr} Passengers</span> 
                                    </p>
                                   <p className="flex items-center space-x-2 text-[#6c757d] text-[17px]">
                                   <BsFillLuggageFill className="text-[#37a81a]"  />
                                    <span>{data.noOfDoors} Luggages</span>
                                    </p>
                                    <p className="flex items-center space-x-2 text-[#6c757d] text-[17px]">
                                  <BsFillFuelPumpDieselFill className="text-[#37a81a]" />
                                   <span>Petrol</span> 
                                    </p>
                                    <p className="flex items-center space-x-2 text-[#6c757d] text-[17px]">
                                  <FaFan className="text-[#37a81a]"/>
                                    <span>A.C.</span>
                                    </p>
                              </div>



                            </div>
                            <div className="h-[25%] w-[90%] sm:h-full sm:w-[20%] flex flex-col justify-center space-y-6  items-center text-2xl ">
                              <div className="flex justify-center items-center">
                              <FaRupeeSign  className="text-[2rem] font-[600] text-[#112e3b]"/>
                              <p className="text-[2rem] font-[600] text-[#112e3b] ">{Math.floor(data.perKmPrice)}<span className="text-sm font-medium">/KM</span></p>
                              </div>
                              
                              <button className="bg-[#37A81A] text-white text-lg p-2 px-4 rounded-md hover:border-2 hover:border-[#37A81A] hover:text-[#37A81A] hover:bg-[white]"  >Book Now</button>
                            </div>

                         </div>
                     )
               })
             }
                </>
              )
            }
           
         </div>
         
     

    </>
    
  );
}
export default MediaCard