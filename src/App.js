import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

// Web3
import Web3 from "web3";

// Redux
import { connectWeb3 } from "./redux/web3/actions";

// Routes
import AppRoutes from "./route/AppRoutes/appRoutes";

// Components 
import AlertMessage from "./components/Alert/index"
const App = () => {

  const web3 = useSelector(state=>state.web3)
  const dispatch = useDispatch();
 let anyRideInRunning = true;
 let runningRide={
  id: 0,
  passengerId:1,
  riderId:1
}

  useEffect(() => {
    const checkConnection = async () => {
      // Check if browser is running Metamask
      let web3;
      if (window.ethereum) {
        web3 = new Web3(window.ethereum);
      } else if (window.web3) {
        web3 = new Web3(window.web3.currentProvider);
      }

      // Check if User is already connected by retrieving the accounts
      console.log("getting accounts");
      web3.eth.getAccounts().then(async (addr) => {
        // Set User account into state
        if (addr.length > 0) {
          console.log(addr);
          dispatch(connectWeb3());
        }
      });
    };

    checkConnection();
   
  }, []);
  AlertMessage("sds")
  return (!web3.loading  && <AppRoutes web3={web3} />);
};

export default App;
