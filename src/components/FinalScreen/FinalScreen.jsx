import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import warrior1 from "../../assets/images/vertical/green.png";
import warrior2 from "../../assets/images/vertical/indian.png";

const FinalScreen = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power2.out" }
      );

      gsap.fromTo(
        ".final-image",
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "back.out(1.7)",
          delay: 0.5,
        }
      );

      gsap.fromTo(
        ".final-text-wrapper p",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", delay: 1 }
      );
    },
    { scope: containerRef }
  );

  return (
    <div className="final-screen-container" ref={containerRef}>
      <div className="final-image-wrapper">
        <img src={warrior1} alt="Warrior 1" className="final-image" />
      </div>
      <div className="final-text-wrapper">
        <p className="text-[#00ff7f]">
          Your journey here is unique. Embrace the unknown and allow yourself to
          be led by curiosity and the promise of discovery.
        </p>
      </div>
      <div className="final-image-wrapper">
        <img src={warrior2} alt="Warrior 2" className="final-image" />
      </div>
    </div>
  );
};

export default FinalScreen;
