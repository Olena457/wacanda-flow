import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import polygonIcon from "../../assets/icons/polygon.svg";
import { wisdomData } from "../../data/wisdomData.js";

const QuizCard = ({ onFinish }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (currentIndex < wisdomData.length) {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
      );
    } else {
      gsap.to(cardRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        onComplete: () => {
          onFinish();
        },
      });
    }
  }, [currentIndex, onFinish]);

  const handleNextFact = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const currentText = wisdomData[currentIndex]?.text;
  const isLastItem = currentIndex === wisdomData.length - 1;

  return (
    <div className="quiz-card" ref={cardRef}>
      <div className="quiz-text-container">
        <p className="quiz-text" ref={textRef}>
          {currentText}
        </p>
      </div>
      <button onClick={handleNextFact} className="quiz-button">
        <img src={polygonIcon} alt="right-arrow" className="quiz-button-icon" />
        <span className="quiz-button-text">{isLastItem ? "End" : "Next"}</span>
      </button>
    </div>
  );
};
export default QuizCard;
