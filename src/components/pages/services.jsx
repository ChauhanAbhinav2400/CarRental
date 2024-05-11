import Footer from "../footer/footer";
import "./services.css";
import OfferService from "../ServicesOffer/OfferService/OfferService";
import OurClientSay from "../ServicesOffer/OurClientSay/OurClientSay";
import { useEffect } from "react";
import withTokenHandler from "../../globalTokenGenerated";

function Services({ token, tokenExpiration, generateTokenAndUpdateState }) {
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

  const fetchDataWithToken = async (token) => {};

  return (
    <>
      <div className="flex flex-col justify-center items-center AboutServiceimage">
        <h1 className="text-5xl font-bold mb-6 text-white mt-24">Service</h1>
        <p className="text-lg text-white text-center ">
          We offer top-notch car rental services to meet all your requirements.
        </p>
      </div>
      <OfferService />
      <div class=" bg-gray-200 ServiceOffer">
        <div class="text-center py-24">
          <h6 class="text-[45px] text-white font-bold">
            Are you looking for renting your car?
          </h6>
          <p class="mt-4 text-[16px] text-white font-medium">
            Interested in becoming a partner with us? You can join our team and
            become an ALXian.
          </p>
          <a
            href="/Vendor-Register"
            class="inline-block mt-4 px-4 py-2 bg-green-500 text-white font-bold rounded hover:bg-green-600"
          >
            Contact Us
          </a>
        </div>
      </div>
      <OurClientSay />
      <Footer />
    </>
  );
}

const ServicesPageWithTokenHandler = withTokenHandler(Services);
export default ServicesPageWithTokenHandler;
