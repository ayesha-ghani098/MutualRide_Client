import React from "react";
import { useNavigate } from "react-router-dom";

// Components
import Sidebar from "../../../components/Sidebar";
import { TextButton } from "../../../components/Buttons";
import RidesList from "../../../components/List/RidesList";
import Layout from "../../../components/Container";
import { Heading } from "../../../components/Text";

import { mockDataRide } from "../../../utils/data";

const DriverHome = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/driver/add-ride");
  };

  return (
    <>
      <Sidebar />
      <Layout>
        <TextButton text="Add a Ride" onClick={handleNavigation} />
        <Heading text="Requests" />
        <RidesList type="Rides" data={mockDataRide} />
      </Layout>
    </>
  );
};

export default DriverHome;
