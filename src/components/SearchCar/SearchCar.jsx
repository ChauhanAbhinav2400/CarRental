import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";
import { IoIosSearch } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { CarRentalServiceCityList } from "../../Redux/actions/carRentalServiceCityList.action";
import { CarRentalServiceSearchCar } from "../../Redux/actions/carRentalServiceSearchCar.action";
import { useNavigate } from "react-router-dom";

function SearchCar({Token}) {
     
  const [pickupDate,setPickupDate]=useState(new Date())
    const [dropDate,setDropDate]=useState(new Date())
    const [filterCity, setFiterCity]=useState([])

    let pickdate =
   pickupDate.getFullYear() +
   "-" +
   parseInt(pickupDate.getMonth() + 1) +
   "-" +
   pickupDate.getDate();

   let dropdate =
    dropDate.getFullYear() +
    "-" +
    parseInt(dropDate.getMonth() + 1) +
    "-" +
    dropDate.getDate();
   
   const [inputData,setInputData]= useState({
    pickupLocation:"",
    dropLocation:"",
    pickupDate:pickdate,
    pickupTime:"",
    dropDate:dropdate,
    dropTime:""
   })
   
   const [dropDownOne,setdropDownOne]=useState(false)
   const [dropDownTwo,setdropDownTwo]=useState(false)
   const [validation,setValidation]=useState(true)

  const dispatch= useDispatch()
  const navigate=  useNavigate()

  const cityData= useSelector(state=>state.CarRentalServiceCityList.city)
  
   
   

   const locationOnchangeHandler=(e)=>{
        setInputData({...inputData,[e.target.name]:e.target.value})
       
        const filterCityData =cityData.filter((city) => {
          return city.cityNm.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase());
        });

        setFiterCity(filterCityData)
        
        
   }

   const dateAndTimeOnchangeHandler=(e)=>{
    setInputData({...inputData,[e.target.name]:e.target.value})
    
}
    
   const selectDropLocationHandler=(cityNm)=>{
        inputData.dropLocation=cityNm
        setdropDownTwo(false)

        
   }

   const selectPickupLocationHandler=(cityNm)=>{
       inputData.pickupLocation=cityNm
       setdropDownOne(false)
       
   }

      const findNowHandler=(e)=>{
            e.preventDefault()
            if(inputData.pickupLocation==="" || inputData.dropLocation===""){
              setValidation(false)
            
            }else {
              
              setValidation(true)
              dispatch(CarRentalServiceSearchCar(inputData,Token))
              navigate("/cars-search")
 
              
            }
            setInputData({
              pickupLocation:"",
              dropLocation:"",
              pickupDate:"",
              pickupTime:"",
              dropDate:"",
              dropTime:""
             })
      }

  return (
     <div className="h-auto  w-full border-b-4 border-[#00D231]">
      <div className="h-[75%] mt-[-7px] w-full bg-[#00D231] flex justify-center items-center border-2 border-[#00D231]">
          <div className="h-full w-[90%]   flex flex-col justify-evenly text-white items-center">
                 <h2 className="w-full  text-center h-14 my-8 flex justify-center items-start text-[#f5f2f2] text-3xl font-bold " >
                   Search & Book your Car
                 </h2>



                 <div className="w-[60%] sm:w-full flex  flex-col xl:flex-row  justify-between space-y-4 xl:space-y-0 xl:space-x-10 my-5">
                   <form className="flex space-y-4 sm:space-y-0 sm:space-x-10 flex-col sm:flex-row">
                    <div className="flex flex-col h-auto w-full xl:w-[250px] ">
                      <label className="w-full text-md font-bold  text-[#f4f0f0cc]">Pickup Location</label>
                       <div  className={validation ? "w-full  bg-[#00D231] outline-none border-[2px] text-lg border-[rgba(255, 255, 255, 0.5)] rounded-sm px-2 py-[7px] flex  justify-between items-center " : "w-full  bg-[#00D231] outline-none border-[2px] border-[#fba707]   text-lg border-[rgba(255, 255, 255, 0.5)] rounded-sm px-2 py-[7px] flex  justify-between items-center "}>
                       {
                             inputData.pickupLocation.length < 4 ? <label className=" w-full" onClick={()=>setdropDownOne(!dropDownOne)} >Pickup Location</label> : inputData.pickupLocation
                        }
                      
                        {
                      !dropDownOne ?  <RiArrowDropDownLine  className="text-2xl" onClick={()=>setdropDownOne(true)} /> : <RiArrowDropUpLine  className="text-2xl" onClick={()=>setdropDownOne(false)} />
                        } 
                       </div>
                       {  
                       dropDownOne && (
                        <ul className="w-full  bg-[#00D231] outline-none border-[2px] text-lg border-[rgba(255, 255, 255, 0.5)] rounded-sm mt-[4px]">
                        <div className=" h-[45px] w-full flex pl-2" >
                         <div className="w-full border-b-[1.5px] border-[#f4f0f0cc] flex justify-center items-center">
                        <input  style={{backgroundColor:"#00D231" ,color:"white",outline:"none"}}  className="h-[35px] w-[80%] placeholder:text-white text-white focus:outline-none pl-2 "  type="text" class="DropdownInput" placeholder="Search City" name="pickupLocation" value={inputData.pickupLocation} onChange={ locationOnchangeHandler}/>
                        <IoIosSearch />
                        </div>
                        </div>
                        {
                          filterCity.map((cty,index)=>{
                          return (
                            <li className="h-[35px] w-full text-[15px]  pl-4  hover:bg-[#02141f]" key={index} onClick={()=>selectPickupLocationHandler(cty.cityNm)} >{cty.cityNm}</li>
                          )  
                        })
                        }
                        {
                          cityData.slice(0,4).map((item,index)=>{
                              return (
                                <li className="h-[35px] w-full text-[15px]  pl-4  hover:bg-[#02141f]" key={index} onClick={()=>selectPickupLocationHandler(item.
                                  cityNm)} >{item.
                                  cityNm}</li>
                              )
                          })
                        }
                       </ul>
                       )  }
                    </div>
                      <div className="flex flex-col h-auto w-full xl:w-[250px] ">
                      <label className="w-full text-md font-bold  text-[#f4f0f0cc]">Drop Location</label>
                       <div className={validation ? "w-full  bg-[#00D231] outline-none border-[2px] text-lg border-[rgba(255, 255, 255, 0.5)] rounded-sm px-2 py-[7px] flex  justify-between items-center " : "w-full  bg-[#00D231] outline-none border-[2px] border-[#fba707]   text-lg border-[rgba(255, 255, 255, 0.5)] rounded-sm px-2 py-[7px] flex  justify-between items-center "}>
                       {
                             inputData.dropLocation.length < 4 ? <label className="w-full " onClick={()=>setdropDownTwo(!dropDownTwo)}>Drop Location</label> : inputData.dropLocation
                        }
                      
                        {
                      !dropDownTwo ?  <RiArrowDropDownLine className="text-2xl" onClick={()=>setdropDownTwo(true)}/> : <RiArrowDropUpLine className="text-2xl" onClick={()=>setdropDownTwo(false)} />
                        } 
                       </div>
                       {  
                       dropDownTwo && (
                        <ul className="w-full  bg-[#00D231] outline-none border-[2px] text-lg border-[rgba(255, 255, 255, 0.5)] rounded-sm mt-[4px]">
                        <div className=" h-[45px] w-full flex pl-2" >
                         <div className="w-full border-b-[1.5px] border-[#f4f0f0cc] flex justify-center items-center">
                        <input style={{backgroundColor:"#00D231" ,color:"white",outline:"none"}}  className="h-[35px] w-[80%] text-white placeholder:text-white  pl-2 "  type="text" class="DropdownInput" placeholder="Search City" name="dropLocation" value={inputData.dropLocation} onChange={locationOnchangeHandler}/>
                        <IoIosSearch />
                        </div>
                        </div>
                        {
                          filterCity.map((cty,index)=>{
                          return (
                            <li className="h-[35px] w-full text-[15px]  pl-4  hover:bg-[#02141f]" key={index} onClick={()=>selectDropLocationHandler(cty.cityNm)} >{cty.cityNm}</li>
                          )  
                          })
                        }
                        {
                          cityData.slice(0,4).map((item,index)=>{
                              return (
                                <li className="h-[35px] w-full text-[15px]  pl-4  hover:bg-[#02141f]" key={index} onClick={()=>selectDropLocationHandler(item.
                                  cityNm)} >{item.
                                  cityNm}</li>
                              )
                          })
                        }
                       </ul>
                       )
                        
                       }
                       
                      </div>

                
                      </form>

                      <form className="flex space-y-4 sm:space-y-0 sm:space-x-10 flex-col sm:flex-row">
                      <div className="flex flex-col h-auto w-full">
                      <div className="flex justify-center items-center w-full">

                      <div className="h-auto w-1/2">  
                      <label className="w-full text-md font-bold  text-[#f4f0f0cc]">Pickup Date</label>
                      <input autoComplete="off" className="w-full  bg-[#00D231] outline-none border-[1px] text-lg border-[#f4f0f0cc] rounded-sm px-2 py-2" type="date" name="pickupDate" value={inputData.pickupDate} onChange={dateAndTimeOnchangeHandler} /> 
                      </div>

                      <div className=" h-auto w-1/2">

                      <label className="w-full text-md font-bold  text-[#f4f0f0cc]">Time</label>
                      <input   className="w-full  bg-[#00D231] outline-none border-[1px] text-lg border-[#f4f0f0cc] rounded-sm px-2 py-2" type="time" name="pickupTime" value={inputData.pickupTime} onChange={dateAndTimeOnchangeHandler}/> 


                       </div>
                       </div>

                      </div>

                      <div className="flex flex-col h-auto w-full">
                        <div className="flex  justify-center items-center w-full">
                          <div className="h-auto w-1/2">  

                      <label className="w-full text-md font-bold  text-[#f4f0f0cc]">Drop Date</label>
                      <input autoComplete="off"  className=" w-full bg-[#00D231] outline-none border-[1px] text-lg border-[#f4f0f0cc] rounded-sm px-2 py-2" type="date" name="dropDate" value={inputData.dropDate} onChange={dateAndTimeOnchangeHandler} /> 

                      </div>
                      <div className=" h-auto w-1/2">

                      <label className="w-full text-md font-bold  text-[#f4f0f0cc]">Time</label>
                      <input  className=" w-full bg-[#00D231] outline-none border-[1px] text-lg border-[#f4f0f0cc] rounded-sm px-2 py-2" type="time" name="dropTime" value={inputData.dropTime} onChange={dateAndTimeOnchangeHandler}/> 


                       </div>
                       </div>

                      </div>

                   </form>
                 </div>
                 <div className="w-full h-auto text-center flex justify-center items-center my-10">
                   <button  className="h-12 w-[150px] bg-[#fba707] space-x-1 text-[17px] rounded-[0.3rem] border-[2px] border-[#06f806] text-[#fff] font-medium flex justify-center items-center"  onClick={findNowHandler}>
                    
                  <span><FaSearch /></span> <span>Find Now</span>
                 
                    </button>
                 </div>
          </div>
         
      </div> 
      <div>
      <div className="bg-[#00D231]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
          fill="white"
        >
          <path d="M500.2,94.7L0,0v100h1000V0L500.2,94.7z"></path>
        </svg>
      </div>
      </div>
      
     </div>
  )
}

export default SearchCar;
