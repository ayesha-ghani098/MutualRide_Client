import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

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
import Dashboard from "../../screens/Dashboard";

let user = true;

const AppRoutes = (props) => {
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
            <Protected isSignedIn={user}>
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
            index
            path="request-ride"
            element={
              <Protected isSignedIn={user}>
                <RequestRide />
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