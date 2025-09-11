import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import longImage from "../../assets/images/vertical/long.jpg";

const ParessImage = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  useGSAP(() => {
    const container = containerRef.current;
    const image = imageRef.current;
    if (!container || !image) return;

    gsap.set(image, { x: 0, y: 0, scale: 1.2, skewX: 0, skewY: 0 });

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = container.getBoundingClientRect();

      const xPos = (clientX - (left + width / 2)) / (width / 2);
      const yPos = (clientY - (top + height / 2)) / (height / 2);

      gsap.to(image, {
        x: xPos * 10,
        y: yPos * 10,
        ease: "power1.out",
        skewX: xPos * 5,
        skewY: yPos * 5,
        duration: 0.9,
      });
    };

    container.addEventListener("mousemove", handleMouseMove);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="flex relative justify-center items-center w-full h-screen px-4 sm:px-8 md:px-16 lg:px-24">
      <div className="blob-container absolute">
        <div className="two two-1"></div>
        <div className="two two-2"></div>
      </div>
      <div
        className="relative w-full max-w-lg h-[90%] overflow-hidden rounded-3xl shadow-2xl"
        ref={containerRef}
      >
        <img
          ref={imageRef}
          src={longImage}
          alt="Parallax Image"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};
export default ParessImage;
