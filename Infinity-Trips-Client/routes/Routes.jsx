import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import AllTouristSpot from "../src/components/Shared/AllTouristSpot/AllTouristSpot";
import AddTouristSpot from "../src/components/Shared/AddTouristSpot/AddTouristSpot";
import MyList from "../src/components/Shared/MyList/MyList";
import LogIn from "../src/components/Shared/LogIn/LogIn";
import Register from "../src/components/Shared/Register/Register";
import Home from "../src/components/Shared/Home/Home";
import PrivateRouter from "./PrivateRouter/PrivateRouter";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        loader: () => fetch("Country.json"),
        element: <Home></Home>,
      },
      {
        path: "/allTouristSpot",
        loader: () => fetch("http://localhost:5000/spots"),
        element: <AllTouristSpot></AllTouristSpot>,
      },
      {
        path: "addTouristSpot",
        element: (
          <PrivateRouter>
            <AddTouristSpot></AddTouristSpot>
          </PrivateRouter>
        ),
      },
      {
        path: "/myList",
        element: (
          <PrivateRouter>
            <MyList></MyList>
          </PrivateRouter>
        ),
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default Routes;
