import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/pages/home";
import Cars from "./components/pages/cars";
import Contact from "./components/pages/contact";
import Services from "./components/pages/services";
import VenderDetail from "./components/pages/venderDetail/VenderDetail";
import VenderCar from "./components/pages/venderDetail/VenderCar";
import About from "./components/pages/about";
import PrivacyPolicy from "./components/pages/PrivacyPolicy";
import RefundPolicy from "./components/pages/RefundPolicy";
import Blog from "./components/pages/blog";
import FindCars from "./components/AvailableCars/findCars";
import VendorRegister from "./components/VendorRegister/VendorRegister";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="/car-list" element={<Cars />} />
            <Route path="/cars-search" element={<FindCars />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/service" element={<Services />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/vendor-register" element={<VendorRegister />} />
            <Route path="/vendor" element={<VenderDetail />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
