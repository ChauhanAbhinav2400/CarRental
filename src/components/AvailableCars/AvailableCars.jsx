import { useState } from "react";
import MediaCard from "./carcard/Card";
import CarBoocking from "./carBoocking";



function AvailableCars({Token}) {
    
    const [show,setShow]=useState(false)
    return (
        <>
            <div className='h-auto w-full flex justify-center items-center bg-[#F4F8F9]'>
                
                        <div className='h-auto w-[85%] my-14'>

                            <div className="h-32    w-full text-center">
                                
                                <h2 className="text-4xl font-bold text-gray-800">Available Cars</h2>
                                <h5 className='text-md font-semibold text-gray-500'>Choose your car that best fit for your trip</h5>
                               
                            </div>
                            <div className="space-y-8">
                                 
                                <MediaCard show={()=>setShow(true)} Token={Token}/>
                            </div>

                        </div>
                    </div>
                    <div>
                       
                    
            </div>
            {
              show &&  <CarBoocking show={()=>setShow(false)}/>
            }
        </>
    );
}

export default AvailableCars;