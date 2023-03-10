import React from "react";

// Firebase
import { ref, update } from "firebase/database";
import { db } from "../../../firebase/firebaseIns";

// Styles and Assets
import styles from "../RideCard.module.css";
import Avatar from "../../../assets/avatar.png";
import Time from "../../../assets/time.png";
import Date from "../../../assets/calendar.png";
import Money from "../../../assets/money.png";
import Source from "../../../assets/source.png";
import Destination from "../../../assets/destination.png";

// Components
import { TextButton } from "../../Buttons";

const RequestCard = (props) => {
  const { id, name, image, startTime, source, destination, fare, date } =
    props.ride;

  const setStatus = async (id) => {
    const datax = {
      status: "running",
    };
    console.log(id, datax);
    update(ref(db, "rides/" + id), datax)
      .then(() => {
        console.log("successfully done");
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  const handleStart = (id) => {
    // navigate to tracking
    setStatus(id);
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
            <img src={Date} alt="icon" />
            {date}
          </div>
          <div>
            <img src={Time} alt="icon" />
            {startTime}
          </div>
          <div>
            <img src={Money} alt="icon" />
            {fare}
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <TextButton text="Start Ride" onClick={() => handleStart(id)} />
        </div>
      </div>
    </div>
  );
};

export default RequestCard;
