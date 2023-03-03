import React, { useState } from "react";
import { Navbar, Container, Form } from "react-bootstrap";
import { HiOutlineMenuAlt2, HiLogout } from "react-icons/hi";
import { useSelector } from "react-redux";

// import styles from "./Sidebar.module.css";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import { driverpaths, passengerpaths } from "../../utils/data";

const Dashboard = () => {
  let navigate = useNavigate();
  let params = window.location.pathname.split("/");

  let switchText =
    params[1] === "driver" ? "Switch to Passenger" : "Switch to Driver";

  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };

  const handleProfileSwitch = () => {
    if (params[1] === "passenger") {
      navigate("/driver");
    } else {
      navigate("/passenger");
    }
  };
  return (
    <>
      <Navbar bg="light" expand="xxl">
        <Container fluid>
          <HiOutlineMenuAlt2 onClick={handleShow} size={30} />
          <Form>
            <Form.Check
              type="switch"
              id="custom-switch"
              label={switchText}
              onChange={handleProfileSwitch}
            />
          </Form>
          <HiLogout size={30} />
        </Container>
      </Navbar>
      <Sidebar type={params[1]} show={show} handleClose={handleClose} />
      <Outlet />
    </>
  );
};

export default Dashboard;
