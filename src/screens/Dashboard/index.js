import React, { useState } from "react";
import { Outlet } from "react-router-dom";

// Components
import NavBar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

const Dashboard = () => {
  let params = window.location.pathname.split("/");
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  return (
    <>
      <NavBar handleShow={handleShow} handleClose={handleClose} />
      <Sidebar type={params[1]} show={show} handleClose={handleClose} />
      <Outlet />
    </>
  );
};

export default Dashboard;
