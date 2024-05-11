import axios from "axios";


export function CarRentalServiceCityList(token) {
 
  return async (dispatch, getState) => {
    if(token){
      const resp = await axios({
        method: "GET",
        url: "https://alxtrip.algodox.co.in/api/carrental-service/city/list",
        headers: {
          Authorization: "Bearer " + JSON.parse(token),
        },
      });
  
     
  
      dispatch({ type: "CAR_SERVICE_CITY_LIST", payload:resp.data.data });
    };
    }
    
}
