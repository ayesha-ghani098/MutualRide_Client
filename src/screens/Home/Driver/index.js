import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ref, set,onValue } from "firebase/database";

// Styles
import styles from "./driver.module.css";

// Components
import { TextButton } from "../../../components/Buttons";
import RidesList from "../../../components/List/RidesList";
import Layout from "../../../components/Container";
import { Heading, Text } from "../../../components/Text";

import { mockDataRide } from "../../../utils/data";
import { db } from "../../../firebase/firebaseIns";
import { useSelector } from "react-redux";

const DriverHome = () => {
  const navigate = useNavigate();
 const web3 = useSelector (state=>state.web3)
 const [myRides,setRides] =useState([]);
  const handleNavigation = () => {
    navigate("/driver/add-ride");
  };

  useEffect(()=>{
    async function fetch(){
      console.log("from driver home fethc",web3)
      if(web3.isDriver)
      {let dataReq = await web3.rideSharingContractObj.methods.getRidesByDriverId(web3.user.driverId).call()

          const rides = await Promise.all(
            dataReq.map(async (i) => {
  
  
              let locArr = i.location.split("_");
              let timeArr = i.StartTime.split("_");
              console.log(locArr);
              const ride = {
                id: i.rideId,
                address: i.creator,
                startTime: timeArr[1],
                date: timeArr[0],
                requiredSeats: i.seats,
                sourceLong: i.sourceLong,
                sourceLat: i.sourceLat,
                destLong: i.destLong,
                destLat: i.destLat,
                source: locArr[1],
                destination: locArr[2],
                image: "",
                name: "Ayesha Ghani",
                rideId: i.rideId,
                fare:i.fair,
                isPayed:false,
                state:i.currState
              };
              return ride;
            })
          );
           console.log(rides)
          setRides(rides);
        }

     }
    
    fetch()
  },[web3])

  // FIREBASE ADD DATA REMOVE IT LATER
  const sendMessage = (message, id) => {
    set(ref(db, "messages/" + id), {
      message: message,
    })
      .then(() => {
        console.log("successfully done");
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

   // FIREBASE READ DATA REMOVE IT LATER
   const getMessages = () => {

    const messagesRef = ref(db, 'messages');

    // Fetch the data
    onValue(messagesRef, (snapshot) => {
      const messageList = [];
      snapshot.forEach((childSnapshot) => {
        const childData = childSnapshot.val();
        messageList.push(childData);
      });
      console.log(messageList)
    });
  };

  let i = 1;

  return (
    <>
      <Layout>
        <div className={styles.addRide}>
          <Text text="Get started with just one click add a ride now!" />
        </div>
        <div className={styles.addRide}>
          <TextButton text="Add a Ride" onClick={handleNavigation} />
        </div>

        <Heading text="My Rides" />
        <RidesList type="Rides" data={myRides} />
      </Layout>
    </>
  );
};

export default DriverHome;
