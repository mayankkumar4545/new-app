import { useState } from "react";
import "./App.css";
import NavBar from "./components/navBar/NavBar";
import IntroPage from "./components/homePage/IntroPage";
import Award from "./components/homePage/Award";
import Skills from "./components/homePage/Skills";
import Language from "./components/homePage/Language";
import Journey from "./components/homePage/Journey";
import Community from "./components/homePage/Community";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <NavBar />
      <IntroPage />
      <Award />
      <Skills />
      <Language />
      <Journey />
      <Community />
      <Footer />
    </>
  );
}

export default App;
