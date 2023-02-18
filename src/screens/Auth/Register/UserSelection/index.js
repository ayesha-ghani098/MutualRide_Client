import React from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import styles from "./UserSelection.module.css";
import Logo from "../../../../assets/logo.png";
import Driver from "../../../../assets/Selection/img1.png";
import Passenger from "../../../../assets/Selection/img2.png";
import { ImgButton } from "../../../../components/Buttons";

const UserSelection = () => {
  const web3 = useSelector((state) => state.web3);

  let navigate = useNavigate();
  const handleSelection = (type) => {
    type === "Driver"
      ? navigate("/register-driver")
      : navigate("/register-passenger");

      if(type==="Driver"){
        if(web3.connected){
          if(web3.user.user_type=="driver" || web3.user.user_type=="both" ){
            console.log("heree")
            navigate("/driver");
          }
    
    
        } else{
          navigate("/register-driver")
        }
        } else if(type==="Passenger"){
          if(web3.connected){
            if(web3.user.user_type=="rider" || web3.user.user_type=="both"){
              console.log("heree")
              navigate("/passenger");
            }
      
      
          } else{
            navigate("/register-passenger")
          }
          }
      
    
  };
  return (
    <Container fluid className={styles.container}>
      <div className={styles.centeredDiv}>
        <div className={styles.content}>
          <div className={styles.buttonContainer}>
            <ImgButton
              src={Driver}
              label="Driver"
              onClick={() => handleSelection("Driver")}
            />
            <ImgButton
              src={Passenger}
              label="Passenger"
              onClick={() => handleSelection("Passenger")}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default UserSelection;
