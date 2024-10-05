import "./Home.css";
import Navbar from "./Navbar.jsx";
import Story from "./Story.jsx";
import Content from "./Content.jsx";
import UploadSection from "./uploadSection.jsx";

const Home = () => {
  return (
    <>
      <Navbar />
      <Story />
      <UploadSection />
      <Content />
    </>
  );
};

export default Home;
