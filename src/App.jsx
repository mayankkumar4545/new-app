import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "./App.css";

import { AuthProvider } from "./context/AuthContext.jsx";
import Layout from "./components/Layout.jsx";
import Home from "./components/homePage/Home.jsx";
import Courses from "./components/myCourses/Courses.jsx";
import AboutUs from "./components/about/AboutUs.jsx";
import ContactUs from "./components/contact/ContactUs.jsx";
import OurCommunity from "./components/OurCommunity.jsx";
import FinalACFExploreCourse from "./components/explore/acfExplore/FinalACFExploreCourse.jsx";
import AcfBuyPage from "./components/buy/acfBuy/AcfBuyPage.jsx";
import FinalFullstackExploreCourse from "./components/explore/fullstackExplore/FinalFullstackExploreCourse.jsx";
import FinalDatabaseExploreCourse from "./components/explore/databaseExplore/FinalDatabaseExploreCourse.jsx";
import FinalAdaExploreCourse from "./components/explore/adaExplore/FinalAdaExploreCourse.jsx";
import FinalAngularExploreCourse from "./components/explore/angularExplore/FinalAngularExploreCourse.jsx";
import FinalEthicalExploreCourse from "./components/explore/ethicalExplore/FinalEthicalExploreCourse.jsx";
import FinalOsExploreCourse from "./components/explore/osExplore/FinalOsExploreCourse.jsx";
import FinalPythonExploreCourse from "./components/explore/pythonExplore/FinalPythonExploreCourse.jsx";
import Login from "./components/login/Login.jsx";
import ForgotPassword from "./components/login/ForgotPassword.jsx";
import StudentDashboard from "./components/dashboard/StudentDashboard.jsx";
import AdminDashboard from "./components/dashboard/AdminDashboard.jsx";
import StudentRoute from "./components/routes/StudentRoute.jsx";
import AdminRoute from "./components/routes/AdminRoute.jsx";

function App() {
  return (
    <HelmetProvider>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            {/* Standalone routes without the main Layout */}
            <Route path="/student-login" element={<Login role="student" />} />
            <Route path="/admin-login" element={<Login role="admin" />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />

            {/* Main application pages with the shared Layout */}
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="home" element={<Home />} />
              <Route path="courses" element={<Courses />} />
              <Route path="aboutUs" element={<AboutUs />} />
              <Route path="contactUs" element={<ContactUs />} />
              <Route path="ourCommunity" element={<OurCommunity />} />

              <Route
                path="ComputerFundamentals"
                element={<FinalACFExploreCourse />}
              />
              <Route path="buyComputerFundamentals" element={<AcfBuyPage />} />
              <Route
                path="Fullstack"
                element={<FinalFullstackExploreCourse />}
              />
              <Route
                path="DatabaseManagement"
                element={<FinalDatabaseExploreCourse />}
              />
              <Route path="Algorithms" element={<FinalAdaExploreCourse />} />
              <Route path="Angular" element={<FinalAngularExploreCourse />} />
              <Route
                path="EthicalHacking"
                element={<FinalEthicalExploreCourse />}
              />
              <Route
                path="OperatingSystems"
                element={<FinalOsExploreCourse />}
              />
              <Route
                path="PythonDataScience"
                element={<FinalPythonExploreCourse />}
              />

              <Route
                path="dashboard"
                element={
                  <StudentRoute>
                    <StudentDashboard />
                  </StudentRoute>
                }
              />
              <Route
                path="admin"
                element={
                  <AdminRoute>
                    <AdminDashboard />
                  </AdminRoute>
                }
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </HelmetProvider>
  );
}

export default App;
