import React, { useEffect } from "react";
import Numberplus from "../../AboutUs/Numberplus";
import OurVission from "../../AboutUs/OurVission";
import Overpatner from "../../AboutUs/Overpatner";
import Footer from "../footer/footer";
import img from "../../ImagesFile/blog-item-background.png";
import withTokenHandler from "../../globalTokenGenerated";

const about = ({ token, tokenExpiration, generateTokenAndUpdateState }) => {
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
    <div>
      <div>
        <div
          className="relative bg-cover h-[470px] mt-120  font-bold text-white flex flex-col justify-center text-center gap-y-11"
          style={{ backgroundImage: `url(${img})` }}
        >
          <div className="absolute bg-[#112e3bd9] w-full h-full opacity-80"></div>
          <div className="gap-y-7 z-10">
            <h1 className="text-white pt-240 pb-190 text-5xl bg-opacity-70 mb-6">
              About Us
            </h1>
            <p className="text-white mt-n165 font-poppins px-70 text-base leading-relaxed">
              Trust ensures when you know us better
            </p>
          </div>
        </div>

        <OurVission />
        <Numberplus />
        <Overpatner />
        <Footer />
      </div>
    </div>
  );
};

const aboutPageWithTokenHandler = withTokenHandler(about);
export default aboutPageWithTokenHandler;
