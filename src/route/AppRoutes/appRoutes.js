import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// ProtectedRoutes hoc
import Protected from "../ProtectedRoutes";

// Components
import DriverHome from "../../screens/Home/Driver";
import PassengerHome from "../../screens/Home/Passenger";
import { AddRide } from "../../screens/Form";
import MyRides from "../../screens/MyRides";
import {
  ConnectWallet,
  RegisterDriver,
  RegisterPassenger,
  UserSelection,
} from "../../screens/Auth";
import Dashboard from "../../screens/Dashboard";
import PassengerTracking from "../../screens/Tracking/Passenger";
import DriverTracking from "../../screens/Tracking/Driver";
import PassengerProfile from "../../screens/Profile/Passenger";
import DriverProfile from "../../screens/Profile/Driver";

let user = true;

const AppRoutes = ({ web3 }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ConnectWallet />} />

        <Route path="/user-selection" element={<UserSelection />} />
        <Route path="/register-driver" element={<RegisterDriver />} />
        <Route path="/register-passenger" element={<RegisterPassenger />} />

        <Route
          path="/driver"
          element={
            <Protected isSignedIn={user}>
              <Dashboard />
            </Protected>
          }
        >
          <Route
            path=""
            element={
              <Protected isSignedIn={user}>
                <DriverHome />
              </Protected>
            }
          />
          <Route
            index
            path="my-rides"
            element={
              <Protected isSignedIn={user}>
                <MyRides />
              </Protected>
            }
          />
          <Route
            index
            path="profile"
            element={
              <Protected isSignedIn={user}>
                <DriverProfile />
              </Protected>
            }
          />
          <Route
            path="tracking"
            element={
              <Protected isSignedIn={user}>
                <DriverTracking />
              </Protected>
            }
          />
          <Route
            path="add-ride"
            element={
              <Protected isSignedIn={user}>
                <AddRide />
              </Protected>
            }
          />
        </Route>
        <Route
          path="/passenger"
          element={
            <Protected isSignedIn={web3.user.isRider}>
              <Dashboard />
            </Protected>
          }
        >
          <Route
            path=""
            element={
              <Protected isSignedIn={user}>
                <PassengerHome />
              </Protected>
            }
          />
          <Route
            path="tracking"
            element={
              <Protected isSignedIn={web3.anyRideInRunning}>
                <PassengerTracking />
              </Protected>
            }
          />
          <Route
            index
            path="profile"
            element={
              <Protected isSignedIn={user}>
                <PassengerProfile />
              </Protected>
            }
          />
          <Route
            path="my-rides"
            element={
              <Protected isSignedIn={user}>
                <MyRides />
              </Protected>
            }
          />
        </Route>

        <Route path="/*" element={<div>Route not found</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
