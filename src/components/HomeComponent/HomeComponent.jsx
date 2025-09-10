// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// import { ScrollTrigger } from "gsap/all";

// import homeImage from "../../assets/images/content/home-1.jpg";
// import homeIcon from "../../assets/icons/home.svg";

// gsap.registerPlugin(ScrollTrigger);

// const HomeComponent = () => {
//   useGSAP(() => {
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: ".home-section",
//         start: "top top",
//         scrub: 2.5,
//         end: "+=200%",
//         pin: true,
//       },
//     });

//     tl.set(".mask-wrapper", {
//       maskSize: "0%",
//       maskPosition: "center",
//     });

//     tl.set(".home-text", {
//       scale: 0.5,
//       opacity: 0,
//     });

//     tl.to(".mask-wrapper", {
//       maskSize: "100%",
//       ease: "power2.out",
//     }).to(
//       ".home-text",
//       {
//         scale: 1,
//         opacity: 1,
//         ease: "power2.out",
//       },
//       "<"
//     );
//   });

//   return (
//     <section className="home-section">
//       <div className="mask-wrapper">
//         <img src={homeImage} alt="background" className="bg-image" />
//       </div>

//       <div className="home-text-wrapper">
//         <img src={homeIcon} alt="home" className="home-text animated-title" />
//       </div>
//     </section>
//   );
// };

// export default HomeComponent;
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
        <h1
          ref={textRef}
          className="home-text z-10 text-white text-5xl md:text-7xl font-bold text-center"
        >
          Wacanda Forever
        </h1>
      </div>
    </section>
  );
};

export default HomeComponent;
