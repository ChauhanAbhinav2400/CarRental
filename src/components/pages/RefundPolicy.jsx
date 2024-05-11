import React from "react";
import Footer from "../footer/footer";
import img from "../../ImagesFile/blog-item-background.png";
import { FaQuestionCircle } from "react-icons/fa";
import { FaRegLifeRing } from "react-icons/fa";

function RefundPolicy() {
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
              Refund Policy
            </h1>

            <p className="text-white mt-n165 font-poppins px-70 text-base leading-relaxed">
              We guarantee secure and unforgettable experiences when you choose
              to avail our services.
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
                Alxtrip's Refund Policy
              </div>
              <p>
                Our Refund Policy is based on standardized practices that
                strictly follow industrial norms. We put up with fair assessment
                practices and all the refund claims are processed with vigilant
                parameters to make sure the decisions are justified and mutually
                agreeable.Our policies are treated with appropriate measures to
                settle different claims, originating from different assortments
                of needs and various business situations.
              </p>
            </div>
            <div className="text-justify">
              <div className="icon">
                <i>
                  <FaQuestionCircle className="mr-2 text-[#00d231] w-6 h-6 " />
                </i>
                Coverage & Scope
              </div>
              <p>
                This Refund Policy covers Alxtrip action and approach towards
                refunds. This Refund Policy does not apply to the practices of
                companies that Alxtrip does not own or control or of persons
                that Alxtrip does not employ or manage, including any
                third-party service and/or product providers bound by contract
                and any third-party websites to which Alxtrip website link.
              </p>
            </div>
            <div className="text-justify ">
              <div className="icon text-start">
                <i>
                  <FaQuestionCircle className="mr-2 text-[#00d231] w-6 h-6 " />
                </i>
                When Do You Qualify For Refunds?
              </div>
              <p>
                When you file a complaint to Alxtrip, we first try to provide an
                ideal solution to the issue you are facing. Your case is first
                introduced to the technical team and then reported further to
                the experts panel. Refund is only made in the extreme
                circumstances, when nothing good can be done to solve the issue.
                While planning for refunds we check for soundness and validity
                of the case, applying different conditions to it. If these
                conditions are satisfied, refund may apply.
              </p>
            </div>
            <div className="text-justify">
              <div className="icon">
                <i>
                  <FaQuestionCircle className="mr-2 text-[#00d231] w-6 h-6 " />
                </i>
                Delivery Time
              </div>
              <p>
                When you are eligible for a return the minimum refund period
                will lie in between 30 to 45 days from the date of acceptance
                and approval of the return subject to all the clearances and
                deactivation of the subscription plan availed by the customer
                which leads to cancellation of the subscription and revoking the
                access to the website admin arena.
              </p>
            </div>
            <div className="text-justify">
              <div className="icon">
                <i>
                  <FaQuestionCircle className="mr-2 text-[#00d231] w-6 h-6 " />
                </i>
                Changes
              </div>
              <p>
                Alxtrip may at any time, without notice to you and in its sole
                discretion, amend this policy periodically. You are expected to
                check the policy from time to time for updates. For more
                information on our Refund Policy, contact us at
                ajay.kumar@algodox.co.in.
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

export default RefundPolicy;
