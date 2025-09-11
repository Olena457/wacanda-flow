import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { galleryPoster } from "../../data/posterData.js";
import arrowLeft from "../../assets/icons/arrowLeft.svg";
import arrowRight from "../../assets/icons/arrowRight.svg";

const PosterList = () => {
  const contentRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  useGSAP(() => {
    const duration = 1.5;
    const textEase = "power2.inOut";
    const imageEase = "power2.inOut";

    gsap.fromTo("title", { opacity: 0 }, { opacity: 1, duration: 2.5 });

    gsap.fromTo(
      ".poster-image img",
      { opacity: 0, xPercent: -100 },
      {
        xPercent: 0,
        opacity: 1,
        duration: duration,
        ease: imageEase,
      }
    );

    gsap.fromTo(
      ".poster-info h2",
      { yPercent: 100, opacity: 0 },
      {
        yPercent: 0,
        opacity: 1,
        duration: duration,
        ease: textEase,
      }
    );

    gsap.fromTo(
      ".poster-info p",
      { yPercent: 100, opacity: 0 },
      {
        yPercent: 0,
        opacity: 1,
        duration: duration,
        ease: textEase,
      }
    );
  }, [currentIndex]);

  const totalPosters = galleryPoster.length;
  const goToSlide = (index) => {
    const newIndex = (index + totalPosters) % totalPosters;
    setCurrentIndex(newIndex);
  };

  const getPosterAt = (indexOffset) => {
    return galleryPoster[
      (currentIndex + indexOffset + totalPosters) % totalPosters
    ];
  };

  const currentPoster = getPosterAt(0);
  const nextPoster = getPosterAt(1);
  const prevPoster = getPosterAt(-1);

  return (
    <section id="menu" aria-labelledby="menu-heading" className="px-5">
      <h2 id="menu-heading" className="sr-only">
        Artist Posters
      </h2>

      <nav className="poster-tabs" aria-label="Artist Navigation">
        {galleryPoster.map((poster, index) => {
          const isActive = index === currentIndex;
          return (
            <button
              key={poster.id}
              className={`poster-tabs-button ${
                isActive
                  ? "text-[#00ff7f] border-[#00ff7f]"
                  : "text-white/50 border-white/50"
              }`}
              onClick={() => goToSlide(index)}
            >
              {poster.name}
            </button>
          );
        })}
      </nav>

      <div className="poster-content">
        <div className="blob-container">
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>
        </div>
        <div className="arrows">
          <button
            className="text-left"
            onClick={() => goToSlide(currentIndex - 1)}
          >
            <span>{prevPoster.name}</span>
            <img src={arrowLeft} alt="right-arrow" aria-hidden="true" />
          </button>
          <button
            className="text-left"
            onClick={() => goToSlide(currentIndex + 1)}
          >
            <span className="text-[#32cd32]">{nextPoster.name}</span>
            <img src={arrowRight} alt="left-arrow" aria-hidden="true" />
          </button>
        </div>

        <div className="poster-image relative">
          <img
            key={currentPoster.id}
            src={currentPoster.image}
            className="object-contain"
          />
        </div>

        <div className="poster-info-block w-full">
          <div ref={contentRef} className="poster-info">
            <h6>Poster for:</h6>
            <h3 id="title">{currentPoster.name}</h3>
          </div>

          <div className="poster-info details min-w-[260px] max-w-[550px] mb-[50px]">
            <div className="title-and-pulse-wrapper">
              <a
                href={currentPoster.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="watch-on-top"
              >
                <span className="watch-status">
                  <span className="status"></span>
                  <span>Watch</span>
                </span>
              </a>
              <h2>{currentPoster.title}</h2>
            </div>
            <p>{currentPoster.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PosterList;
