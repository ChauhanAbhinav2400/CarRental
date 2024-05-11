import AvailableCars from "../AvailableCars/AvailableCars";
import NewsAndUpdates from "../NewsAndUpdates/NewsAndUpdates";
import PopularTour from "../PopularTourPackage/PopularTour";
import AboutMe from "../SearchCar/Aboutme";
import SearchCar from "../SearchCar/SearchCar";
import Footer from "../footer/footer";
import SliderPage from "../slider/slider";
import withTokenHandler from "../../globalTokenGenerated";
import { useEffect, useState } from "react";
import { CarRentalServiceCityList } from "../../Redux/actions/carRentalServiceCityList.action";
import { useDispatch, useSelector } from "react-redux";

function Home(props) {
  const { token, tokenExpiration, generateTokenAndUpdateState } = props;

  const [Token, setToken] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const storedToken = localStorage.getItem("NewToken");
      if (storedToken) {
        await fetchDataWithToken(storedToken);
      } else {
        generateTokenAndUpdateState().then((token) => {
          fetchDataWithToken(token);
        });
      }
    };

    fetchData();
  }, [token]);

  const fetchDataWithToken = async (token) => {
    dispatch(CarRentalServiceCityList(token));

    setToken(token);
  };

  return (
    <>
      <div className="h-auto w-full ">
        <SliderPage />
        <SearchCar Token={Token} />
        <AboutMe />
        <AvailableCars Token={Token} />
        <PopularTour Token={Token} />
        <NewsAndUpdates Token={Token} />
        <Footer />
      </div>
    </>
  );
}

const HomePageWithTokenHandler = withTokenHandler(Home);

export default HomePageWithTokenHandler;
