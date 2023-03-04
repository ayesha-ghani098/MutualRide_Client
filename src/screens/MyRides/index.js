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
      if(params[1]=="driver"){
        let tx = await web3.rideSharingContractObj.methods.getRidesByDriver(web3.user.driverId).call()
        console.log(tx)
      }
        else if(params[1]=="passenger") {
           let tx = await web3.rideSharingContractObj.methods.getRidesByRiderId(web3.user.riderId).call()
           console.log(tx)

          }
    }
    fetch()

   // eslint-disable-next-line react-hooks/exhaustive-deps
   },[web3.rideSharingContractObj])
  return (
    <Layout>
        <Heading text="Completed Rides" />
        <RidesList type="Rides" data={rides} />
      </Layout>
  )
}

export default MyRides