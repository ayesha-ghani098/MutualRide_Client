import React from "react";
import { useNavigate } from "react-router-dom";

// Styles and Assets
import styles from "./RideCard.module.css";
import Avatar from "../../../assets/avatar.png";
import Time from "../../../assets/time.png";
import Date from "../../../assets/calendar.png";
import Money from "../../../assets/money.png";
import Source from "../../../assets/source.png";
import Destination from "../../../assets/destination.png";
import Message from "../../../assets/message.png";

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
        <div className={styles.info}>
          <h5>{name}</h5>
          <img src={Message} alt="icon" />
        </div>
        <div className={styles.location}>
          <p>
            <img src={Source} alt="icon" /> {source}
          </p>
          <p>
            <img src={Destination} alt="icon" />
            {destination}
          </p>
        </div>

        <div className={styles.cardBottom}>
          <div>
            <img src={Date} alt="icon" /> date{" "}
          </div>
          <div>
            <img src={Time} alt="icon" /> Time
          </div>
          <div>
            <img src={Money} alt="icon" /> Fare
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <TextButton text="Start Ride" onClick={handleStart} />
        </div>
      </div>
    </div>
  );
};

export default RequestCard;
