import React, { useState,useEffect } from "react";
import { ref, set,onValue,update } from "firebase/database";
import { db } from "../../../firebase/firebaseIns";

// Components
import AlertMessage from "../../../components/Alert";
import DriverMap from "../../../components/SharedRideScreen/DriverScreen";
import { getLocation } from "../../../utils/geoLocation";

const DriverTracking = ({render,myId,otherId,isDriver}) => {
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
      sendMessage(myId)
      getMessages(otherId);
      const interval = setInterval(() => {
           getLocation(setmyLocation);
           sendMessage(myId)
           getMessages(otherId);  


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
        setOtherLocation(messageList[0])
      });
    };

  return (
    <div>

        <>
{    render && <DriverMap source={mylocation} destination={otherlocation} />}
   {isDriver && render &&  <button>Complete</button>}
      
      </>
      

    </div>
  );
};

export default DriverTracking;
