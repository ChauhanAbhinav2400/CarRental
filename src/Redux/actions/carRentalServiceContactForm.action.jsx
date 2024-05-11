import axios from 'axios'
import React from 'react'
const token = localStorage.getItem("CAR_RENTAL_TOKEN")
  
export default function carRentalServiceContactForm(value,token) {
  

  const body = {
    name: value.name,
    email: value.email,
    mobileNumber: value.mobileNumber,
    subject: value.subject,
    message: value.message
  }

 return async (dispatch,getstate)=>{
   if(token){
   try{
    const response = await axios({
      method :"POST",
      url: "https://alxtrip.algodox.co.in/api/user-service/contact/add",
      headers:{
          Authorization:"Bearer" +JSON.parse(token),
      },
     data:body
    })
    console.log(response);
    dispatch({type:"CONTACT_FORM",payload:response})

   } 
     catch(error){
   console.log(error);
     }  

   }
   
 }
   
  
}
