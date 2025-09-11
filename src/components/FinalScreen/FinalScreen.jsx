import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import warrior1 from "../../assets/images/vertical/green.png";
import warrior2 from "../../assets/images/vertical/indian.png";

const FinalScreen = () => {
  const containerRef = useRef(null);
  const buttonRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 2, ease: "power3.out" }
      );

      gsap.fromTo(
        ".final-image",
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.5,
          ease: "back.out(1.7)",
          delay: 0.8,
        }
      );

      gsap.fromTo(
        ".final-text-wrapper p",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", delay: 2 }
      );

      const tl = gsap.timeline();

      tl.fromTo(
        buttonRef.current,
        {
          opacity: 0,
          y: 50,
          x: 0,
          borderRadius: 20,
        },
        {
          opacity: 1,
          y: 0,
          x: 0,
          duration: 1,
          ease: "power2.out",
          delay: 2.5,
        }
      )
        .to(buttonRef.current, {
          x: 300,
          duration: 1,
          ease: "power2.inOut",
        })
        .to(buttonRef.current, {
          borderRadius: "50%",
          duration: 0.5,
        })
        .to(buttonRef.current, {
          x: -200,
          duration: 1,
          ease: "power2.inOut",
        });
    },
    { scope: containerRef }
  );

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="final-screen-container" ref={containerRef}>
      <div className="final-image-wrapper">
        <img src={warrior1} alt="Warrior 1" className="final-image" />
      </div>
      <div className="final-text-wrapper">
        <p className="text-[#35ff9e]">
          Your journey here is unique. Embrace the unknown and allow yourself to
          be led by curiosity and the promise of discovery.
        </p>
      </div>
      <div className="final-image-wrapper">
        <img src={warrior2} alt="Warrior 2" className="final-image" />
      </div>
      <button
        ref={buttonRef}
        onClick={handleScrollToTop}
        className="scroll-top-button"
      >
        Top
      </button>
    </div>
  );
};

export default FinalScreen;
