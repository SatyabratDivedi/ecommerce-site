import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Footer from "./components/Footer";
import ConnectSection from "./components/ConnectSection";
import {MdHeadsetMic} from "react-icons/md";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <ConnectSection />
      <Footer />
      <div className="fixed bottom-5 right-5">
        <div className="bg-black flex gap-2 items-center text-white px-3 hover:text-gray-300 font-semibold text-[.8rem]  py-2 cursor-pointer rounded-3xl">
          <MdHeadsetMic className="text-2xl" />
          Contact Us
        </div>
      </div>
    </>
  );
}

export default App;
