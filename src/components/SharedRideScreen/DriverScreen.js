import React, { useEffect, useState } from 'react';
import { useFirebase } from 'firebase/app';
import 'firebase/database';
import { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer, Marker } from '@react-google-maps/api';

const DriverMap = ({ driverId, destination }) => {
  const firebase = useFirebase();
  const [driverLocation, setDriverLocation] = useState({ lat: 0, lng: 0 });
  const [directions, setDirections] = useState(null);

  useEffect(() => {
    const driverLocationRef = firebase.database().ref(`drivers/${driverId}/location`);
    driverLocationRef.on('value', (snapshot) => {
      const location = snapshot.val();
      setDriverLocation({ lat: location.latitude, lng: location.longitude });
    });

    return () => {
      driverLocationRef.off('value');
    };
  }, [firebase, driverId]);

  const directionsCallback = (response) => {
    if (response !== null) {
      setDirections(response);
    }
  };

  return (
    <LoadScript googleMapsApiKey="YOUR_API_KEY">
      <GoogleMap center={driverLocation} zoom={15}>
        <Marker position={driverLocation} />

        {destination && (
          <DirectionsService
            options={{
              destination,
              origin: driverLocation,
              travelMode: 'DRIVING',
            }}
            callback={directionsCallback}
          />
        )}

        {directions && <DirectionsRenderer directions={directions} />}
      </GoogleMap>
    </LoadScript>
  );
};

export default DriverMap;
