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
  useEffect( ()=>{
    
    fetchRides()
    async function fetchRides(){
      const RScontract=new web3Ins.eth.Contract(ridesharingAbi,'0xeF8bc14CCF511a3b66F279E28f4A601c10B9EF32');
      let dataReq = await RScontract.methods.getAllRides().call()
      const rides=await Promise.all(
        dataReq.map(
          async(i)=>{
            const ride={
              id:i.rideId,
              address:i.creator,
              startTime:i.StartTime,
              requiredSeats:i.seats,
              sourceLong:Number(i.sourceLong),
              sourceLat:Number(i.sourceLat),
              destLong:Number(i.destLong),
              destLat:Number(i.destLat),
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
      console.log(dataReq)
      setData(rides);
    }
    },[])

  return (
    <>
      <Sidebar />
      <Layout>
        <Heading text="Nearby Rides" />
        <RidesList type="Requests" data={mockDataRequest} />
      </Layout>
    </>
  );
};

export default PassengerHome;
