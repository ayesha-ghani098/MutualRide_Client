import { createBrowserRouter } from "react-router-dom";

// ProtectedRoutes hoc
import Protected from "../ProtectedRoutes";

// Components
import DriverHome from "../../screens/Home/Driver";
import PassengerHome from "../../screens/Home/Passenger";
import { AddRide, RequestRide } from "../../screens/Form";
import MyRides from "../../screens/MyRides";
import {
  ConnectWallet,
  RegisterDriver,
  RegisterPassenger,
  UserSelection,
} from "../../screens/Auth";

let user = true;


export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <ConnectWallet />,
  },
  {
    path: "user-selection",
    element: <UserSelection />,
  },
  {
    path: "register-driver",
    element: <RegisterDriver />,
  },
  {
    path: "register-passenger",
    element: <RegisterPassenger />,
  },
  {
    path: "/driver-home",
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
  {
    path: "/passenger-home",
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




