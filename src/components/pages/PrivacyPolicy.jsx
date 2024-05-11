import React, { useEffect } from "react";
import Footer from "../footer/footer";
import img from "../../ImagesFile/blog-item-background.png";
import { FaQuestionCircle } from "react-icons/fa";
import { FaRegLifeRing } from "react-icons/fa";
import withTokenHandler from "../../globalTokenGenerated";

function PrivacyPolicy({
  token,
  tokenExpiration,
  generateTokenAndUpdateState,
}) {
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
          className="relative bg-cover h-[470px] mt-120  font-bold text-white flex flex-col justify-center text-center :mdgap-y-11"
          style={{ backgroundImage: `url(${img})` }}
        >
          <div className="absolute bg-[#112e3bd9] w-full h-full opacity-80"></div>
          <div className="gap-y-7 z-10">
            <h1 className="text-white pt-240 pb-190 text-5xl bg-opacity-70 mb-6">
              {" "}
              Privacy Policy
            </h1>

            <p className="text-white mt-n165 font-poppins px-70 text-base leading-relaxed">
              We guarantee a secure journey. It is important for you to
              familiarize with our privacy policy terms for better tranparency.
            </p>
          </div>
        </div>
        <div className="m-[70px]">
          <div className="gap-y-6 grid ">
            <div className="text-justify">
              <div className="icon text-xl">
                <i>
                  <FaQuestionCircle className="mr-2 text-[#00d231] w-6 h-6 " />
                </i>
                Alxtrip's Privacy Policy
              </div>
              <p>
                This privacy policy explains our policy regarding the
                collection, use, disclosure and transfer of your information by
                Alxtrip and/or its subsidiary(ies) and/or affiliate(s) and/or
                associate(s) (collectively referred to as the "Company"), which
                operates various websites and other services including but not
                limited to delivery of information and content via any mobile or
                internet connected device or otherwise (collectively the
                "Services"). The Company respects the privacy of the users of
                the Services and is committed to reasonably protect it in all
                respects.
              </p>
            </div>
            <div className="text-justify">
              <div className="icon">
                <i>
                  <FaQuestionCircle className="mr-2 text-[#00d231] w-6 h-6 " />
                </i>
                Other Websites
              </div>
              <p>
                Alxtrip site contains links to other websites. Alxtrip is not
                responsible for the privacy practices or the content of such
                websites. User/member interaction features Alxtrip has many
                features that provide for users/members to disclose their
                identities and communicate with other users/members. Your use of
                such features and disclosure of any personal details (e.g.
                e-mail address) by you through these features are at your sole
                risk and Alxtrip accepts no responsibility for the same.
                However, if your privacy has been intruded as a result of
                participating in such features, you could notify us by e-mail at
                ajay.kumar@algodox.co.in
              </p>
            </div>
            <div className="text-justify">
              <div className="icon text-start">
                <i>
                  <FaQuestionCircle className="mr-2 text-[#00d231] w-6 h-6 " />
                </i>
                We Collect Information in Different Ways
              </div>
              <p>
                We collect information directly from you. We collect information
                directly from you when you contact us. We also collect
                information if you post a comment on our websites or ask us a
                question through phone or email. We collect information from you
                passively. We use tracking tools like Google Analytics, Google
                Webmaster, browser cookies and web beacons for collecting
                information about your usage of our website. We get information
                about you from third parties. For example, if you use an
                integrated social media feature on our websites. The third-party
                social media site will give us certain information about you.
                This could include your name and email address.
              </p>
            </div>
            <div className="text-justify">
              <div className="icon">
                <i>
                  <FaQuestionCircle className="mr-2 text-[#00d231] w-6 h-6 " />
                </i>
                Information We Collect
              </div>
              <p>
                Contact information. We might collect your Name , Email, Mobile
                Number. We might collect your billing name, billing address and
                payment method. We NEVER collect your credit card number or
                credit card expiry date or other details pertaining to your
                credit card on our website. Credit card information will be
                obtained and processed by our online payment partner.Information
                you post. We collect information you post in a public space on
                our website or on a third-party social media site belonging to
                Alxtrip Demographic information. We may collect demographic
                information about you, or any other information provided by your
                during the use of our website. We might collect this as a part
                of a survey also. Other information. If you use our website, we
                may collect information about your IP address and the browser
                you're using. We might look at what site you came from, duration
                of time spent on our website, pages accessed or what site you
                visit when you leave us. We might also collect the type of
                mobile device you are using, or the version of the operating
                system your computer or device is running.
              </p>
            </div>
            <div className="text-justify">
              <div className="icon">
                <i>
                  <FaQuestionCircle className="mr-2 text-[#00d231] w-6 h-6 " />
                </i>
                Notify Us
              </div>
              <p>
                If at any time you believe that Alxtrip or its users/members
                have not adhered to these principles, please notify Alxtrip by
                e-mail at ajay.kumar@algodox.co.in and we will use all
                commercially reasonable efforts to promptly determine and
                correct the problem.
              </p>
            </div>
          </div>
          <div className="shadow-lg mt-10 border-2 flex flex-col justify-center items-center p-6 w-full space-y-4 ">
            <FaRegLifeRing className="text-[#00d231] w-20 h-20 mb-4" />
            <div className="text-base sm:text-lg md:text-2xl font-bold text-center">
              Do you need support?
            </div>
            <div className="text-sm sm:text-md md:text-lg text-center">
              Our support agents are available 24/7/365. Call us now
            </div>
            <div className="text-md md:text-xl">+91-9602646089</div>
            <div className="text-md md:text-xl">+91-9571144478</div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

const PrivacyPolicyPageWithTokenHandler = withTokenHandler(PrivacyPolicy);
export default PrivacyPolicyPageWithTokenHandler;
