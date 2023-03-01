import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import Sidebar from '../../components/Sidebar'

const MyRides = () => {
   const [rides,setRides] = useState([])
   const web3 = useSelector(state=>state.web3)
   let params = window.location.pathname.split('/');
   console.log(params);
   useEffect(()=>{
    async function fetch(){
      if(params[1]=="driver"){
        let tx = await web3.rideSharingContractObj.methods.getRidesByRiderId()
        console.log(tx)
      }
        else if(params[1]=="passenger") {
           let tx = await web3.rideSharingContractObj.methods.getRidesByDriver()
           console.log(tx)

          }
    }
    fetch()

   },[web3.rideSharingContractObj])
  return (
    <>
    <div>MyRides</div>
    </>
  )
}

export default MyRides