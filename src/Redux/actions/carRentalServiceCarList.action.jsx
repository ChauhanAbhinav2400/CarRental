import axios from "axios";
// const token = localStorage.getItem("NewToken");

export function CarRentalServiceCarList(token) {
  
  return async (dispatch, getState) => {
    const resp = await axios({
      method: "GET",
      url: "https://alxtrip.algodox.co.in/api/carrental-service/rental/cars/{pageNumber}?page=0",
      headers: {
        Authorization: "Bearer " + JSON.parse(token),
      },
    });

    dispatch({
      type: "CAR_RENTAL_SERVICE_CARLIST",
      payload: resp.data.data.content,
    });
  };
}
