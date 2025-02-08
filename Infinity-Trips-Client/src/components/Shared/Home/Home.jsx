import { useLoaderData } from "react-router-dom";
import Slider from "../Slider/Slider";

const Home = () => {
  const countryData = useLoaderData();

  return (
    <div>
      <Slider countryData={countryData}></Slider>
    </div>
  );
};

export default Home;
