import React from "react";
import { useNavigate } from "react-router-dom";

// Components
import Sidebar from "../../../components/Sidebar";
import { TextButton } from "../../../components/Buttons";
import RidesList from "../../../components/List/RidesList";

import { mockDataRequest } from "../../../utils/data";


const DriverHome = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/add-ride");
  };
  
  return (
    <>
      <Sidebar />
      <TextButton text="Add a Ride" onClick={handleNavigation} />
      <div>Requests</div>
      <RidesList type="Requests" data={mockDataRequest} />
    </>
  );
};

export default DriverHome;
