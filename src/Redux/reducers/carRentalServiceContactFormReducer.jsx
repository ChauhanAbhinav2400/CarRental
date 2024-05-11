import React from 'react'

const initialState = {data:null}
export default function CarRentalServiceContactForm(state=initialState,action) {
    const {type,payload}=action
       switch (type) {
        case "CONTACT_FORM":
            return {
                ...state,data:payload
            }
            
        default: return state
            
       }
  
}
