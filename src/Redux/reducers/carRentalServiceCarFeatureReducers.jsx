const initialState = {
  cars: [],
  loading:false,
  error:null
};

export const CarRentalServiceCars = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    // case "CAR_RENTAL_SERVICE_CARS":
    //   return { ...state, loading: true, error: null };
    case "CAR_RENTAL_SERVICE_CARS":
      return { ...state, loading: false,cars:payload, error: null };
    // case "CAR_RENTAL_SERVICE_CARS":
    //   return { ...state, loading: false, error:payload };
    default:
      return state;

  }
};
