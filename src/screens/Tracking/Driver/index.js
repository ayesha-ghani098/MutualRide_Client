import React, { useState,useEffect } from "react";
import { ref, set,onValue,update } from "firebase/database";
import { db } from "../../../firebase/firebaseIns";
import { Routes, Route, useParams, Navigate, useNavigate } from 'react-router-dom';

// Components
import AlertMessage from "../../../components/Alert";
import DriverMap from "../../../components/SharedRideScreen/DriverScreen";
import { getLocation } from "../../../utils/geoLocation";

const DriverTracking = (props) => {
  const navigate = useNavigate()

  const {driver,rider,id}= useParams()
  let myId, otherId,rideId
  if(!props.myId && !props.otherId){
     if(props.isDriver) {
      myId=driver
      otherId=rider
      rideId=id
     }else{
      myId=driver
      otherId=driver
      rideId=id

     }  
  }
   console.log(props)
 
  const [status, setStatus] = useState();
  const [mylocation,setmyLocation]=useState({
    "lat": 24.9644782,
    "lng": 67.0167
})
  const [otherlocation,setOtherLocation]=useState({
    "lat": 24.8532,
    "lng": 67.0715994
})

  // routes bh add krdiye hyn tracking k dekhlena 
    // FIREBASE ADD DATA REMOVE IT LATER
    
    // getLocation(setLocation);
    // setInterval(function() {
    //  getLocation(setLocation);
     
    // console.log('This function will run every 5 seconds',location);
    // }, 10000);
    useEffect(() => {
      sendMessage(props.myId || myId)
      // getMessages(props.otherId||otherId);
      const interval = setInterval(() => {
           getLocation(setmyLocation);
           sendMessage(props.myId || myId)
          //  getMessages(props.otherId || otherId);  


    console.log('This function will run every 5 seconds');
      }, 40000);
      return () => clearInterval(interval);
    }, []);
   


    const sendMessage = ( id) => {
      console.log(mylocation)
      update(ref(db, "users/" + id), {
        location: mylocation
      })
      .then(() => {
          console.log("successfully done");
        })
        .catch((err) => {
          console.log("err", err);
        });
    };
  
     // FIREBASE READ DATA REMOVE IT LATER
     const getMessages = (id) => {
  
      const messagesRef = ref(db, 'users/'+id);
  
      // Fetch the data
      onValue(messagesRef, (snapshot) => {
        const messageList = [];
        snapshot.forEach((childSnapshot) => {
          const childData = childSnapshot.val();
          messageList.push(childData);
        });
        console.log(messageList)
     //   setOtherLocation(messageList[0])
      });
    };
    const setRide = async (id) => {
      const datax = {
        status: "completed",
      };
      update(ref(db, "rides/" + id), datax)
        .then(() => {
          console.log("successfully done");
        })
        .catch((err) => {
          console.log("err", err);
        });
        navigate("/driver")
    };
  return (
    <div>

        <>
{    props.render && <DriverMap source={mylocation} destination={otherlocation} />}
 {props.isDriver &&  props.render  && <button onClick={()=>setRide(id)}>Complete</button>}
      
      </>
      

    </div>
  );
};

export default DriverTracking;
