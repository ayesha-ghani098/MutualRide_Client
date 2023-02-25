import React, { useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  StandaloneSearchBox,
} from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100vh",
};

const center = {
  lat: 37.7749,
  lng: -122.4194,
};

const Map = () => {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");

  const onPlacesChanged = () => {
    const places = searchBox.getPlaces();
    if (places.length > 0) {
      setSource(places[0].name);
    }
  };

  const onLoad = (ref) => {
    searchBox = ref;
  };

  let searchBox = null;

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyCt0we836OdQbFQolLK_aGPZHcnyr-IKp0"
      libraries={["places"]}
    >
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={13}>
        {source && <Marker position={center} />}
        <StandaloneSearchBox
          onLoad={onLoad}
          onPlacesChanged={onPlacesChanged}
        >
          <input
            type="text"
            placeholder="Enter source location"
            style={{
              boxSizing: `border-box`,
              border: `1px solid transparent`,
              width: `240px`,
              height: `32px`,
              padding: `0 12px`,
              borderRadius: `3px`,
              boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
              fontSize: `14px`,
              outline: `none`,
              textOverflow: `ellipses`,
              position: "absolute",
              left: "50%",
              marginLeft: "-120px",
            }}
          />
        </StandaloneSearchBox>
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
