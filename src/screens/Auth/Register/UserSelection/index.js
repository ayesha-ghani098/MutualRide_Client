import React from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import styles from "./UserSelection.module.css";
import Logo from "../../../../assets/logo.png";
import Driver from "../../../../assets/Selection/img1.png";
import Passenger from "../../../../assets/Selection/img2.png";
import { ImgButton } from "../../../../components/Buttons";

const UserSelection = () => {
  let navigate = useNavigate();
  const handleSelection = (type) => {
    type === "Driver"
      ? navigate("/register-driver")
      : navigate("/register-passenger");
  };
  return (
    <Container fluid className={styles.container}>
      <div className={styles.centeredDiv}>
        <div className={styles.content}>
          <div className={styles.buttonContainer}>
            <ImgButton
              src={Driver}
              label="Driver"
              onClick={() => handleSelection("Driver")}
            />
            <ImgButton
              src={Passenger}
              label="Passenger"
              onClick={() => handleSelection("Passenger")}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default UserSelection;
