import React, { useState, useEffect } from 'react';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';

const libraries = ['places'];
const mapContainerStyle = {
  width: '100vw',
  height: '100vh',
};
const center = {
  lat: 37.7749,
  lng: -122.4194,
};
const options = {
  disableDefaultUI: true,
  zoomControl: true,
};

const LiveTracking = () => {
  const [currentPosition, setCurrentPosition] = useState(center);
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: YOUR_API_KEY_HERE,
    libraries,
  });

  useEffect(() => {
    const watchId = navigator.geolocation.watchPosition(
      ({ coords: { latitude, longitude } }) => {
        setCurrentPosition({ lat: latitude, lng: longitude });
      },
      (error) => console.error(error),
      { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
    );

    return () => navigator.geolocation.clearWatch(watchId);
  }, []);

  if (loadError) return 'Error loading maps';
  if (!isLoaded) return 'Loading maps';

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={15}
      center={currentPosition}
      options={options}
    >
      <Marker position={currentPosition} icon={{ url: '/car.svg', scaledSize: new window.google.maps.Size(40, 40) }} />
    </GoogleMap>
  );
};

export default LiveTracking;
