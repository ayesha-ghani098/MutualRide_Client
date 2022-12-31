const initialState = {
    loading: false,
    connected: false,
    balance: null,
    addressString: null,
    token: null,
    wallet: null,
    rideSharingContractObj: null,
    riderContractObj :null,
    driverContractObj:null,
}

const web3Reducer = (state = initialState, action) => {
    switch (action.type) {
        case "CONNECTION_REQUEST":
            console.log("connecting...");
            return {
                ...initialState,
                loading: true,
            };
        case "CONNECTION_SUCCESS":
            console.log("connection sucess...");
            console.log(action.payload)
            return {
                ...state,
                wallet: action.payload.wallet,
                rideSharingContractObj:action.payload.RScontract,
                riderContractObj:action.payload.Ridercontract,
                driverContractObj:action.payload.driverContract,
                balance: action.payload.balance,
                connected: true,
                loading: false,
                addressString: action.payload.addressString,
            };
        case "CONNECTION_FAILED":
            console.log("connection failed...");
            return {
                ...initialState,
                loading: false,
            };
        default:
            console.log("default case...");
             return state;
    }
} 


export default web3Reducer;