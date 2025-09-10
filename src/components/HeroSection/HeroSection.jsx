import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import cityImage from "../../assets/images/content/city.jpg";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    <div id="hero" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <div className="h-dvh w-screen" id="clip">
          <div className="mask-clip-path hero-image">
            <img
              src={cityImage}
              alt="Background"
              className="absolute left-0 top-0 size-full object-cover"
            />
          </div>
          <div className="absolute  top-[80%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 p-5">
            <p className="text-green-400 text-sm sm:text-base md:text-lg lg:text-2xl">
              Vakhtang remains etched in our hearts, a soul whose presence
              transcends time. His strength, wisdom, and quiet grace continue to
              guide us even in silence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
