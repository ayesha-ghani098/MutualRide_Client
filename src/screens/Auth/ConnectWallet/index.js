import React,{useEffect} from "react";
import { Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import styles from "./ConnectWallet.module.css";
import Logo from "../../../assets/logo.png";
import { connectWeb3 } from "../../../redux/web3/actions";
import { TextButton } from "../../../components/Buttons";

const ConnectWallet = () => {
  const web3 = useSelector((state) => state.web3);
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const handleClick =  async() => {
   let a = await dispatch(connectWeb3());
    navigate("/user-selection")
  };
  console.log(web3)

  useEffect(()=>{
    if(web3.connected){
      if(web3.user.user_type=="driver"){
        console.log("heree")
        navigate("/driver");
      }else if(web3.user.user_type=="rider"){
        console.log("heree")

        navigate("/passernger");

      }else if(web3.user.user_type=="both") {
        console.log("heree")

        navigate("/user-selection")}

    }
  },[web3.connected])
  return (
    <Container fluid className={styles.container}>
      <div className={styles.centeredDiv}>
        <div className={styles.content}>
          <div className={styles.imgContainer}>
            <img src={Logo} alt="app logo" />
          </div>
          <div>
            <TextButton
              text="Connect Wallet"
              onClick={handleClick}
              outline={false}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ConnectWallet;
