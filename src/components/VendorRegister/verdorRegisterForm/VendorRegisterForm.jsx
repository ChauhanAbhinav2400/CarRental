import { useState } from "react"
import Footer from "../../footer/footer"

const VendorRegistarForm = ({Token}) => {
    
    const [inputData,setInputData]=useState({
        vendorName:"",
        vendorMobileNumber:"",
        vendorEmailId:"",
        vendorCity:"",
        vendorAddress:"",
        url:""
    })
   
    const handleData=(e)=>{
       setInputData({...inputData,[e.target.name]:e.target.value})
    }

    const submitHandler=(e)=>{
        e.preventDefault()
        console.log(inputData)
        setInputData({
            vendorName:"",
            vendorMobileNumber:"",
            vendorEmailId:"",
            vendorCity:"",
            vendorAddress:"",
            url:""
        })
    }


    return (
        <div className="h-[100%] w-[90%] bg-white flex flex-col justify-between items-center">
             <h3 className='w-full text-[20px] font-bold text-[#6c757d] my-4 text-center'>Make Money Renting Your Car</h3>
          <form className="w-full h-full flex flex-col justify-between " onSubmit={submitHandler} >
                        <div className="flex flex-col">
                            <label className="text-[#526977] text-[14px] p-[10px]">Full Name *</label>
                            <input autoComplete="off"  className="p-[1rem] border-[1px] border-green-500 focus:outline-none" type="text" name="vendorName" placeholder='Name' onChange={handleData}  />
                        </div>
                        <div  className="flex flex-col" >
                            <label className="text-[#526977] text-[14px] p-[10px]">Mobile Number *</label>
                            <input autoComplete="off" className="p-[1rem] border-[1px] border-green-500 focus:outline-none" type="tel" name="vendorMobileNumber" placeholder='Mobile Number' maxLength={10} onChange={handleData}  required
                            />
                        </div>
                        <div  className="flex flex-col" >
                            <label className="text-[#526977] text-[14px] p-[10px]">Your Email *</label>
                            <input autoComplete="off" className="p-[1rem] border-[1px] border-green-500 focus:outline-none" type="email" name="vendorEmailId" placeholder='Your Email' onChange={handleData} 
                            />
                        </div>
                        <div   className="flex flex-col">
                            <label className="text-[#526977] text-[14px] p-[10px]">Your City *</label>
                           <input autoComplete="off" className="p-[1rem] border-[1px] border-green-500 focus:outline-none"  type="text" placeholder="Your City" name="vendorCity" onChange={handleData}/>
                        </div>
                        <div  className="flex flex-col">
                            <label className="text-[#526977] text-[14px] p-[10px]">Your Address *</label>
                            <input autoComplete="off" className="p-[1rem] border-[1px] border-green-500 focus:outline-none" type="text" name='vendorAddress' placeholder='Your Address' onChange={handleData} 
                            />
                        </div>
                        <div  className="flex flex-col">
                            <label className="text-[#526977] text-[14px] p-[10px]">URL</label>
                            <input autoComplete="off" className="p-[1rem] border-[1px] border-green-500 focus:outline-none" type="url" name="url" placeholder='URL' onChange={handleData} 
                            />
                        </div>
                        <div className="h-20  flex justify-center items-center">
                            <button className="bg-[#6C757D] text-[white] w-full p-2 font-medium rounded-md hover:bg-[gray]" type="submit">Submit</button>
                        </div>
                        
                    </form>
        
        </div>
    )
}

export default VendorRegistarForm