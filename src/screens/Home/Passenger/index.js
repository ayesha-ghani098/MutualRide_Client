import React from "react";

// Components
import Sidebar from "../../../components/Sidebar";
import RidesList from "../../../components/List/RidesList";
import Layout from "../../../components/Container";

// Mock Data
import { mockDataRequest } from "../../../utils/data";

const PassengerHome = () => {
  

  return (
    <>
      <Sidebar />
      <Layout>
      <div>Nearby Rides</div> 
      <RidesList type="Requests" data={mockDataRequest} />
      </Layout>
    </>
  );
};

export default PassengerHome;
