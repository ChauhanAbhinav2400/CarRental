import axios from "axios";


export function CarRentalServiceSearchCar(carDetails,token) {
  const { pickupLocation } = carDetails;

  return async (dispatch, getState) => {
    const resp = await axios({
      method: "GET",
      url: `https://alxtrip.algodox.co.in/api/carrental-service/rental/search/availble-car?cityNm=${pickupLocation}&page=0`,
      headers: {
        Authorization: "Bearer " + JSON.parse(token),
      },
    });
    const Data = {
      resp: resp.data.data.content,
      carDetails: carDetails,
    };

    dispatch({ type: "SEARCH_CAR", payload: Data });
  };
}
//resp.data.data.content
