import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { CarRentalServiceCarBoocking } from "../../Redux/actions/carRentalServiceCarBooking.action";
import { useDispatch } from "react-redux";



function CarBoocking({ show,carDetails,carRentalInfo,Token}) {
      
    
    const {pickupLocation,dropLocation,pickupDate,pickupTime,dropDate,dropTime}=carDetails
    const {vendorId,vendorNm,id,perKmPrice}=carRentalInfo
    const [successBocking,setSuccessBocking]=useState(false)

    const [inputData,setInputData]=useState({
        name:"",
        email:"",
        mobNo:"",
        rentalCarId:id,
        rentalCarNo:"",
        sourceCityNm:pickupLocation,
        destCityNm:dropLocation,
        toDate:pickupDate,
        fromDate:dropDate,
        pickTime:pickupTime,
        dropTime:dropTime,
        vendorId:vendorId,
        vendorMobNo:"",
        driverNo:"",
        totalFare:0,
        perKmPrice:0,
        startTripInfo:"",
        endTripInfo:"",
        customerInfo:""
    })

   const dispatch= useDispatch()

  const  inputOnChnageHandler=(e)=>{
        setInputData({...inputData,[e.target.name]:e.target.value})
  }
  
 

  const submitHandler=(e)=>{
    e.preventDefault()
    dispatch(CarRentalServiceCarBoocking(inputData,Token))
   
    setInputData({
        name:"",
        email:"",
        mobileNumber:""
    })
   
    setSuccessBocking(true)
   
   
  }

  const cancelHandler=()=>{
    setInputData({
        name:"",
        email:"",
        mobileNumber:""
    })
    show()
  }

  const closeBoockingHandler=()=>{
    show()
  }

    return (
        <>
            <div className="h-screen w-full flex bg-[#00000066] justify-center items-center z-50 fixed top-[0px]">
                <div className="h-[60%] w-[95%] md:w-[70%] md:h-[80%] xl:w-[45%] z-1 mt-20 bg-white flex justify-center items-center flex-col">
                    <div className="h-[17%] w-full bg-[#eee]  flex justify-center items-center">
                        <h2 className=" h-full w-[500px]  text-xl font-bold text-[#555] flex justify-center items-center text-center">Hire your Car with us and enjoy your Trip</h2>
                        <p className="h-full w-[60px]  flex justify-center items-center ">
                            <IoClose className=" text-3xl text-[#9c9b9b] font-bold mt-6 ml-4 cursor-pointer " onClick={()=>closeBoockingHandler()} />
                        </p>

                    </div>

                    <form className="h-[83%] w-[90%] my-8 justify-evenly flex flex-col " onSubmit={submitHandler}>
                        <div className="space-y-2">
                        <label className="text-xl text-[#526977]">Full Name</label><br/>
                        <input autoComplete="off" required type="text" className="h-12 text-md font-normal w-full border-[1.5px] outline-none border-[#37a81a] rounded-md" name="name" value={inputData.name} onChange={inputOnChnageHandler} />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xl text-[#526977]">Your Email</label><br/>
                        <input autoComplete="off" required type="email" className="h-12  text-md font-normal w-full border-[1.5px] outline-none border-[#37a81a] rounded-md"  name="email" value={inputData.email} onChange={inputOnChnageHandler} />
                   </div>
                   <div className="space-y-2">
                        <label className="text-xl text-[#526977]">Mobile Number</label>
                        <input autoComplete="off" required type="text"  className="h-12  text-md font-normal w-full border-[1.5px] outline-none border-[#37a81a] rounded-md" name="mobNo" value={inputData.mobileNumber} onChange={inputOnChnageHandler} />
                    </div>
                        <div className="h-[80px] w-full flex justify-center items-center  space-x-4">
                            <button className="bg-[#00d231] p-2 px-6 text-white rounded-sm" type="submit">Submit</button>
                            <button className="bg-[#526977] p-2 px-6 text-white rounded-sm" onClick={()=>cancelHandler()}>Cancel</button>
                        </div>
                    </form>
                     
                     {
                        successBocking && (
                            <div className="h-full w-full bg-[#00000066] fixed z-52 flex justify-center items-center">
                            <div className="h-[240px] w-[500px] lg:w-[700px]  xl:w-[550px] 2xl:h-[300px] 2xl:w-[700px] bg-white rounded-xl flex justify-center items-center ">
                <div className="w-[90%] h-full flex flex-col justify-evenly items-center">
                    <h2 className="text-3xl font-bold text-gray-600">Thank you!</h2>
                    <p className="text-2xl font-medium text-gray-500  text-center">We have recieved your details. Our repressentative will contact you soon.</p>
                   
                    <button  className="p-[10px] text-md font-medium px-6 bg-blue-500 border-4 border-blue-300 text-white rounded-md" onClick={()=>setSuccessBocking(false)}>OK</button>
                   
                </div>
             </div>
             </div>
        
                        )
                     }
                  



                </div>
                </div> 
          
          
   

      
        </>
    )
}

export default CarBoocking