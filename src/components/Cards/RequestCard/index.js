import React from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import { AiOutlineFieldTime } from "react-icons/ai";
import { MdPeopleOutline } from "react-icons/md";

import styles from "./RequestCard.module.css";
import Avatar from "../../../assets/avatar.png";
import { TextButton } from "../../Buttons";

const RideCard = (props) => {
  const {
    id,
    name,
    image,
    source,
    destination,
    time,
    seatsAvailable,
    costPerKm,
    vehicleType,
  } = props.request;
  const navigate = useNavigate();

  const handleNavigation = () => {
    console.log(id);
    navigate({
      pathname: "/passenger/request-ride",
      search: createSearchParams({
        driverId: id,
      }).toString(),
    });
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
        <p>destination: {destination}</p>
        <div className={styles.cardBottom}>
          <div>
            <AiOutlineFieldTime />
            {time}
          </div>
          <div>
            <MdPeopleOutline /> {seatsAvailable}
          </div>
          <div>{vehicleType}</div>
          <div>Cost/km: {costPerKm}</div>
        </div>
        <TextButton text="Request a Ride" onClick={handleNavigation} />
      </div>
    </div>
  );
};

export default RideCard;

