
 const initialState={
    tour:[]
 }

 export  const popularTourPackage=(state=initialState,action)=>{
         const {type,payload}=action
        switch (type) {
            case "POLULAR_TOUR_PACKAGE":
                 return {
                    ...state,tour:payload
                 }
                
            default :
            return state
                
        }
}