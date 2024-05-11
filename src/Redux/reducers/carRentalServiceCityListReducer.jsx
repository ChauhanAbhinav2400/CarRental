const initialState={
    city:[]
}


 export const CarRentalServiceCityList=(state=initialState,action)=>{
    const {type,payload}=action
    switch (type) {
        case "CAR_SERVICE_CITY_LIST":
            return{
              ...state,city:payload
            }
            
        default:  return state
            
    }
}