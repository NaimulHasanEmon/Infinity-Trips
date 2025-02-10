import { Outlet } from "react-router-dom";
import Header from "../src/components/Header/Header";
import Footer from "../src/components/Footer/Footer";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Loader from "../Loader/Loader";

const Root = () => {
  const { loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className='flex h-screen justify-center items-center my-auto'>
        <Loader />
      </div>
    );
  }

  return (
    <div className="max-w-5xl xl:max-w-7xl mx-auto">
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
