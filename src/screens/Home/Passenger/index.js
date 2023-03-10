import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import DriverTracking from "../../Tracking/Driver/index";
import AlertMessage from "../../../components/Alert";

// Components
import RidesList from "../../../components/List/RidesList";
import Layout from "../../../components/Container";
import { Heading } from "../../../components/Text";
import { useNavigate } from "react-router-dom";
import { ref, set, onValue } from "firebase/database";
import { db } from "../../../firebase/firebaseIns";

const PassengerHome = () => {
  const web3 = useSelector((state) => state.web3);

  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);
  const navigate = useNavigate ();
  const [myRides, setRides] = useState([]);
  const [driver,setDriver] = useState([]);
  const [rider,setRider] = useState([]);
  const [rideId,setRideId] = useState(null)
 const [showPopup, setPopup] = useState(false)
  const handleNavigation = () => {
    navigate("/driver/add-ride");
  };
const handlePopupRender=()=>{
    setPopup(false)

  navigate(`/passenger/tracking/${driver}/${rider}/${rideId}`)

}
  const checkIfAnyRideRunning=(rides)=>{
  
    const messagesRef = ref(db, 'rides/');
    
    // Fetch the data
    onValue(messagesRef, (snapshot) => {
      const messageList = [];
      snapshot.forEach((childSnapshot) => {
        const childData = childSnapshot.val();
        messageList.push(childData);
      });
      console.log(messageList)
      messageList.forEach((e,i)=>{
        console.log(e,i)
       if((e.driver==web3.wallet.address) && e.status=="running"){
        setRider(e.rider)
        setDriver(e.driver)
        setRideId(i)
        setPopup(true)
       }

      })
    });
  
}
  useEffect(() => {
    async function fetchRides() {
      if (web3.rideSharingContractObj) {
        let dataReq = await web3.rideSharingContractObj.methods
          .getAllRides()
          .call();
        console.log("nearby rides from blockchain",dataReq);
        const rides = await Promise.all(
          dataReq.map(async (i) => {
            let locArr = i.location.split("_");
            let timeArr = i.StartTime.split("_");
            console.log(locArr);
            const ride = {
              id: i.rideId,
              address: i.creator,
              startTime: timeArr[1],
              date: timeArr[0],
              requiredSeats: i.seats,
              sourceLong: i.sourceLong,
              sourceLat: i.sourceLat,
              destLong: i.destLong,
              destLat: i.destLat,
              source: locArr[1],
              destination: locArr[2],
              image: "",
              name: "Ayesha Ghani",
              rideId: i.rideId,
              fare: i.fair,
              isPayed: false,
              state: i.currState,
            };
            return ride;
          }).filter(i=>i.state!==0)
        );
        console.log("Passenger nearby rides list ",rides)
        setData(rides);
      }
    }

    fetchRides();
    async function fetch(){
    
      if(web3.isRider)
      {
        let dataReq = await web3.rideSharingContractObj.methods.getRidesByRiderId(web3.user.riderId).call()
                console.log(dataReq)
          const rides = await Promise.all(
            dataReq.map(async (i) => {
  
  
              let locArr = i.location.split("_");
              let timeArr = i.StartTime.split("_");
              console.log(locArr);
              const ride = {
                id: i.rideId,
                address: i.creator,
                startTime: timeArr[1],
                date: timeArr[0],
                requiredSeats: i.seats,
                sourceLong: i.sourceLong,
                sourceLat: i.sourceLat,
                destLong: i.destLong,
                destLat: i.destLat,
                source: locArr[1],
                destination: locArr[2],
                image: "",
                name: "Ayesha Ghani",
                rideId: i.rideId,
                fare:i.fair,
                isPayed:false,
                state:i.currState
              };
              return ride;
            })
          );
           console.log(rides)
          setRides(rides);
        }
    
    }
    fetch()
  }, [web3]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const regex = new RegExp(`\\b${searchTerm}`, "i");
  const filteredItems = data.filter((item) => item? regex.test(item.source+" "+item.destination):false);

  const displayItems = searchTerm.length === 0 ? data : filteredItems;

  return (
    <>
      <Layout>
      {(driver && rider && showPopup) &&  (<DriverTracking render={false} isDriver={true} myId={driver} otherId={rider}/>)}
      {showPopup && 
(   <div onClick={handlePopupRender}>   <AlertMessage message={"Your ride is running Click here!"}/>
</div>
)  }
        <Heading text="Nearby Rides" />

        {data.length !== 0 ? (
          <div>
            <input
              style={{
                borderRadius: "4px",
                width: "100%",
                padding: "10px",
                background: "#4BA7E1",
                border: "none",
                margin: "15px 0",
                color: "white",
                outline: "none",
              }}
              type="text"
              placeholder="Search..."
              onChange={handleSearch}
            />
            <RidesList type="Requests" data={displayItems} />
          </div>
        ) : (
          <div>Sorry! No Rides Available</div>
        )}
      </Layout>
    </>
  );
};

export default PassengerHome;
