import axios from "axios";


export function CarRentalServiceCars(token) {
 
  return async (dispatch, getState) => {
    const resp = await axios({
      method: "GET",
      url: "https://alxtrip.algodox.co.in/api/carrental-service/rental/cars/{pageNumber}?page=0",
      // 'https://alxtrip.algodox.co.in/api/carrental-service/rental/car/featured/{pageNumber}?page=0'
      headers: {
        Authorization: "Bearer " + JSON.parse(token),
      },
    });

    dispatch({
      type: "CAR_RENTAL_SERVICE_CARS",
      payload: resp.data.data.content,
    });
  };
}
