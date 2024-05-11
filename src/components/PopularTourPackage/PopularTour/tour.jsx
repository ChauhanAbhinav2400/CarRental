import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PopularTourPackage} from "../../../Redux/actions/popularTourPackage.action"
import Loader from "../../loaderSppiner/loader";

function Tour({Token}){
   
   const dispatch= useDispatch()
    const Data= useSelector(state=>state.popularTourPackage.tour)
    
    
   

   useEffect(()=>{
         dispatch(PopularTourPackage(Token))
   },[Token])

    return(
        <div className="flex flex-col justify-between  space-y-8">

         <div className=" flex justify-center items-start   flex-wrap">
            {
                Data.length<1 ? <Loader/> : (

                    <>
                     {
               Data.map((data,index)=>{
                   return (
                     <div className="h-96 w-[350px] border-2 border-gray-200  rounded-lg m-4 hover:shadow-2xl" key={index}>
                     <div className="h-[55%] w-full">
                        <img className="h-full w-full bg-repeat rounded-t-md" src={data.headerImgUrl}/>
                     </div>
                     <div className="h-[30%] w-full mt-4 text-2xl ">
                        <div className="h-[80px] ">
                      <p className="h-full w-full text-center text-[20px] text-[#112E3B]">{data.seoTitle}</p>
                      </div>
                      <div className="h-[75px] flex justify-center items-center">
                      <button className="text-[#FFFFFF] bg-[#37A81A] rounded-md   font-[12px] py-[5px] px-[20px]" >Read More</button>
                      </div>
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
    )
}

export default Tour;