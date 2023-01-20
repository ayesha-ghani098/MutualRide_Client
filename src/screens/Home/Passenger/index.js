import React from "react";

// Components
import Sidebar from "../../../components/Sidebar";
import RidesList from "../../../components/List/RidesList";
import Layout from "../../../components/Container";
import { Heading } from "../../../components/Text";

// Mock Data
import { mockDataRequest } from "../../../utils/data";

const PassengerHome = () => {
  return (
    <>
      <Sidebar />
      <Layout>
        <Heading text="Nearby Rides" />
        <RidesList type="Requests" data={mockDataRequest} />
      </Layout>
    </>
  );
};

export default PassengerHome;
