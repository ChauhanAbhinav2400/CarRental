
import { useEffect, useState } from "react";
import img from "../../ImagesFile/page-titlebar.png"
import Footer from "../footer/footer"
import VendorRegistarForm from "./verdorRegisterForm/VendorRegisterForm"
import withTokenHandler from "../../globalTokenGenerated";

function VendorRegister({token, tokenExpiration, generateTokenAndUpdateState}){
   
    const [Token,setToken]=useState()
   
   
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
     setToken(token)
  };


    return(
        <div className="h-auto w-full   bg-[#eee] flex flex-col justify-center items-center">
         <div className="h-[470px] w-full relative">
          <div className="h-full w-full absolute">
            <img className="h-full w-full" src={img}/>
          </div>

          <div className="h-full w-full absolute bg-[#112E3BD8] flex justify-center items-center pt-[130px]">
                <div className=" h-[200px] w-[90%] text-white  flex flex-col justify-center items-center space-y-4">
                  <h2 className="text-3xl font-bold">Vendor Sign up</h2>
                  <p className="text-xl font-normal text-center">Join our platform now to unlock unlimited booking opportunities and maximize your profit potential.</p>
                </div>
          </div>
      </div>

      <div className="h-auto w-[90%]   my-14 flex flex-col md:flex-row justify-center items-start ">
              <div className="h-[700px] md:w-[50%] w-[90%] ">
                 <ul className="h-full w-full flex flex-col justify-between my-8">
                    <li>Join our platform now to unlock unlimited booking opportunities and maximize your profit potential.</li>
                    <li>Join our platform now to unlock unlimited booking opportunities and maximize your profit potential.</li>
                    <li>Join our platform now to unlock unlimited booking opportunities and maximize your profit potential.</li>
                    <li>Join our platform now to unlock unlimited booking opportunities and maximize your profit potential.</li>
                    <li>Join our platform now to unlock unlimited booking opportunities and maximize your profit potential.</li>
                    <li>Join our platform now to unlock unlimited booking opportunities and maximize your profit potential.</li>
                 </ul>

              </div>
              <div className="h-full md:w-[50%]  w-[90%]  bg-white my-8 flex justify-center items-start rounded-md">
                <VendorRegistarForm  Token={Token}/>
              </div>
      </div>




      <Footer/>
        </div>
    )
}



const VendorRegisterPageWithTokenHandler = withTokenHandler(VendorRegister);
export default VendorRegisterPageWithTokenHandler;