import { useEffect } from "react";
import { NewsAndUpdates } from "../../../Redux/actions/newsAndUpdate.action";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loader from "../../loaderSppiner/loader";

function News({Token}){

    
   const dispatch=useDispatch()
    const Data= useSelector(state=>state.newsAndUpdates.news)
    
    
    
      

     useEffect(()=>{
      dispatch(NewsAndUpdates(Token))
     },[Token])

    return(
        <div className="flex flex-col justify-between  space-y-8">

         <div className="flex justify-center items-start  flex-wrap">
            {
                Data.length<1 ? <Loader/> : (


                    <>
                      {
               Data.map((data,index)=>{
                   return (
                     <div className="h-96 w-[350px] border-2 border-gray-200 m-4 rounded-lg " key={index}>
                     <div className="h-[50%] w-full">
                        <img className="h-full w-full bg-repeat rounded-t-md" src={data.headerImgUrl}/>
                     </div>
                     <div className="h-[30%] w-full mt-4 text-2xl ">
                        <div className="h-[100px] ">
                      <p className="h-full w-full text-center text-[20px] text-[#112E3B]">{data.seoTitle}</p>
                      </div>
                      <div className="h-[75px] flex justify-center items-center">
                      <Link className="text-[#FFFFFF] bg-[#37A81A] rounded-md   font-[12px] py-[5px] px-[20px]" >Read More</Link>
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

export default News;