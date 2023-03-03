import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

// Styles and Assets
import styles from "./ConnectWallet.module.css";
import LandingPageImage from "../../../assets/landingPage.jpg";

// Redux
import { connectWeb3 } from "../../../redux/web3/actions";

// Components
import { TextButton } from "../../../components/Buttons";
import { HeadingTwo} from "../../../components/Text";
import { Text } from "../../../components/Text";
import Logo from "../../../components/Logo";

const ConnectWallet = () => {
  const web3 = useSelector((state) => state.web3);
  let navigate = useNavigate();
  let dispatch = useDispatch();

  const handleClick = () => {
    let a = dispatch(connectWeb3());
    console.log(a);
    navigate("/user-selection");
  };

  useEffect(() => {
    if (web3.connected) {
      if (web3.user.user_type === "driver") {
        navigate("/driver");
      } else if (web3.user.user_type === "rider") {
        navigate("/passernger");
      } else if (web3.user.user_type === "both") {
        navigate("/user-selection");
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [web3.connected]);

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div>
          <Logo/>
          <Text text="Share a ride, share the fun. Join our community of peer-to-peer ride sharing today!" />
          <div className={styles.btnContainer}>
          <TextButton
            text="Connect With Wallet"
            onClick={handleClick}
            outline={false}
          />
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <img src={LandingPageImage} alt="landing page illustration" />
      </div>
    </div>
  );
};

export default ConnectWallet;
