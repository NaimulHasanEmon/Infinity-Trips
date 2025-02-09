import { useState, useEffect } from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaLocationArrow } from "react-icons/fa";
import "./Slider.css";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Slider = ({ countryData }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % countryData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [countryData.length]);

  return (
    <div className='relative px-1'>
      <AutoplaySlider
        className='h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] 2xl:h-[610px]'
        play={true}
        interval={5000} // Interval between slides
        infinite={true}
        bullets={false} // Add this line to remove the dots
        // buttons={false} // Add this line to remove the arrows
        onTransitionEnd={(event) => setCurrentSlide(event.currentIndex)}
      >
        {countryData.map((data, idx) => (
          <div key={idx}>
            <img
              src={data.image}
              className='h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] 2xl:h-[800px] contrast-150 opacity-60 w-full object-cover'
              alt={data.country_name}
            />
            <div
              className={`absolute bottom-5 left-3 md:bottom-10 md:left-10 lg:bottom-20 lg:left-20 xl:bottom-20 xl:left-20 2xl:bottom-20 2xl:left-20 text-white z-50 pr-10 sm:pr-20 md:pr-70 lg:pr-[500px] xl:pr-[500px] 2xl:pr-[500px] ${
                currentSlide === idx ? "animate-slide-up" : ""
              }`}
            >
              <p className='text-2xl md:text-3xl lg:text-4xl xl:text-9xl slide-info-bold slider-text'>
                {data.country_name}
              </p>
              <div className='relative'>
                <Link
                  to={`/spot/${data.id}`}
                  className='pl-2 sm:pl-4 text-sm sm:text-base xl:text-base button-exploreMore w-32 sm:w-40 md:w-48 lg:w-48 xl:w-72 flex items-center gap-2 hover:transition-all hover:duration-300 hover:translate-x-1 hover:-translate-y-1 ease-in-out'
                >
                  <button className='button-explore flex items-center py-2 px-3 gap-2'>
                    <span className=''>Explore More</span>
                    <span className='text-teal-600'>
                      <FaLocationArrow />
                    </span>
                  </button>
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
  countryData: PropTypes.arrayOf(
    PropTypes.shape({
      slider_image: PropTypes.string.isRequired,
      estate_title: PropTypes.string.isRequired,
      slider_info: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Slider;
