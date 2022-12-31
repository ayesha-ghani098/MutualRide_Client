import React from "react";
import { useNavigate } from "react-router-dom";

const UserSelection = () => {
  let navigate = useNavigate();
  const handleSelection = (type) => {
    type === "Driver"
      ? navigate("/register-driver")
      : navigate("/register-passenger");
  };
  return (
    <>
      <button onClick={()=>handleSelection("Driver")}>Driver</button>
      <button onClick={()=>handleSelection("Passenger")}>Passenger</button>
    </>
  );
};

export default UserSelection;
