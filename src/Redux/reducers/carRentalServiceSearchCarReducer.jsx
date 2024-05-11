
const initialState={
     searchCar:[],
     carDetails:null
}

export function CarRentalServiceSearchCar(state=initialState,action){
    const {type,payload}=action
     switch (type) {
        case "SEARCH_CAR":
             return  {
                ...state,searchCar:payload.resp,carDetails:payload.carDetails
             }
            
        default : return state
           
     }


}