import ridesharingAbi from "../../contractAbis/ridesharing.json"
import riderAbi from "../../contractAbis/rider.json"
import driverAbi from "../../contractAbis/driver.json"
import { ref, set,onValue } from "firebase/database";
import { db } from "../../firebase/firebaseIns";

import web3 from "../../utils/web3";

export const connectRequest   = () => {
    console.log("requested connection");
    return {
      type: "CONNECTION_REQUEST",
    };
  };

const connectSuccess = (payload) => {
    return {
      type: "CONNECTION_SUCCESS",
      payload: payload,
    };
  };  
  export const connectionFailed = () => {
    return {
      type: "CONNECTION_FAILED",
    };
  };

  export const connectWeb3 = ()=>{
    return async (dispatch) => {
      dispatch(connectRequest());
   try{
    const walletAddress= await web3.eth.requestAccounts();
    const RScontract=new web3.eth.Contract(ridesharingAbi.abi,'0x0165878A594ca255338adfa4d48449f69242Eb8F');
    console.log(walletAddress,RScontract)
    let wallet={address: walletAddress[0]}
    let Ridercontract=new web3.eth.Contract(riderAbi,'0xEbBeBB565692c8A1F096643c9bc1cDf390Aebb1D');
    
    let driverContract=new web3.eth.Contract(driverAbi,'0x1819Cc2E17776dA93c1A84B8463874CaeA21DfFB');
    
    let addressString=null
    let userType = await RScontract.methods.getUserType(wallet.address).call()
//      let addressString = `${wallet.address.slice(0, 5)}...${walconsoconsole.log(walletAddress,RScontract)le.log(walletAddress,RScontract)
// let.account.slice(
//       wallet.address.length - 4,
//       wallet.address.length
//     )}`;
  console.log(userType)
  console.log("herer")
    let user={user_type:null,user_type_id:0};
    let userInfo = userType;
    let isDriver=false;
    let isRider=false;

    console.log("herer")

    if(userInfo)
   { user.user_type_id=userInfo[0];
    console.log("herer")

     if(user.user_type_id==0){
      console.log("herer")

     user.registered=false;
     }
     else{
      user.registered=true;

      if(user.user_type_id==1)
       {
        console.log("herer")
     console.log(user)
        user.user_type="driver"
         user.driverId=userInfo[1]
         user.registered=true;
         user.isDriver = true;
         isDriver = true
         user.isRider=false;
        let tx = await RScontract.methods.idToDriver(user.driverId).call();
        console.log(tx)
        user.driverinfo={name:tx.name, nic:tx.nic,email:tx.email, mobileNo: tx.cellno, vehicle:{
          model: tx.car.modelName, regNum:tx.car.regNum
         },
         id: tx.Id,
        }

        }
        else if(user.user_type_id===2){
          console.log("herer")

          user.user_type="rider"  
        user.riderId=userInfo.id
        user.registered=true;
        user.isDriver = false;
        user.isRider=true;
        isRider=true;
        console.log("herer")

        let tx = await RScontract.methods.idToDriver(user.riderId).call();
         console.log(tx)
         user.riderinfo={name:tx.name, nic:tx.nic,email:tx.email, mobileNo: tx.cellno,
          id: tx.Id,
         }
        }
       else
        {  console.log("herer")

           user.user_type="both"  
         user.riderId=userInfo[1]
         user.driverId=userInfo[1]

         user.registered=true;
         user.isDriver = true;
         user.isRider=true;
         isRider=true
         isDriver=true
         console.log("herer")

         let tx = await RScontract.methods.idToRider(user.riderId).call();

          console.log(tx)
          user.riderinfo={name:tx.name, nic:tx.nic,email:tx.email, mobileNo: tx.cellno,
           id: tx.Id,
          }
           tx = await RScontract.methods.idToDriver(user.driverId).call();

          user.driverinfo={name:tx.name, nic:tx.nic,email:tx.email, mobileNo: tx.cellno, vehicle:{
            model: tx.car.modelName, regNum:tx.car.regNum
           },
           id: tx.id,
          }


       } 
     }

  }
  console.log(user)


    dispatch( 
      connectSuccess({  

        isDriver,
        isRider,
        wallet,
        RScontract,
        Ridercontract,
        driverContract,
      addressString,
      user,
      balance:""}
    ))
    }catch(err){
     console.log(err)
     dispatch(connectionFailed())
    }
  }
  }


const registerDriverSuccess=(payload)=>{
  return {
    type: "DRIVER_SUCCESS",
    payload: payload,
  };
}

export const registerDriver=(contract,address,data)=>{
  return async (dispatch) => {
   try{
    console.log(contract,address,data)
   // data = {name:"asd",nic:"dad",email:"dasd",phoneno:"",regNo:"",model:"asd",licenceNo:""}
      const tx = await contract.methods.registerForDriver(data.name,data.cnic,data.email,data.phoneno,data.regno, data.model,data.licenceNo).send({from:address});
      console.log(tx)
      
      const sendMessage = ( id) => {
        set(ref(db, "users/" + id), {
          location: "",
          cell:data.phoneno,
          
        })
        .then(() => {
            console.log("successfully done");
          })
          .catch((err) => {
            console.log("err", err);
          });
      };
       
      sendMessage(address)
      window.location.reload();

      dispatch(registerDriverSuccess({driverId:tx.events.registered.returnValues.driverId}))
   }catch(err){
       console.log(err)
   }
}
}
const registerRiderSuccess=(payload)=>{
  return {
    type: "RIDER_SUCCESS",
    payload: payload,
  };
}
export const registerRider=(contract,address,data)=>{
  return async (dispatch) => {
   try{
    console.log(contract,address,data)
   // data = {name:"asd",nic:"dad",email:"dasd",phoneno:"",regNo:"",model:"asd",licenceNo:""}
      const tx = await contract.methods.registerForRider(data.name,data.email,data.phoneno).send({from:address});
      console.log(tx)
      window.location.reload();

      dispatch(registerRiderSuccess({RiderId:tx.events.registered.returnValues.driverId}))
      
   }catch(err){
       console.log(err)
   }
}
}


const addRideSuccess=(payload)=>{
  return {
    type: "ADD_RIDE_SUCCESS",
    payload: payload,
  };
}

/**
 * 
 */
export const addRide=(web3,contract,address,data)=>{
  return async (dispatch) => {
    try{
      const setRide = async ( id) => {
        const datax={
         status:"pending",
         driver:address,
         rider:""           
       }
       console.log(id,datax)
       set(ref(db, "rides/" + id), datax)
         .then(() => {
           console.log("successfully done");
         })
         .catch((err) => {
           console.log("err", err);
         });
     };
      console.log(data,address)
     
      let tx = await contract.methods.createRide(
        data.locationName,
        data.source.longitude,
        data.source.latitude,
        data.destination.longitude,
        data.destination.latitude,
       data.time).send({from:address});
      console.log(tx.events.RideCreated.returnValues.id)
      const id =tx.events.RideCreated.returnValues.id
        tx = await contract.methods.setFair(id,data.fare).send({from:address});
      setRide(id)
 

        console.log(tx)
    } catch(err){ 
      console.log(err)
    }
}
} 

const requestRideSuccess=(payload)=>{
  return {
    type: "REQUEST_RIDE",
    payload: payload,
  };
}

export const requestRide=(contract,address,rideId,RiderId)=>{
  return async (dispatch) => {
    try{
      const tx = await contract.methods.joinRide(rideId,RiderId).send({
        from:address
      })

      console.log(tx)
    }catch(err){
      console.log(err)
    }
  }
}


export const setSelectedUser=(type)=>{
  let payload={selectedUser:type}
  return {
    type: "SET_SELECTED_USER",
    payload: payload,
  };
}