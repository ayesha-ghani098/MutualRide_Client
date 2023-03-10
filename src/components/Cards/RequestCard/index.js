import React, { useState,useEffect } from "react";
import { ref, set,onValue,update } from "firebase/database";
import { db } from "../../../firebase/firebaseIns";
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
import { getLocation } from "../../../utils/geoLocation";

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
  const [mylocation,setMylocation] = useState({});
  console.log(props.request,web3)

  const handleJoin = async (id) => {
    const a = await getLocation(setMylocation);
    await getLocation(setMylocation);
   console.log(mylocation)
    const tx = await web3.rideSharingContractObj.methods.joinRide(id,web3.user.riderinfo.id).send({from:web3.wallet.address})
    console.log(tx);
    // joinRide(uint rideId, uint riderId)
    // TODO DEKHLENA JAHAN NAVIGATE KRNA HU
   if(true) {
    setUserLocation(web3.wallet.address);
    setRide(id)
    navigate({
      pathname: "/passenger/my-rides",
      search: createSearchParams({
        riderId: web3.user.riderinfo.id,
      }).toString(),
    });}
  };
 
  const getMessages =  (id) => {
  
    const messagesRef = ref(db, 'users/'+id);

    // Fetch the data
    onValue(messagesRef, (snapshot) => {
      const messageList = [];
      snapshot.forEach((childSnapshot) => {
        const childData = childSnapshot.val();
        messageList.push(childData);
      });
      console.log(messageList[0])
      //setWhatsAppno(messageList[0])
      if(messageList)
      return messageList[0]
    });
  };
  const setUserLocation = async ( id) => {
   

   
    const datax={
      location: mylocation,
      cell: web3.user.riderinfo.mobileNo
      
    }
    console.log(id,datax)
    set(ref(db, "users/" + id), datax)
      .then(() => {
        console.log("successfully done");
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  const setRide = async ( id) => {
    const datax={
     rider:web3.wallet.address           
   }
   console.log(id,datax)
   update(ref(db, "rides/" + id), datax)

     .then(() => {
       console.log("successfully done");
     })
     .catch((err) => {
       console.log("err", err);
     });
 };
 const handleClickWhatsApp = async () => {
  const mobileNumber =  await getMessages("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266");
  // Replace with the desired mobile number
  const isMobile = /iPhone|iPad|iPod|Android/i.test(window.navigator.userAgent);
  const url = isMobile
    ? `whatsapp://send?phone=${mobileNumber}`
    : `https://web.whatsapp.com/send?phone=${mobileNumber}`;
  window.open(url);
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
          <img className={styles.whatsapp} onClick={handleClickWhatsApp} src={Whatsapp} alt="icon" />
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
