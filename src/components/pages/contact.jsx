import React, { useEffect, useState } from "react";
import img from "../../ImagesFile/blog-item-background.png";
import Maincontact from "../../ContactUs/maincontact";
import Footer from "../footer/footer";
import withTokenHandler from "../../globalTokenGenerated";

const Contact = ({ token, tokenExpiration, generateTokenAndUpdateState }) => {
  const [Token, setToken] = useState(null);

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
    setToken(token);
  };

  return (
    <div>
      <div>
        <div
          className="bg-cover h-[400px] mt-120  font-bold text-white flex flex-col justify-center text-center gap-y-11 "
          style={{ backgroundImage: `url(${img})` }}
        >
          <div className="gap-y-7">
            <h1 className="text-white pt-240 pb-190 text-5xl bg-opacity-70 mb-6">
              Contact Us
            </h1>
            <p className="text-white mt-n165 font-poppins px-70 text-base leading-relaxed">
              We can be reached with just a phone call or drop us a message
            </p>
          </div>
        </div>

        <Maincontact Token={Token} />

        <section>
          <div>
            <iframe
              className="mb-10"
              title="googlemap"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.6305585691175!2d75.73841991558596!3d26.915217583126456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db3c1bb5f94f5%3A0xa84384b7a004e277!2sAlgoDox%20Technology%20Private%20Limited!5e0!3m2!1sen!2sin!4v1648096235074!5m2!1sen!2sin"
              width="100%"
              height="700px"
              style={{ border: "0" }}
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
};

const ContactPageWithTokenHandler = withTokenHandler(Contact);
export default ContactPageWithTokenHandler;
