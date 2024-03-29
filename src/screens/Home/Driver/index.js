import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ref, set, onValue } from "firebase/database";
import DriverTracking from "../../Tracking/Driver/index";
// Styles
import styles from "./driver.module.css";

// Components
import { TextButton } from "../../../components/Buttons";
import RidesList from "../../../components/List/RidesList";
import Layout from "../../../components/Container";
import { Heading, Text } from "../../../components/Text";
import AlertMessage from "../../../components/Alert";

import { mockDataRide } from "../../../utils/data";
import { db } from "../../../firebase/firebaseIns";
import { useSelector } from "react-redux";

const DriverHome = () => {
  const navigate = useNavigate();
  const web3 = useSelector(state => state.web3)
  const [myRides, setRides] = useState([]);
  const [driver,setDriver] = useState([]);
  const [rider,setRider] = useState([]);
  const [rideId,setRideId] = useState(null)
 const [showPopup, setPopup] = useState(false)
  const handleNavigation = () => {
    navigate("/driver/add-ride");
  };
const handlePopupRender=()=>{
    setPopup(false)

  navigate(`/driver/tracking/${driver}/${rider}/${rideId}`)

}
  const checkIfAnyRideRunning=(rides)=>{
  
    const messagesRef = ref(db, 'rides/');
    
    // Fetch the data
    onValue(messagesRef, (snapshot) => {
      const messageList = [];
      snapshot.forEach((childSnapshot) => {
        const childData = childSnapshot.val();
        messageList.push(childData);
      });
      console.log(messageList)
      messageList.forEach((e,i)=>{
        console.log(e,i)
       if((e.driver==web3.wallet.address) && e.status=="running"){
        setRider(e.rider)
        setDriver(e.driver)
        setRideId(i)
        setPopup(true)
       }

      })
    });
  
}
  useEffect(() => {
    async function fetch() {
      console.log("from driver home fethc", web3)
      if (web3.isDriver) {
        console.log(web3.user.driverId)
        let dataReq = await web3.rideSharingContractObj.methods.getRidesByDriverId(web3.user.driverId).call()
        
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
              fare: i.fair,
              isPayed: false,
              state: i.currState
            };
            return ride;
          })
        );
        console.log(rides)
        setRides(rides);
      }

    }

    fetch()
  }, [web3.isDriver])
   
  useEffect(()=>{
   if(myRides)checkIfAnyRideRunning(myRides);

  },[myRides])

  return (
    <>
     
      <Layout>
      {(driver && rider && showPopup) &&  (<DriverTracking render={false} isDriver={true} myId={driver} otherId={rider}/>)}
      {showPopup && 
(   <div onClick={handlePopupRender}>   <AlertMessage message={"Your ride is running Click here!"}/>
</div>
)      }
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
