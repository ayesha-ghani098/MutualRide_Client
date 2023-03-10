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

// Components
import { TextButton } from "../../Buttons";
import { useSelector } from "react-redux";
import Web3 from "../../../utils/web3";

const RideCard = (props) => {
  const web3 = useSelector((state) => state.web3);

  const { id, name, image, source, destination, fare, startTime, date } =
    props.data;

  console.log("my rides prop", props);
  const navigate = useNavigate();

  const payFare = async () => {
    const options = {
      from: web3.wallet.address,
      value: Web3.utils.toWei(String(300000), 'gwei'),
      gasLimit: 3000000, // adjust gas limit as per your requirement
    };
    const tx = await web3.rideSharingContractObj.methods.payForRide(id).send(options);
    console.log(tx);
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
            <img src={Date} alt="icon" /> {date}
          </div>
          <div>
            <img src={Time} alt="icon" /> {startTime}
          </div>
          <div>
            <img src={Money} alt="icon" /> {fare}
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <TextButton text="Pay Fare" onClick={payFare} />
        </div>
      </div>
    </div>
  );
};

export default RideCard;
