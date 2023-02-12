import React,{useState} from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

const MapContainer = () => {
    const [ selected, setSelected ] = useState({});
    const onSelect = item => {
        setSelected(item);
      }
  const mapStyles = {        
    height: "100vh",
    width: "100%"};
  
  const defaultCenter = {
    lat: 41.3851, lng: 2.1734
  }
  const [ currentPosition, setCurrentPosition ] = useState({});
  
  const success = position => {
    const currentPosition = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    }
    setCurrentPosition(currentPosition);
  };
  console.log(currentPosition)
  const onMarkerDragEnd = (e) => {
    const lat = e.latLng.lat();
    const lng = e.latLng.lng();
    setCurrentPosition({ lat, lng})
  };
  return (
     <LoadScript
       googleMapsApiKey='AIzaSyCt0we836OdQbFQolLK_aGPZHcnyr-IKp0'>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}
          initialCenter={{ lat: 47.444, lng: -122.176}}

        >
               {
            currentPosition.lat ? 
            <Marker
            position={currentPosition}
            onDragEnd={(e) => onMarkerDragEnd(e)}
            draggable={true} /> :
            null
          }
  
        </GoogleMap> 
     </LoadScript>
  )
}

export default MapContainer;
