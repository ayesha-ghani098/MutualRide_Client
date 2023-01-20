import React from "react";
import { useNavigate } from "react-router-dom";

// Components
import Sidebar from "../../../components/Sidebar";
import { TextButton } from "../../../components/Buttons";
import RidesList from "../../../components/List/RidesList";

import { mockDataRide } from "../../../utils/data";
import Layout from "../../../components/Container";

const DriverHome = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/add-ride");
  };

  return (
    <>
      <Sidebar />
      <Layout>
        <TextButton text="Add a Ride" onClick={handleNavigation} />
        <div>Requests</div>
        <RidesList type="Rides" data={mockDataRide} />
      </Layout>
    </>
  );
};

export default DriverHome;
