import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import polygonIcon from "../../assets/icons/polygon.svg";

const wisdomData = [
  {
    text: "You have entered the Hall of Zero Limits. Great things lie ahead for all who open themselves to finding their gift.",
  },
  {
    text: "Within these walls, every step reveals a new possibility. Focus on your path and trust your inner strength to guide you.",
  },
  {
    text: "The greatest treasures are often hidden in plain sight. Pay close attention, as the smallest detail can unlock the biggest secret.",
  },
  {
    text: "Your journey here is unique. Embrace the unknown and allow yourself to be led by curiosity and the promise of discovery.",
  },
];

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
        <span className="quiz-button-text">
          {isLastItem ? "Finish" : "Next"}
        </span>
      </button>
    </div>
  );
};
export default QuizCard;
