import React, { useState } from "react";
import { Navbar, Container } from "react-bootstrap";
import { HiOutlineMenuAlt2, HiLogout } from "react-icons/hi";

// import styles from "./Sidebar.module.css";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import { driverpaths, passengerpaths } from "../../utils/data";

const type="Driver"
const Dashboard = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };
  return (
    <>
      <Navbar bg="light" expand="xxl">
        <Container fluid>
              <HiOutlineMenuAlt2 onClick={handleShow} size={30} />
              <HiLogout size={30} />
        </Container>
      </Navbar>
      <Sidebar  type={type} show={show} handleClose={handleClose} />
      <Outlet />
    </>
  );
};

export default Dashboard;
