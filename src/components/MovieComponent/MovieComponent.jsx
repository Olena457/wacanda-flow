import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const MovieComponent = () => {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);

  useGSAP(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=200%",
        scrub: 1,
        pin: true,
        pinSpacing: true,
      },
    });

    tl.fromTo(
      "#movie-clip",
      {
        width: "75vw",
        height: "60vh",
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        borderRadius: "40%",
      },
      {
        width: "100vw",
        height: "100vh",
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "power2.out",
        borderRadius: "60%",
      }
    ).to(
      videoRef.current,
      {
        scale: 1.1,
        ease: "power2.out",
      },
      0
    );
  });

  return (
    <>
      <div
        ref={sectionRef}
        id="movie-section"
        className=" w-screen relative border-t-1 border-b-1 border-[#00a86b] movie-wrapper"
      >
        <div className="h-screen w-screen flex items-center justify-center bg-black">
          <div
            id="movie-clip"
            className="relative overflow-hidden"
            style={{
              backgroundColor: "black",
            }}
          >
            <video
              ref={videoRef}
              muted
              playsInline
              autoPlay
              loop
              preload="auto"
              className="w-full h-full object-cover"
              src="/video/wacanda.mp4"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieComponent;
