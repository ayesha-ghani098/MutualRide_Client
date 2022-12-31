import ridesharingAbi from "../../contractAbis/ridesharing.json"
// import riderAbi from "../../contractAbis/rider.json"
// import driverAbi from "../../contractAbis/driver.json"


import web3 from "../../utils/web3";

export const connectRequest = () => {
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
    const RScontract=new web3.eth.Contract(ridesharingAbi,'0xc277559800784cB3C10c9C8de5F30d8aEc4EbB20');
    console.log(walletAddress,RScontract)
    let wallet={address: walletAddress[0]}
    let Ridercontract=null
    let driverContract=null
    let addressString=""
    
    const tx= await RScontract.methods.registerForDriver(1,"a","","","","","").send({
      from: walletAddress[0],
    });
    console.log(tx);
    
    // let addressString = `${wallet.account.slice(0, 5)}...${wallet.account.slice(
    //   wallet.account.length - 4,
    //   wallet.account.length
    // )}`;
    dispatch(
      connectSuccess({  
        wallet,
        RScontract,
        Ridercontract,
        driverContract,
      addressString,
      balance:""}
    ))
    }catch(err){
     console.log(err)
     dispatch(connectionFailed())
    }
  }
  }
