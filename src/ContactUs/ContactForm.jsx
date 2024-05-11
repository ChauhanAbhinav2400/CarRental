import React, { useState } from 'react';
import { FaRegEnvelope, FaRegUser } from "react-icons/fa";
import { LuPhone } from "react-icons/lu";
import { FiMessageCircle } from "react-icons/fi";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import carRentalServiceContactForm from '../Redux/actions/carRentalServiceContactForm.action';
export default function ContactForm({Token}) {
  
  const [inputdata,setInputData] = useState({ name:"",emailId:"",mobileNumber:"",subject:"",message:""})
  const dispatch = useDispatch() 
  const response = useSelector(state=>state.CarRentalServiceContactForm.data)
  console.log(response);
  function inputOnChangeHandler(e){
     setInputData({...inputdata,[e.target.name]:e.target.value})
  }
  function submitHandler(e){
      e.preventDefault()
      console.log(inputdata);
      dispatch(carRentalServiceContactForm(inputdata,Token))
      setInputData({ name:"",emailId:"",mobileNumber:"",subject:"",message:""})
  }
  return (
    <div>
      <h3 className='mb-4   text-center text-gray-700 md:text-left flex items-center text-lg font-bold my-4 font-sans '>Send Message</h3>
      <div className="flex  gap-x-3 justify-between ">
        <div className="w-full md:w-1/2  ">
          <div className='mb-4 text-center text-gray-700 md:text-left flex items-center my-4 font-sans'><i><FaRegUser className="mr-2 text-gray-700 " /></i>Full Name</div>
          <input  type="text" name="name" value={inputdata.name}  onChange={inputOnChangeHandler}  className="border border-green-600 p-3 w-full text-sm" maxLength={50} />
        </div>
        <div className="w-full md:w-1/2  "> 
          <div className='mb-4 text-center text-gray-700 md:text-left flex items-center my-4 font-sans'><i><FaRegEnvelope className="mr-2 text-gray-700 " /></i>Your Email</div>
          <input type="email" name="emailId" value={inputdata.emailId}  onChange={inputOnChangeHandler} maxLength={50} className="border border-green-600 p-3 w-full text-sm" />
        </div>
      </div>
      <div>
        <div className='mb-4 text-center text-gray-700 md:text-left flex items-center  my-4 font-sans  '><i><LuPhone className="mr-2 text-gray-700 " /></i>Mobile Number</div>
        <input type="tel" name="mobileNumber" value={inputdata.mobileNumber}  onChange={inputOnChangeHandler} maxLength={10} required className="border border-green-600 p-3 w-full text-sm" />
      </div>
      <div>
        <div className='mb-4 text-center text-gray-700 md:text-left flex items-center  my-4 font-sans  '><i><FaRegEnvelope className="mr-2 text-gray-700 " /></i>Subject</div>
        <input name="subject" value={inputdata.subject}  onChange={inputOnChangeHandler} maxLength={500} className="border border-green-600 p-3 w-full text-sm" />
      </div>
      <div className='w-full'>
        <div className='mb-4 text-center text-gray-700 md:text-left flex items-center  my-4 font-sans  '><i><FiMessageCircle className="mr-2 text-gray-700 " /></i>Your Message</div>
        <textarea className="border border-green-600 p-3 w-full text-sm " rows="4"  name="message" value={inputdata.message}  onChange={inputOnChangeHandler} ></textarea>
      </div>
      <div className='my-5'>
        <button className="bg-gray-700 border-0 text-white block px-4 py-2 rounded-md uppercase w-full hover:bg-green-600 focus:bg-green-600 focus:outline-none transition duration-200 ease-out" onClick={submitHandler}>Submit</button>
      </div>
    </div>
  )
}



