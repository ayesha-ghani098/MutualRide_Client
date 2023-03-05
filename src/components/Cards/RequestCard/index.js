import React from "react";
import { createSearchParams, useNavigate } from "react-router-dom";

// Styles and Assets
import styles from "../RideCard.module.css";
import Avatar from "../../../assets/avatar.png";
import Time from "../../../assets/time.png";
import Date from "../../../assets/calendar.png";
import Money from "../../../assets/money.png";
import Source from "../../../assets/source.png";
import Destination from "../../../assets/destination.png";
import Message from "../../../assets/message.png";
import Whatsapp from "../../../assets/whatsapp.png";

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
    source,
    destination,
    date,
    fare,
    rideId
  } = props.request;
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const web3 = useSelector((state) => state.web3);
  console.log(props.request,web3)

  const handleJoin = async (id) => {
    const tx = await web3.rideSharingContractObj.methods.joinRide(id,web3.user.riderinfo.id).send({from:web3.wallet.address})
    console.log(tx);
    // joinRide(uint rideId, uint riderId)
    // TODO DEKHLENA JAHAN NAVIGATE KRNA HU
   if(tx) {navigate({
      pathname: "/passenger/my-rides",
      search: createSearchParams({
        rideId: id,
      }).toString(),
    });}
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
          <div>
          <img className={styles.whatsapp} src={Whatsapp} alt="icon" />
          <img  className={styles.message} src={Message} alt="icon" /></div>
        </div>

        <div className={styles.location}>
          <p>
            <img src={Source} alt="icon" /> source: {source}
          </p>
          <p>
            <img src={Destination} alt="icon" />
            destination: {destination}
          </p>
        </div>
        <div className={styles.cardBottom}>
          <div>
            <img src={Date} alt="icon" /> date: {date}
          </div>
          <div>
            <img src={Time} alt="icon" /> Time: {startTime}
          </div>
          <div>
            <img src={Money} alt="icon" /> {fare}
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <TextButton text="Join the ride" onClick={()=>handleJoin(rideId)} />
        </div>
      </div>
    </div>
  );
};

export default RideCard;
