import React from "react";

// Components
import Sidebar from "../../../components/Sidebar";
import RidesList from "../../../components/List/RidesList";

// Mock Data
import { mockDataRide } from "../../../utils/data";

const PassengerHome = () => {
  

  return (
    <>
      <Sidebar />
      <div>Nearby Rides</div>
      <RidesList type="Rides" data={mockDataRide} />
    </>
  );
};

export default PassengerHome;
