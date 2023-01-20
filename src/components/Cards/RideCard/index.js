import React from "react";
import { useNavigate } from "react-router-dom";
import { MdPeopleOutline } from "react-icons/md";

import styles from "./RideCard.module.css"
import Avatar from "../../../assets/avatar.png";
import { TextButton } from "../../Buttons";

const RequestCard = (props) => {
  const { name, image, source, destination, requiredSeats } = props.ride;
  const navigate = useNavigate();

  const handleAccept = () => {
    // navigate to tracking
  };

  const handleDecline = () => {
    // send notification to passenger
    navigate("/");
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
          <div>
            <MdPeopleOutline size={20} /> {requiredSeats}
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <TextButton text="Accept" onClick={handleAccept} />
          <TextButton text="Decline" onClick={handleDecline} />
        </div>
      </div>
    </div>
  );
};

export default RequestCard;