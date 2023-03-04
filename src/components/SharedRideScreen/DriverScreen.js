import React, { useEffect, useState } from 'react';
import { db }  from '../../firebase/firebaseIns';
import { onValue, ref } from "firebase/database";

import GoogleMap from "../../screens/Form/AddRideForm/googleMap"

const DriverMap = ({ driverId, destination }) => {
  
  destination={
    lat: 37.7749,
    lng: -122.4194,
  }
  const [destinatison,setDriverLocation] = useState({
    lat: 37.7749,
    lng: -122.4194,
  });
  const [center,setCenter] = useState({
    lat: 37.7749,
    lng: -122.4194,
  });
  const [projects, setProjects] = useState([]);

    useEffect(() => {
      const query = ref(db, "projects");
      return onValue(query, (snapshot) => {
        const data = snapshot.val();
        console.log(snapshot)

        if (snapshot.exists()) {
          Object.values(data).map((project) => {
            console.log(data)
            setProjects((projects) => [...projects, project]);
          });
        }
      });
    }, []);



  return (
   <GoogleMap search={false} destination={destination} source={center}/>

  );
};

export default DriverMap;
