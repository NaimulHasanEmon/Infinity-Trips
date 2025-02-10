import { useLoaderData } from "react-router-dom";
import AllTouristSpotCard from "../AllTouristSpotCard/AllTouristSpotCard";
import { FaArrowRightLong } from "react-icons/fa6";
import { useState } from "react";

const AllTouristSpot = () => {
  const loadedSpots = useLoaderData();
  const [spots, setSpots] = useState(loadedSpots);

  const handleLowToHigh = () => {
    const sortedSpots = [...spots].sort(
      (a, b) => a.averageCost - b.averageCost
    );
    setSpots(sortedSpots);
  };

  const handleHighToLow = () => {
    const sortedSpots = [...spots].sort(
      (a, b) => b.averageCost - a.averageCost
    );
    setSpots(sortedSpots);
  };

  return (
    <div className='mb-10'>
      <div>
        {/* Filter */}
        <div className='dropdown dropdown-right dropdown-end'>
          <div tabIndex={0} role='button' className='btn m-1'>
            Filter ➡️
          </div>
          <ul
            tabIndex={0}
            className='dropdown-content menu bg-base-100 rounded-box z-1 p-2 shadow-sm'
          >
            <li>
              <a onClick={handleLowToHigh} className='flex items-center'>
                Low{" "}
                <span>
                  <FaArrowRightLong />
                </span>{" "}
                High
              </a>
            </li>
            <li>
              <a onClick={handleHighToLow} className='flex items-center'>
                High{" "}
                <span>
                  <FaArrowRightLong />
                </span>{" "}
                Low
              </a>
            </li>
          </ul>
        </div>
        {/* Spot Cart */}
        <div className='grid md:grid-cols-3 xl:grid-cols-4 gap-5 justify-center'>
          {spots.map((spot) => (
            <AllTouristSpotCard key={spot.id} spot={spot}></AllTouristSpotCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllTouristSpot;
