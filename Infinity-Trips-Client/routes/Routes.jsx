import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import AllTouristSpot from "../src/components/Shared/AllTouristSpot/AllTouristSpot";
import AddTouristSpot from "../src/components/Shared/AddTouristSpot/AddTouristSpot";
import MyList from "../src/components/Shared/MyList/MyList";
import LogIn from "../src/components/Shared/LogIn/LogIn";
import Register from "../src/components/Shared/Register/Register";
import Home from "../src/components/Shared/Home/Home";
import PrivateRouter from "./PrivateRouter/PrivateRouter";
import ViewDetailsPage from "../src/components/Shared/VideDetailsPage/VideDetailsPage";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        loader: () => fetch("https://infinity-trips-naimulhasanemon-md-naimul-hasans-projects.vercel.app/spots"),
        element: <Home></Home>,
      },
      {
        path: "/allTouristSpot",
        loader: () => fetch("https://infinity-trips-naimulhasanemon-md-naimul-hasans-projects.vercel.app/spots"),
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
        loader: () => fetch("https://infinity-trips-naimulhasanemon-md-naimul-hasans-projects.vercel.app/spots"),
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
      {
        path: "/viewDetails/:id",
        loader: ({ params }) =>
          fetch(`https://infinity-trips-naimulhasanemon-md-naimul-hasans-projects.vercel.app/spots/${params.id}`),
        element: <ViewDetailsPage></ViewDetailsPage>,
      },
    ],
  },
]);

export default Routes;
