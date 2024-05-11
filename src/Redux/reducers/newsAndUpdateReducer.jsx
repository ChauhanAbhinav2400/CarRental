
const initialState={
    news:[]
 }

 export  const newsAndUpdates=(state=initialState,action)=>{
         const {type,payload}=action
        switch (type) {
            case "NEWS_AND_UPDATES":
                 return {
                    ...state,news:payload
                 }
                
            default :
            return state
                
        }
}