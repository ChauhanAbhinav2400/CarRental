import React from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { FaRegEnvelope } from "react-icons/fa";
import { LuPhone } from "react-icons/lu";

const CompanyInfo = () => (
    <div className='bg-white'>
     <div>
    <div className='mb-4 text-center text-gray-700 md:text-left flex items-center text-lg font-bold my-4 font-sans '>Alxtrip Contact Info</div>
    <div className='mb-4 '>
        <div className='mb-4 text-center text-gray-700 md:text-left flex items-center text-lg font-bold my-4 font-sans  '><i><IoLocationOutline className="mr-2 text-green-600 " /></i>Head Office</div>
        <li className=' text-gray-700 text-sm font-sans py-2 -mt-2 pl-10 hover:text-green-600 transition-all ease-in-out list-none'>605, SGH, Vaishali Nagar, Jaipur, India</li>
        <div className='mb-4 text-center text-gray-700 md:text-left flex items-center text-lg font-bold my-4 font-sans  '><i><LuPhone className="mr-2 text-green-600" /></i>Phone</div>
        <li className=' text-gray-700 text-sm font-sans py-2 -mt-2 pl-10 hover:text-green-600 transition-all ease-in-out list-none'>+91-9571144478</li>
        <div className='mb-4 text-center text-gray-700 md:text-left flex items-center text-lg font-bold my-4 font-sans  '><i><LuPhone className="mr-2 text-green-600" /></i>Phone</div>
        <li className=' text-gray-700 text-sm font-sans py-2 -mt-2 pl-10 hover:text-green-600 transition-all ease-in-out list-none'>+91-9602646089</li>
        <div className='mb-4 text-center text-gray-700 md:text-left flex items-center text-lg font-bold my-4 font-sans  '><i><FaRegEnvelope className="mr-2 text-green-600" /></i>E-mail</div>
        <li className=' text-gray-700 text-sm font-sans py-2 -mt-2 pl-10 hover:text-green-600 transition-all ease-in-out list-none'>ajay.kumar@algodox.com.in</li>
    </div>
</div>

    </div>
)


export default CompanyInfo
