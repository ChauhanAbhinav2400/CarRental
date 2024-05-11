

const initialState={
    data:null
}



 export  const CarRentalServiceCarBoocking=(state=initialState,action)=>{
       const {type,payload}=action
        switch (type) {
            case "CAR_RENTAL_CAR_BOOKING": 
               return {...state,data:payload}
                
            default: return state
                
        }



} 