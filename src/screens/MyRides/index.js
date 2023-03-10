import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

// Components
import RidesList from "../../components/List/RidesList";
import Layout from "../../components/Container";
import { Heading } from "../../components/Text";

const MyRides = () => {
   const [rides,setRides] = useState([])
   const web3 = useSelector(state=>state.web3)
   let params = window.location.pathname.split('/');

   useEffect(()=>{
    async function fetch(){
    
      if(web3.isDriver)
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

   // eslint-disable-next-line react-hooks/exhaustive-deps
   },[web3.rideSharingContractObj])
  return (
    <Layout>
        <Heading text="My Rides" />
        <RidesList data={rides} />
      </Layout>
  )
}

export default MyRides