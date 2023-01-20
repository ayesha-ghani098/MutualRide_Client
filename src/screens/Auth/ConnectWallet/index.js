import React from "react";
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

  const handleClick = () => {
    dispatch(connectWeb3());
  };
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
