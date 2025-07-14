import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./navBar/NavBar";
import Home from "./homePage/Home";
import Courses from "./myCourses/Courses";
import ScrollToTop from "./SrollTop";
import AboutUs from "./about/AboutUs";
import ContactUs from "./contact/ContactUs";
import FinalJavaExplore from "./explore/javaScriptExplore.jsx/FinalJavaExplore";
import JavaScriptBuyPage from "./buy/javaScriptBuy/JavaScriptBuyPage";
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
        <Route path="/JavaScript" element={<FinalJavaExplore />} />
        <Route path="/buyJavaScript" element={<JavaScriptBuyPage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Section;
