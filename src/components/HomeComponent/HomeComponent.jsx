import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import homeImage from "../../assets/images/content/home-1.jpg";

gsap.registerPlugin(ScrollTrigger);

const HomeComponent = () => {
  const textRef = useRef(null);
  const bgRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".home-section",
        start: "top top",
        end: "+=200%",
        scrub: true,
        pin: true,
      },
    });
    // text
    tl.fromTo(
      textRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, ease: "power2.out" }
    );
    // photo
    tl.fromTo(
      bgRef.current,
      { clipPath: "polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)" },
      { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", ease: "none" },
      "<0.2"
    );
  }, []);

  return (
    <section className="home-section relative h-screen w-screen  overflow-hidden">
      <div ref={bgRef} className="absolute inset-0 bg-cover bg-center ">
        <img
          src={homeImage}
          alt="background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute inset-0 flex items-center justify-center">
          <h1
            ref={textRef}
            className="home-text z-10 text-[#32cd32] font-bold text-center flex flex-wrap justify-center items-baseline"
          >
            <span className="text-3xl md:text-4xl lg:text-5xl mr-2">THE</span>
            <span className="text-5xl md:text-7xl lg:text-8xl">HALL</span>
            <span className="text-3xl md:text-4xl lg:text-5xl mx-2">OF</span>
            <span className="text-5xl md:text-7xl lg:text-8xl whitespace-nowrap">
              ZERO LIMITS
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default HomeComponent;
