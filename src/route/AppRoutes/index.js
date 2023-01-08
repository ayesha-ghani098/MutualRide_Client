import { createBrowserRouter } from "react-router-dom";

// ProtectedRoutes hoc
import Protected from "../ProtectedRoutes";

// Components
import DriverHome from "../../screens/Home/Driver";
import PassengerHome from "../../screens/Home/Passenger";
import { AddRide, RequestRide } from "../../screens/Form";
import MyRides from "../../screens/MyRides";

const user = false;
const userType = "Driver";

const driverRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <Protected isSignedIn={user}>
        <DriverHome />
      </Protected>
    ),
  },
  {
    path: "/my-rides",
    element: (
      <Protected isSignedIn={user}>
        <MyRides />
      </Protected>
    ),
  },
  {
    path: "/add-ride",
    element: (
      <Protected isSignedIn={user}>
        <AddRide />
      </Protected>
    ),
  },
]);

const passengerRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <Protected isSignedIn={user}>
        <PassengerHome />
      </Protected>
    ),
  },
  {
    path: "/request-ride",
    element: (
      <Protected isSignedIn={user}>
        <RequestRide />
      </Protected>
    ),
  },
  {
    path: "/my-rides",
    element: (
      <Protected isSignedIn={user}>
        <MyRides />
      </Protected>
    ),
  },
]);

export const appRouter = () => {
  if (userType === "Driver") {
    return driverRouter;
  } else {
    return passengerRouter;
  }
};
