import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// Styles and Assets
import styles from "./UserSelection.module.css";
import LandingPageImage from "../../../../assets/landingPage.jpg";
import Driver from "../../../../assets/Selection/img1.png";
import Passenger from "../../../../assets/Selection/img2.png";

// Components
import { ImgButton } from "../../../../components/Buttons";

// Redux
import { setSelectedUser } from "../../../../redux/web3/actions";
import { Heading2 } from "../../../../components/Text/Heading";
import { Text } from "../../../../components/Text";

const UserSelection = () => {
  const web3 = useSelector((state) => state.web3);
  const dispatch = useDispatch();

  let navigate = useNavigate();

  const handleSelection = (type) => {
    type === "Driver"
      ? navigate("/register-driver")
      : navigate("/register-passenger");

    if (type === "Driver") {
      if (web3.connected) {
        if (
          web3.user.user_type === "driver" ||
          web3.user.user_type === "both"
        ) {
          dispatch(setSelectedUser("driver"));
          navigate("/driver");
        }
      } else {
        navigate("/register-driver");
      }
    } else if (type === "Passenger") {
      if (web3.connected) {
        if (web3.user.user_type === "rider" || web3.user.user_type === "both") {
          dispatch(setSelectedUser("rider"));
          navigate("/passenger");
        }
      } else {
        navigate("/register-passenger");
      }
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div>
          <Heading2 text="Select User" />
          <Text text="Select your travel partner with just a few taps whether you're looking for a driver or a passenger."/>
          <div className={styles.btnContainer}>
            
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
      <div className={styles.right}>
        <img
          className="img-fluid"
          src={LandingPageImage}
          alt="landing page illustration"
        />
      </div>
    </div>
  );
};

export default UserSelection;
