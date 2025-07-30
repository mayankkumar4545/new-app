import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./navBar/NavBar";
import Home from "./homePage/Home";
import Courses from "./myCourses/Courses";
import ScrollToTop from "./SrollTop";
import AboutUs from "./about/AboutUs";
import ContactUs from "./contact/ContactUs";
import AcfBuyPage from "./buy/acfBuy/AcfBuyPage";
import FinalACFExploreCourse from "./explore/acfExplore/FinalACFExploreCourse";
import OurCommunity from "./OurCommunity";
const Section = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/ourCommunity" element={<OurCommunity />} />

        <Route
          path="/ComputerFundamentals"
          element={<FinalACFExploreCourse />}
        />

        <Route path="/buyComputerFundamentals" element={<AcfBuyPage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Section;
