import React, { useState } from "react";
import { useSelector } from "react-redux";
import { createSearchParams, useNavigate } from "react-router-dom";

// Firebase
import { ref, set, update, child, get, getDatabase } from "firebase/database";
import { db } from "../../../firebase/firebaseIns";

// Styles and Assets
import styles from "../RideCard.module.css";
import Avatar from "../../../assets/avatar.png";
import Time from "../../../assets/time.png";
import Date from "../../../assets/calendar.png";
import Money from "../../../assets/money.png";
import Source from "../../../assets/source.png";
import Destination from "../../../assets/destination.png";
import Whatsapp from "../../../assets/whatsapp.png";

// Utils
import { getLocation } from "../../../utils/geoLocation";

// Components
import { TextButton } from "../../Buttons";

const RideCard = (props) => {
  const {
    name,
    image,
    startTime,
    source,
    destination,
    date,
    fare,
    rideId,
    address,
  } = props.request;

  const navigate = useNavigate();

  const web3 = useSelector((state) => state.web3);
  const [mylocation, setMylocation] = useState({});
  console.log(props.request, web3);

  const handleJoin = async (id) => {
    const a = await getLocation(setMylocation);
    await getLocation(setMylocation);
    console.log(mylocation);
    const tx = await web3.rideSharingContractObj.methods
      .joinRide(id, web3.user.riderinfo.id)
      .send({ from: web3.wallet.address });
    console.log(tx);
    // joinRide(uint rideId, uint riderId)
    // TODO DEKHLENA JAHAN NAVIGATE KRNA HU
    if (true) {
      setUserLocation(web3.wallet.address);
      setRide(id);
      navigate({
        pathname: "/passenger/my-rides",
        search: createSearchParams({
          riderId: web3.user.riderinfo.id,
        }).toString(),
      });
    }
  };

  const setUserLocation = async (id) => {
    const datax = {
      location: mylocation,
      cell: web3.user.riderinfo.mobileNo,
    };
    set(ref(db, "users/" + id), datax)
      .then(() => {
        console.log("successfully done");
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const setRide = async (id) => {
    const datax = {
      rider: web3.wallet.address,
    };
    update(ref(db, "rides/" + id), datax)
      .then(() => {
        console.log("successfully done");
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const getPhoneNumber = (id) => {
    const dbRef = ref(getDatabase());
    return get(child(dbRef, `users/${id}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          return snapshot.val().cell;
        } else {
          throw new Error("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
        throw error;
      });
  };

  const handleClickWhatsApp = async () => {
    let id = address;
    try {
      const phoneNumber = await getPhoneNumber(id);
      console.log(phoneNumber);
      if (phoneNumber) {
        const isMobile = /iPhone|iPad|iPod|Android/i.test(
          window.navigator.userAgent
        );
        const url = isMobile
          ? `whatsapp://send?phone=${phoneNumber}`
          : `https://wa.me/${phoneNumber}`;
        window.open(url);
      } else {
        console.log("No phone number found");
      }
    } catch (error) {
      console.error(error);
    }
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
            <img
              className={styles.whatsapp}
              onClick={handleClickWhatsApp}
              src={Whatsapp}
              alt="icon"
            />
          </div>
        </div>

        <div className={styles.location}>
          <p>
            <img src={Source} alt="icon" />
            {source}
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
            <img src={Time} alt="icon" />
            {startTime}
          </div>
          <div>
            <img src={Money} alt="icon" /> {fare}
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <TextButton text="Join the ride" onClick={() => handleJoin(rideId)} />
        </div>
      </div>
    </div>
  );
};

export default RideCard;
