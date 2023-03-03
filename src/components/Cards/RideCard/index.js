import React from "react";
import { useNavigate } from "react-router-dom";

// Styles and Assets
import styles from "./RideCard.module.css";
import Avatar from "../../../assets/avatar.png";

// Components
import { TextButton } from "../../Buttons";

const RequestCard = (props) => {
  const { name, image, source, destination } = props.ride;
  
  const navigate = useNavigate();

  const handleStart = () => {
    // navigate to tracking
  };

  return (
    <div className={styles.card}>
      <img
        className={styles.avatar}
        src={image ? image : Avatar}
        alt="user-avatar"
      />
      <div className={styles.cardBody}>
        <h6>{name}</h6>
        <p>source: {source}</p>
        <p>destination: {destination} </p>
        <div className={styles.cardBottom}>
          <div>date : </div>
          <div>Time:</div>
          <div>Fare :</div>
        </div>
        <div className={styles.buttonContainer}>
          <TextButton text="Start" onClick={handleStart} />
        </div>
      </div>
    </div>
  );
};

export default RequestCard;
