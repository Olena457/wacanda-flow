import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import photo1 from "../../assets/images/squre/bluemask.jpg";
import photo2 from "../../assets/images/squre/warriors.jpg";
import photo3 from "../../assets/images/squre/bluewar.jpg";

gsap.registerPlugin(ScrollTrigger);

const DynamicParallax = () => {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const imageBoxRef = useRef(null);

  useGSAP(
    () => {
      gsap.to(imageBoxRef.current, {
        yPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 2,
        },
      });

      gsap.to(contentRef.current, {
        y: 100,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 2,
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section className="parallax-container" ref={containerRef}>
      <div className="content-block" ref={contentRef}>
        <h2 className="secondary-title">
          Wakanda is a fictional African nation
        </h2>
        <p className="main-text">
          "Wakanda is a fictional African nation, known as the most
          technologically advanced in the world due to its vast vibranium
          deposits. Hidden from the outside world.
        </p>
        <div className="content-image-wrapper">
          <img src={photo3} alt="Content Image" className="content-image" />
        </div>
      </div>
      <div className="scrolling-images-block" ref={imageBoxRef}>
        <div className="parallax-image-wrapper">
          <img src={photo1} alt="Parallax Image 1" className="parallax-image" />
        </div>
        <div className="parallax-image-wrapper">
          <img src={photo2} alt="Parallax Image 2" className="parallax-image" />
        </div>
      </div>
    </section>
  );
};

export default DynamicParallax;
