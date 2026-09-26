
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Route, Routes, useLocation } from "react-router-dom";

import LandingPage from "./Pages/LandingPage";
import SummaryPage from "./Component/SummaryPage";
import Residence from "./Component/Residence";
import Footer from "./Component/Footer";
import SignUp from "./Pages/SingUp";
import Navbar from "./Pages/Navbar";
import Homes from "./Pages/Homes";
import MoreDetail from "./Component/MoreDetail";
import ApplyForm from "./Component/ApplyForm";
import ListRental from "./Component/ListRental";

gsap.registerPlugin(ScrollTrigger);

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <div className="">
      <ScrollToTop />

      <Routes>

        {/* HOME */}
        <Route
          path="/"
          element={
            <>
              <div className="relative">
                <LandingPage />

                <div className="absolute top-0 left-0 w-full z-50">
                  <Navbar />
                </div>
              </div>

              <SummaryPage />
              <Residence />
              <Footer />
              
            </>
          }
        />

        {/* SIGN UP */}
        <Route path="/signin" element={<SignUp />}/>
<Route path="/homes" element={<Homes/>}/>
<Route path="/MoreDetail" element={<MoreDetail/>}/>
<Route path="/Apply" element={<ApplyForm/>}/>
<Route path="/ListRental" element={<ListRental/>} />

      </Routes>
    </div>
  );
};

export default App;

