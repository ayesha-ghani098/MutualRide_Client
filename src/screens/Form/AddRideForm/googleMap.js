import React, { useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  StandaloneSearchBox,
  DirectionsService, DirectionsRenderer
} from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100vh",
};


const libraries=["places"]
const Map = ({setLocationName, locationName, destination,setDestination,source,setSource}) => {
  const [response, setResponse] = useState(null);

  const [sourceSearchBox, setSourceSearchBox] = useState(null);
  const [destinationSearchBox, setdestinationSearchBox] = useState(null);

  const [center,setCenter] = useState({
    lat: 37.7749,
    lng: -122.4194,
  });
  const onSourceChanged = () => {

    if(!sourceSearchBox){
      console.error('Search boxes not initialized');
    return
    }
    const places = sourceSearchBox.getPlaces();
    console.log(places)
    if (places.length > 0) {
      console.log(places[0].geometry)
      setSource(places[0].geometry.location);
      setCenter(places[0].geometry.location)
      setLocationName(prevState=> prevState+"_" + places[0].name)

    }
  };

  const onSourceLoad = (ref) => {
    setSourceSearchBox(ref)
  };


  const onDestinationChanged = () => {

    if(!destinationSearchBox){
      console.error('Search boxes not initialized');
    return
    }
    const places = destinationSearchBox.getPlaces();
    console.log(places)
    if (places.length > 0) {
      console.log(places[0].geometry)
      setDestination(places[0].geometry.location);
      setCenter(places[0].geometry.location)
      setLocationName(prevState=> prevState+"_"+places[0].name)
    }
  };

  const onDestinationLoad = (ref) => {
    setdestinationSearchBox(ref)
  };

  const directionsCallback = (res) => {
    if (res !== null) {
      setResponse(res);
    }
  };

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyCt0we836OdQbFQolLK_aGPZHcnyr-IKp0"
      libraries={libraries}
    >
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={13}>
        {source && <Marker position={source} />}
        {destination && <Marker position={destination} />}

        <>
        {source !== '' && destination !== '' && (
          <DirectionsService
            options={{
              destination: destination,
              origin: source,
              travelMode: 'DRIVING'
            }}
            callback={directionsCallback}
          />
        )}

        {response !== null && (
          <DirectionsRenderer
            options={{
              directions: response
            }}
          />
        )}

        <StandaloneSearchBox
      onLoad={onSourceLoad}
      onPlacesChanged={onSourceChanged}
      style={{ marginBottom: '10px' }}
    >
      <input
        type="text"
        placeholder="Enter source location"
        style={{
          boxSizing: 'border-box',
          border: '1px solid transparent',
          width: '240px',
          height: '32px',
          padding: '0 12px',
          borderRadius: '3px',
          boxShadow: '0 2px 6px rgba(0, 0, 0, 0.3)',
          fontSize: '14px',
          outline: 'none',
          textOverflow: 'ellipses',
          position: 'relative',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      />
    </StandaloneSearchBox>
    <StandaloneSearchBox
       onLoad={onDestinationLoad}
       onPlacesChanged={onDestinationChanged}
      style={{ marginTop: '10px' }}
    >
      <input
        type="text"
        placeholder="Enter destination location"
        style={{
          boxSizing: 'border-box',
          border: '1px solid transparent',
          width: '240px',
          height: '32px',
          padding: '0 12px',
          borderRadius: '3px',
          boxShadow: '0 2px 6px rgba(0, 0, 0, 0.3)',
          fontSize: '14px',
          outline: 'none',
          textOverflow: 'ellipses',
          position: 'relative',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      />
    </StandaloneSearchBox>
        </>
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;