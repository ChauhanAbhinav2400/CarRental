import axios from "axios";
const baseUrl = "https://alxtrip.algodox.co.in/";



export function NewsAndUpdates(token) {
     
  return async (dispatch, getState) => {
    if (token) {
      try {
        const resp = await axios({
          method: "GET",
          url: "https://alxtrip.algodox.co.in/api/touristplace-service/tourist/places/articles/featured",
          headers: {
            Authorization: "Bearer " + JSON.parse(token),
          },
        });

        dispatch({ type: "NEWS_AND_UPDATES", payload: resp.data.data });
      } catch (error) {
        console.log(error);
      }
    } 
  };
}
