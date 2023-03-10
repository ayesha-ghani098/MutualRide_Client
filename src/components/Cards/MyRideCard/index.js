import React from "react";
import { createSearchParams, useNavigate} from "react-router-dom";


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
import { useDispatch, useSelector } from "react-redux";

const RideCard = (props) => {
  const {
    id,
    name,
    image,
    source,
    destination,
   fare,
   startTime,
   date,
  } = props.data;

  console.log("my rides prop",props)
  const navigate = useNavigate();


  const payFare = async () => {
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
          <TextButton text="Pay Fare" disabled={true} onClick={payFare} />
        </div>
      </div>
    </div>
  );
};

export default RideCard;
