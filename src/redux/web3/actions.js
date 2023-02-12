import ridesharingAbi from "../../contractAbis/ridesharing.json"
import riderAbi from "../../contractAbis/rider.json"
import driverAbi from "../../contractAbis/driver.json"


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
    const RScontract=new web3.eth.Contract(ridesharingAbi.abi,'0x1DE003669a6f5De27559bbac2595e90950fD3F7c');
    console.log(walletAddress,RScontract)
    let wallet={address: walletAddress[0]}
    let Ridercontract=new web3.eth.Contract(riderAbi,'0xEbBeBB565692c8A1F096643c9bc1cDf390Aebb1D');
    
    let driverContract=new web3.eth.Contract(driverAbi,'0x1819Cc2E17776dA93c1A84B8463874CaeA21DfFB');
    
    let addressString=null
    let userType = await RScontract.methods.getUserType(wallet.address).send({from:wallet.address})
//      let addressString = `${wallet.address.slice(0, 5)}...${walconsoconsole.log(walletAddress,RScontract)le.log(walletAddress,RScontract)
// let.account.slice(
//       wallet.address.length - 4,
//       wallet.address.length
//     )}`;
  console.log(userType)
  console.log("herer")
    let user={user_type:null,user_type_id:0};
    let userInfo = userType.events.UserType.returnValues || null;
    console.log("herer")

    if(userInfo)
   { user.user_type_id=userInfo.Type;
    console.log("herer")

     if(user.user_type_id==0){
      console.log("herer")

     user.registered=false;
     }
     else{
      user.registered=true;

      if(user.user_type_id==1)
       { user.user_type="driver"
         user.driverId=userInfo.id
         user.registered=true;
         user.isDriver = true;
         user.isRider=false;
        let tx = await RScontract.methods.idToDriver(user.driverid).call();
        console.log(tx)
        user.driverinfo={name:tx.name, nic:tx.nic,email:tx.email, mobileNo: tx.cellno, vehicle:{
          model: tx.car.modelName, regNum:tx.car.regNum
         },
         id: tx.id,
        }

        }
       else
        {  console.log("herer")

           user.user_type="rider"  
         user.riderId=userInfo.id
         user.registered=true;
         user.isDriver = false;
         user.isRider=true;
         console.log("herer")

         let tx = await RScontract.methods.idToDriver(user.riderId).call();
          console.log(tx)
          user.riderinfo={name:tx.name, nic:tx.nic,email:tx.email, mobileNo: tx.cellno,
           id: tx.Id,
          }
       } 
     }

  }
  console.log(user)

    dispatch( 
      connectSuccess({  
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
      console.log(tx.events.registered.returnValues.driverId);
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

export const addRide=(contract,address,data)=>{
  return async (dispatch) => {
    try{
      const tx = await contract.methods.createRide(data.source.longitude,data.source.latitude,data.destination.longitude,data.destination.latitude,data.time,Number(data.availableseats)).send({from:address});
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