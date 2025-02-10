import { useState, useEffect } from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaLocationArrow } from "react-icons/fa";
import "./Slider.css";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Slider = ({ slideData, length }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % length);
    }, 5000);

    return () => clearInterval(interval);
  }, [length]);

  return (
    <div className='relative px-1'>
      <AutoplaySlider
        className='h-[300px] sm:h-[400px] md:h-[500px] lg:h-[450px] 2xl:h-[623px]'
        play={true}
        interval={5000} // Interval between slides
        infinite={true}
        bullets={false} // Add this line to remove the dots
        // buttons={false} // Add this line to remove the arrows
        onTransitionEnd={(event) => setCurrentSlide(event.currentIndex)}
      >
        {slideData.map((data, idx) => (
          <div
            key={idx}
            className='h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] 2xl:h-[800px]'
          >
            <img
              src={data.imageURL}
              className='h-full contrast-150 opacity-60 w-screen object-cover'
              alt={data.countryName}
            />
            <div
              className={`absolute bottom-5 left-3 md:bottom-10 md:left-10 lg:left-20 text-white z-50 pr-10 sm:pr-20 md:pr-70 lg:pr-[500px] xl:pr-[500px] 2xl:pr-[500px] ${
                currentSlide === idx ? "animate-slide-up" : ""
              }`}
            >
              <p className='text-2xl md:text-3xl lg:text-8xl xl:text-9xl slide-info-bold slider-text'>
                {data.countryName}
              </p>
              <div className='relative'>
                <Link
                  to={`/viewDetails/${data._id}`}
                  className='button-explore pl-2 sm:pl-4 text-sm sm:text-base xl:text-base w-32 sm:w-45 xl:w-45 flex items-center py-2 px-3 gap-2 hover:transition-all hover:duration-300 hover:translate-x-1 hover:-translate-y-1 ease-in-out'
                >
                  <span className=''>Explore More</span>
                  <span className='text-teal-600'>
                    <FaLocationArrow />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </AutoplaySlider>
    </div>
  );
};

Slider.propTypes = {
  slideData: PropTypes.arrayOf(
    PropTypes.shape({
      imageURL: PropTypes.string.isRequired,
      countryName: PropTypes.string.isRequired,
    })
  ).isRequired,
  length: PropTypes.number.isRequired,
};

export default Slider;
