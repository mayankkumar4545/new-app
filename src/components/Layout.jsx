import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./navBar/NavBar";
import Footer from "./footer/Footer";
import ScrollToTop from "./SrollTop";

const Layout = () => {
  return (
    <>
      <ScrollToTop />
      <NavBar />
      <main>
        {/* The Outlet will render the specific page component */}
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
