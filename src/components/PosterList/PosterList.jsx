import { galleryPoster } from "../../data/posterData.js";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import arrowLeft from "../../assets/icons/arrowLeft.svg";
import arrowRight from "../../assets/icons/arrowRight.svg";

const PosterList = () => {
  const contentRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);
  useGSAP(() => {
    gsap.fromTo("title", { opacity: 0 }, { opacity: 1, duration: 1 });
    gsap.fromTo(
      ".poster-image img",
      { opacity: 0, xPercent: -100 },
      {
        xPercent: 0,
        opacity: 1,
        duration: 1,
        ease: "power1.inOut",
      }
    );
    gsap.fromTo(
      ".poster-info h2",
      { yPercent: 100, opacity: 0 },
      {
        yPercent: 0,
        opacity: 100,
        ease: "power1.inOut",
      }
    );
    gsap.fromTo(
      ".poster-info p",
      { yPercent: 100, opacity: 0 },
      {
        yPercent: 0,
        opacity: 100,
        ease: "power1.inOut",
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
                  ? "text-white border-white"
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
            <span>{nextPoster.name}</span>
            <img src={arrowRight} alt="left-arrow" aria-hidden="true" />
          </button>
        </div>

        <div className="poster-image relative">
          <img src={currentPoster.image} className="object-contain" />
        </div>

        <div className="poster-info-block w-full">
          <div ref={contentRef} className="poster-info">
            <p>Poster for:</p>
            <p id="title">{currentPoster.name}</p>
          </div>

          <div className="poster-info details">
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
