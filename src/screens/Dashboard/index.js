import React, { useState } from "react";
import { Navbar, Container } from "react-bootstrap";
import { HiOutlineMenuAlt2, HiLogout } from "react-icons/hi";
import { useSelector } from "react-redux";

// import styles from "./Sidebar.module.css";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import { driverpaths, passengerpaths } from "../../utils/data";

const Dashboard = () => {
  const web3 = useSelector((state) => state.web3);
  let params = window.location.pathname.split('/');
 console.log(window.location.pathname.split('/'))
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
      <Sidebar  type={params[1]} show={show} handleClose={handleClose} />
      <Outlet />
    </>
  );
};

export default Dashboard;
