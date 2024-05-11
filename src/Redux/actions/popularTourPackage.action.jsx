import axios from "axios";
const baseUrl = "https://alxtrip.algodox.co.in/";



export function PopularTourPackage(token) {
  return async (dispatch, getState) => {
    if (token) {
      try {
        const resp = await axios({
          method: "GET",
          url: "https://alxtrip.algodox.co.in/api/tourpackage-service/tour/package/featured",
          headers: {
            Authorization: "Bearer " + JSON.parse(token),
          },
        });
        dispatch({ type: "POLULAR_TOUR_PACKAGE", payload: resp.data.data });
      } catch (error) {
        console.log(error);
      }
    } 
  };
}
