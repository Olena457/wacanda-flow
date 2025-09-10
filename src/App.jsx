import { useState } from "react";
import FinalScreen from "./components/FinalScreen/FinalScreen.jsx";
import Title from "./components/Title/Title.jsx";
import HomeComponent from "./components/HomeComponent/HomeComponent.jsx";
import HeroSection from "./components/HeroSection/HeroSection.jsx";
import PosterList from "./components/PosterList/PosterList.jsx";
import "./App.css";
import QuizCard from "./components/QuizeCard/QuizeCard.jsx";
import BallComponent from "./components/BallComponent/BallComponent.jsx";

function App() {
  const [showFinalScreen, setShowFinalScreen] = useState(false);

  const handleFinishQuiz = () => {
    setShowFinalScreen(true);
  };

  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Title tag="h2" className="title" text="Wacanda Forever" />{" "}
      <HomeComponent />
      <HeroSection />
      <PosterList />
      <div className="core-container">
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
