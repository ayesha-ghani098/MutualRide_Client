import React from "react";
import { useNavigate } from "react-router-dom";

// Components
import Sidebar from "../../../components/Sidebar";
import {TextButton} from "../../../components/Buttons";

const DriverHome = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/add-ride");
  };
  return (
    <>
      {/* header and sidebar work later */}
      <Sidebar />
      <TextButton text="Add a Ride" onClick={handleNavigation} />
      <div>Driver home</div>
    </>
  );
};

export default DriverHome;
