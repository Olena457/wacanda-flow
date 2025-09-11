import { useState } from "react";
import FinalScreen from "./components/FinalScreen/FinalScreen.jsx";
import Title from "./components/Title/Title.jsx";
import HomeComponent from "./components/HomeComponent/HomeComponent.jsx";
import HeroSection from "./components/HeroSection/HeroSection.jsx";
import PosterList from "./components/PosterList/PosterList.jsx";
import "./App.css";
import QuizCard from "./components/QuizeCard/QuizeCard.jsx";
import BallComponent from "./components/BallComponent/BallComponent.jsx";
import DynamicParallax from "./components/DynamicParallax/DynamicParallax.jsx";
import ParallaxComponent from "./components/ParallaxComponent/ParallaxComponent.jsx";

function App() {
  const [showFinalScreen, setShowFinalScreen] = useState(false);

  const handleFinishQuiz = () => {
    setShowFinalScreen(true);
  };

  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <div className="center-container ">
        {/* <div className="blob-container">
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>
        </div> */}
        <Title tag="h2" className="masked-title" text="Wacanda Start Forever" />
      </div>
      <HomeComponent />
      <HeroSection />
      <DynamicParallax />
      <PosterList />
      <ParallaxComponent />
      <div className="core-container  px-2 xl:px-10  2xl:px-16">
        <div className="shadow-container">
          <div className="shadow shadow-1"></div>
          <div className="shadow shadow-2"></div>
        </div>
        {!showFinalScreen ? (
          <>
            <BallComponent />
            <QuizCard onFinish={handleFinishQuiz} />
          </>
        ) : (
          <FinalScreen />
        )}
      </div>
    </main>
  );
}

export default App;
