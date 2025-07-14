import Courses from "../myCourses/Courses";
import Award from "./Award";
import Community from "./Community";
import IntroPage from "./IntroPage";
import Journey from "./Journey";
import Language from "./Language";
import Skills from "./Skills";

const Home = () => {
  return (
    <>
      <IntroPage />
      <Courses />
      <Award />
      <Skills />
      <Language />
      <Journey />
      <Community />
    </>
  );
};
export default Home;
