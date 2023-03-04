import React, { useEffect, useState } from 'react';
import { db as firebase }  from '../../firebase/firebaseIns';
import GoogleMap from "../../screens/Form/AddRideForm/googleMap"

const DriverMap = ({ driverId, destination }) => {
  destination={
    lat: 37.7749,
    lng: -122.4194,
  }

  const [center,setCenter] = useState({
    lat: 37.7749,
    lng: -122.4194,
  });
  // useEffect(() => {
  //   const driverLocationRef = firebase.database().ref(`drivers/${driverId}/location`);
  //   driverLocationRef.on('value', (snapshot) => {
  //     const location = snapshot.val();
  //     setDriverLocation({ lat: location.latitude, lng: location.longitude });
  //   });

  //   return () => {
  //     driverLocationRef.off('value');
  //   };
  // }, [firebase, driverId]);

  // const directionsCallback = (response) => {
  //   if (response !== null) {
  //     setDirections(response);
  //   }
  // };

  return (
   <GoogleMap destination={destination} source={center}/>

  );
};

export default DriverMap;
