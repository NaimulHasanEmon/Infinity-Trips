import { useLoaderData } from "react-router-dom";
import AllTouristSpotCard from "../AllTouristSpotCard/AllTouristSpotCard";

const AllTouristSpot = () => {
  const loadedSpots = useLoaderData();
  console.log(loadedSpots);

  return (
    <div className='flex gap-10 my-10 justify-center'>
      {loadedSpots.map((spot) => (
        <AllTouristSpotCard key={spot.id} spot={spot}></AllTouristSpotCard>
      ))}
    </div>
  );
};

export default AllTouristSpot;
