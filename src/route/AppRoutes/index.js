import { createBrowserRouter } from "react-router-dom";

// ProtectedRoutes hoc
import Protected from "../ProtectedRoutes";

// Components
import DriverHome from "../../screens/Home/Driver";
import PassengerHome from "../../screens/Home/Passenger";

const user = true;
const userType = "Drier";

const driverRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <Protected isSignedIn={user}>
        <DriverHome />
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
]);

export const appRouter = () => {
  if (userType === "Driver") {
    return driverRouter;
  } else {
    return passengerRouter;
  }
};
