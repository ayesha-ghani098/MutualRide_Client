import React from "react";
import { Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";

import styles from "./Sidebar.module.css";

const Sidebar = ({ show, handleClose, paths }) => {
  // TODO links and styles need to be add
  console.log("yhi hai", paths);
  return (
    <Offcanvas show={show} onHide={handleClose}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Mutual Ride</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {/* {paths.map((link, index) => {
          return (
            <Link key={index} to={link.path}>
              {link.name}
            </Link>
          );
        })} */}
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default Sidebar;
