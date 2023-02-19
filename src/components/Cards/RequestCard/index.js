import React from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import { AiOutlineFieldTime } from "react-icons/ai";
import { MdPeopleOutline } from "react-icons/md";

import styles from "./RequestCard.module.css";
import Avatar from "../../../assets/avatar.png";
import { TextButton } from "../../Buttons";
import { useDispatch, useSelector } from "react-redux";

const RideCard = (props) => {
  const {
    id,
    name,
    image,
    source ,sourceLat,sourceLong,
    destination, destLong ,destLat,
    startTime,
    seatsAvailable,
    costPerKm,
    vehicleType,
  } = props.request;
  const dispatch = useDispatch();
  const web3 = useSelector(state=>state.web3);
  console.log(props.request)
  const navigate = useNavigate();
  
  const handleNavigation = async () => {
    // const tx = await web3.rideSharingContractObj.methods.joinRide(id,user.riderInfo.id)
    // console.log(tx);
    //joinRide(uint rideId, uint riderId)
    navigate({
      pathname: "/passenger/request-ride",
      search: createSearchParams({
        rideId: id,
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
        <p>source: {sourceLat+", "+sourceLong}</p>
        <p>destination: {destLat+", "+destLong}</p>
        <div className={styles.cardBottom}>
          <div>
            <AiOutlineFieldTime />
            {startTime}
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

