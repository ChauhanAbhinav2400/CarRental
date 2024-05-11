
const initialState={
    carList:[]
}

export  const CarRentalServiceCarList=(state=initialState,action)=>{
    const {type,payload}=action
       switch (type) {
        case "CAR_RENTAL_SERVICE_CARLIST":
            return {
                ...state,carList:payload
            }
            
        default: return state
            
       }
}