import axios from "axios";

export function CarRentalServiceCarBoocking(value,token) {
  
  const body = {
    name: value.name,
    emailId: value.email,
    mobNo: value.mobNo,
    rentalCarId: value.rentalCarId,
    rentalCarNo: value.rentalCarNo,
    sourceCityNm: value.sourceCityNm,
    destCityNm: value.destCityNm,
    toDate: value.toDate,
    fromDate: value.fromDate,
    pickTime: value.pickTime,
    dropTime: value.dropTime,
    vendorId: value.vendorId,
    vendorMobNo: value.vendorMobNo,
    driverNo: value.driverNo,
    totalFare: value.totalFare,
    perKmPrice: value.perKmPrice,
    startTripInfo: value.startTripInfo,
    endTripInfo: value.endTripInfo,
    customerInfo: value.customerInfo,
  };

  console.log("body", body);
  return async (dispatch, getState) => {
    if (token) {
      try {
        const resp = await axios({
          method: "POST",
          url: "https://alxtrip.algodox.co.in/api/carrental-service/rental/car/booking",
          headers: {
            Authorization: "Bearer " + JSON.parse(token),
          },
          data: body,
        });

        console.log(resp);
        dispatch({ type: "CAR_RENTAL_CAR_BOOKING", payload: resp });
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("error");
    }
  };
}
