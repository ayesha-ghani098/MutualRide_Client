import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { fbIns as firebase } from '../../firebase/firebaseIns';

const UserScreen = () => {
  const [driverLocation, setDriverLocation] = useState(null);

  useEffect(() => {

    // Get real-time updates of driver's location from Firebase
    const driverLocationRef = firebase.database().ref('driverLocation');
    driverLocationRef.on('value', (snapshot) => {
      const location = snapshot.val();
      setDriverLocation(location);
    });

    return () => {
      // Unsubscribe from Firebase updates when component unmounts
      driverLocationRef.off();
    };
  }, []);

  // User's current location (example)
  const userLocation = { lat: 37.7749, lng: -122.4194 };

  return (
    <LoadScript
      googleMapsApiKey="your-api-key"
    >
      <GoogleMap
        center={userLocation}
        zoom={12}
      >
        {driverLocation && (
          <Marker
            position={{ lat: driverLocation.lat, lng: driverLocation.lng }}
            icon={{
              url: '/car-marker.png',
              scaledSize: new window.google.maps.Size(50, 50),
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(25, 25),
            }}
          />
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default UserScreen;
