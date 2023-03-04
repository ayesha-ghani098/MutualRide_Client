import React from "react";
import { useNavigate } from "react-router-dom";

// Styles
import styles from "./driver.module.css";

// Components
import { TextButton } from "../../../components/Buttons";
import RidesList from "../../../components/List/RidesList";
import Layout from "../../../components/Container";
import { Heading, Text } from "../../../components/Text";

import { mockDataRide } from "../../../utils/data";

const DriverHome = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/driver/add-ride");
  };

  return (
    <>
      <Layout>
        <div className={styles.addRide}>
          <Text text="Get started with just one click add a ride now!" />
        </div>
        <div className={styles.addRide}>
          <TextButton text="Add a Ride" onClick={handleNavigation} />
        </div>

        <Heading text="My Rides" />
        <RidesList type="Rides" data={mockDataRide} />
      </Layout>
    </>
  );
};

export default DriverHome;
