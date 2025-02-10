import { useLoaderData } from "react-router-dom";
import Slider from "../Slider/Slider";

const Home = () => {
  const sliderData = useLoaderData() || [];
  console.log(sliderData);

  return (
    <div>
      <Slider slideData={sliderData} length={sliderData.length}></Slider>
    </div>
  );
};

export default Home;