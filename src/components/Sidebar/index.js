import React from "react";
import { Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

// Style and Assets
import styles from "./Sidebar.module.css";
import User from "../../assets/user.png";
import List from "../../assets/list.png";
import Add from "../../assets/add.png";
import Home from "../../assets/home.png";
import Avatar from "../../assets/avatar.png";

const Sidebar = ({ show, handleClose, type }) => {
  const web3 = useSelector((state) => state.web3);

  console.log("web2333", web3);

  return (
    <Offcanvas className={styles.sidebar} show={show} onHide={handleClose}>
      <div className={styles.header}>
        <img src={Avatar} alt="user avatar" />
        <div>
          {type === "driver" ? (
            <>
              <h5>{web3?.user?.driverinfo?.name}</h5>
              <p>{web3?.user?.driverinfo?.email}</p>
            </>
          ) : (
            <>
              <h5>{web3?.user?.riderinfo?.name}</h5>
              <p>{web3?.user?.riderinfo?.email}</p>
            </>
          )}
        </div>
      </div>
      <Offcanvas.Body>
        {type === "driver" ? (
          <>
            <Link className={styles.link} to="">
              <img src={Home} alt="icon" />
              Home
            </Link>
            {/* <Link className={styles.link} to="profile">
              <img src={User} alt="icon" />
              My Profile
            </Link> */}
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
            {/* <Link className={styles.link} to="profile">
              <img src={User} alt="icon" />
              My Profile
            </Link> */}
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
