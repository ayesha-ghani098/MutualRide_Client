import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

// Web3
import Web3 from "web3";

// Redux
import { connectWeb3 } from "./redux/web3/actions";

// Routes
import AppRoutes from "./route/AppRoutes/appRoutes";

const App = () => {
  const dispatch = useDispatch();

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

  return <AppRoutes />;
};

export default App;
