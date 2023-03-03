import React from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import { AiOutlineFieldTime } from "react-icons/ai";

// Styles and Assets
import styles from "./RequestCard.module.css";
import Avatar from "../../../assets/avatar.png";

// Components
import { TextButton } from "../../Buttons";
import { useDispatch, useSelector } from "react-redux";

const RideCard = (props) => {
  const {
    id,
    name,
    image,
    sourceLat,
    sourceLong,
    destLong,
    destLat,
    startTime,
    costPerKm,
  } = props.request;
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const web3 = useSelector((state) => state.web3);

  const handleJoin = async () => {
    // const tx = await web3.rideSharingContractObj.methods.joinRide(id,user.riderInfo.id)
    // console.log(tx);
    //joinRide(uint rideId, uint riderId)
    // TODO DEKHLENA JAHAN NAVIGATE KRNA HU
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
        <p>source: {sourceLat + ", " + sourceLong}</p>
        <p>destination: {destLat + ", " + destLong}</p>
        <div className={styles.cardBottom}>
          <div>
            <AiOutlineFieldTime />
            {startTime}
          </div>
          <div>date : </div>
          <div>price:</div>
          <div>Cost {costPerKm}</div>
          <div className={styles.buttonContainer}>
            <TextButton text="Join the ride" onClick={handleJoin} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RideCard;
