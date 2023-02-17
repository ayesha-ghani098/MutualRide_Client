import React from "react";
import { Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";

import styles from "./Sidebar.module.css";

import Logo from "../../assets/logo.png"

const Sidebar = ({ show, handleClose, type }) => {
  
  return (
    <Offcanvas show={show} onHide={handleClose}>
      <Offcanvas.Header className={styles.header} closeButton>
        <Offcanvas.Title className={styles.title}><img src={Logo} alt="logo"/>Mutual Ride</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {
          type === "Driver"?
          <><Link className={styles.link} to="">Home</Link>
          <Link  className={styles.link} to="my-rides">My Rides</Link>
          <Link  className={styles.link} to="add-ride">Add a Ride</Link></>
          : 
          <><Link  className={styles.link} to="">Home</Link>
          <Link  className={styles.link} to="/my-rides">My Rides</Link>
          <Link  className={styles.link} to="/request-ride">Request a Ride</Link></>
        }
 
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default Sidebar;
