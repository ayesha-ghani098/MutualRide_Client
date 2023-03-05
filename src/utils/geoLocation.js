
export function getLocation(setLocation) {
  if (navigator.geolocation) {
    console.log("Geolocation is supported by this browser :)");
   return  getCurrentLocation(setLocation);
  } else {
    console.log("Geolocation is NOT supported by this browser :(");
  }
}

function getCurrentLocation(setLocation) {
 navigator.geolocation.getCurrentPosition((result)=> {
  console.log(result)
    setLocation({lat:  result.coords.latitude, // latitude value
    lng: result.coords.longitude} )// longitude value
  

});

}