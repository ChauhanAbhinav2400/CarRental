import { combineReducers } from "redux";
import { popularTourPackage } from "./reducers/popularTourPackageReducer";
import { newsAndUpdates } from "./reducers/newsAndUpdateReducer";
import { CarRentalServiceCars } from "./reducers/carRentalServiceCarFeatureReducers"; 
import { CarRentalServiceCityList } from "./reducers/carRentalServiceCityListReducer";
import { CarRentalServiceCarList } from "./reducers/carRentalServiceCarListReducers";
 
import CarRentalServiceContactForm from "./reducers/carRentalServiceContactFormReducer"

import { CarRentalServiceSearchCar } from "./reducers/carRentalServiceSearchCarReducer";

 
 export  const rootReducer=combineReducers({
    popularTourPackage:popularTourPackage,
    newsAndUpdates:newsAndUpdates,
    CarRentalServiceCars:CarRentalServiceCars,
    CarRentalServiceCityList:CarRentalServiceCityList,
    CarRentalServiceCarList:CarRentalServiceCarList,
    CarRentalServiceContactForm:CarRentalServiceContactForm,
    CarRentalServiceSearchCar:CarRentalServiceSearchCar
    
})