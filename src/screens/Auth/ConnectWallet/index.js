import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { connectWeb3 } from "../../../redux/web3/actions";
import { TextButton } from "../../../components/Buttons";
import { useDispatch } from "react-redux";

const ConnectWallet = () => {
  const web3 = useSelector((state) => state.web3);
  let navigate = useNavigate();
  let dispatch = useDispatch();

  const handleClick = () => {
    dispatch(connectWeb3());
  };
  return (
    <>
      <TextButton text="Connect Wallet" onClick={handleClick} outline={false} />
    </>
  );
};

export default ConnectWallet;
