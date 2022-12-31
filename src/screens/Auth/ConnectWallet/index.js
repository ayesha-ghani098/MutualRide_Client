import React from "react";
import { useNavigate } from "react-router-dom";

import { TextButton } from "../../../components/Buttons";

const ConnectWallet = () => {
  let navigate = useNavigate();
  const handleClick = () => {
    navigate("/user-selection")
  };
  return (
    <>
      <TextButton text="Connect Wallet" onClick={handleClick} outline={false} />
    </>
  );
};

export default ConnectWallet;
