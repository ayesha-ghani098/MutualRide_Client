import React,{useEffect,useState} from "react";
import ridesharingAbi from "../../../contractAbis/ridesharing.json"
// Components
import Sidebar from "../../../components/Sidebar";
import RidesList from "../../../components/List/RidesList";
import Layout from "../../../components/Container";
import { Heading } from "../../../components/Text";
import web3Ins from "../../../utils/web3";
// Mock Data
import { mockDataRequest } from "../../../utils/data";
import { useSelector, useDispatch } from "react-redux";

const PassengerHome = () => {
  const web3 = useSelector((state) => state.web3);
 const [data,setData] = useState([]);
 console.log(web3)
  useEffect( ()=>{
  
    async function fetchRides(){

      if(web3.rideSharingContractObj){
      let dataReq = await web3.rideSharingContractObj.methods.getAllRides().call()
      console.log(dataReq)
      const rides=await Promise.all(
        dataReq.map(
          async(i)=>{
            const ride={
              id:i.rideId,
              address:i.creator,
              startTime:i.StartTime,
              requiredSeats:i.seats,
              sourceLong:i.sourceLong,
              sourceLat:i.sourceLat,
              destLong:i.destLong,
              destLat:i.destLat,
              source:"",
              destination:"",
              image:"",
              name:"Ayesha Ghani",
              rideId:""
            }
            return ride;
          }
        )
      )
      console.log(rides)

      setData(rides);
        }
    }
      
    fetchRides()
    },[web3])

  return (
    <>
      <Sidebar />
      <Layout>
        <Heading text="Nearby Rides" />
        <RidesList type="Requests" data={data} />
      </Layout>
    </>
  );
};

export default PassengerHome;
