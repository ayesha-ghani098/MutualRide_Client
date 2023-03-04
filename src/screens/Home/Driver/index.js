import React from "react";
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

const DriverHome = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/driver/add-ride");
  };

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
      <button onClick={getMessages}>Get Message (see in console)</button>
        <button onClick={() => sendMessage("hello", i++)}>
          send msg to firebase
        </button>
        <div className={styles.addRide}>
          <Text text="Get started with just one click add a ride now!" />
        </div>
        <div className={styles.addRide}>
          <TextButton text="Add a Ride" onClick={handleNavigation} />
        </div>

        <Heading text="My Rides" />
        <RidesList type="Rides" data={mockDataRide} />
      </Layout>
    </>
  );
};

export default DriverHome;
