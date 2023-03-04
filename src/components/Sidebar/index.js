import React from "react";
import { Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";

// Style and Assets
import styles from "./Sidebar.module.css";
import User from "../../assets/user.png"
import List from "../../assets/list.png"
import Add from "../../assets/add.png"
import Home from "../../assets/home.png"

// Components
import Logo from "../../components/Logo"

const Sidebar = ({ show, handleClose, type }) => {

  return (
    <Offcanvas className={styles.sidebar} show={show} onHide={handleClose}>
      <Offcanvas.Header className={styles.header} closeButton>
       <Logo/>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {type === "driver" ? (
          <>
            <Link className={styles.link} to="">
              <img src={Home} alt="icon"/>
              Home
            </Link>
            <Link className={styles.link} to="">
            <img src={User} alt="icon" />
              My Profile
            </Link>
            <Link className={styles.link} to="/driver/my-rides">
            <img src={List} alt="icon" />
              My Rides
            </Link>
            <Link className={styles.link} to="/driver/add-ride">
            <img src={Add} alt="icon" />
              Add a Ride
            </Link>
          </>
        ) : (
          <>
            <Link className={styles.link} to="">
            <img src={Home} alt="icon" />
              Home
            </Link>
            <Link className={styles.link} to="">
            <img src={User} alt="icon" />
              My Profile
            </Link>
            <Link className={styles.link} to="/passenger/my-rides">
            <img src={List} alt="icon" />
              My Rides
            </Link>
          </>
        )}
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default Sidebar;
