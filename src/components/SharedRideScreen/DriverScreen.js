import React, { useEffect, useState } from 'react';
import { db }  from '../../firebase/firebaseIns';
import { onValue, ref } from "firebase/database";

import GoogleMap from "../../screens/Form/AddRideForm/googleMap"

const DriverMap = ({ source, destination }) => {
  
  let a={
    lat: 37.7749,
    lng: -122.4194,
  }

  const [center,setCenter] = useState({
    lat: 37.7749,
    lng: -122.4194,
  });

  console.log(source, center)


  return (
   <GoogleMap search={false} destination={destination} source={source}/>

  );
};

export default DriverMap;
