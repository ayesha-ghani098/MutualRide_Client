import React, { useState } from "react";
import { useSelector } from "react-redux";

// Styles and Assets
import styles from "../profile.module.css";
import Avatar from "../../../assets/avatar.png";

// Components
import Layout from "../../../components/Container";
import { Heading } from "../../../components/Text";
import { Heading2 } from "../../../components/Text/Heading";
import InfoItem from "../InfoItem";
import EditProfile from "../../../components/modals/EditProdilePassenger";
import {TextButton} from "../../../components/Buttons"

const PassengerProfile = () => {
  const [show,setShow] = useState(false);
  const [image, setImage] = useState({ preview: "", raw: "" });

  const web3 = useSelector((state) => state.web3);
  

  const handleChange = (e) => {
    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      });
    }
    console.log(e.target.files[0], URL.createObjectURL(e.target.files[0]));
  };
  return (
    <>
    <Layout>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
      <Heading text="Profile" />
      <TextButton text="Edit Profile"onClick={()=>setShow(true)} />
      </div>
      <div className={styles.profileSection}>
        <div className={styles.left}>
          <div className={styles.avatarContainer}>
            <img
              className={styles.avatar}
              src={image.preview ? image.preview : Avatar}
              alt="User Img"
            />
          </div>
          <input
            style={{ display: "none" }}
            type="file"
            accept="image/*"
            id="upload-button"
            onChange={handleChange}
          />
          <label htmlFor="upload-button">
            <div className={styles.upload}>Upload Photo</div>
          </label>
        </div>
        <div className={styles.right}>
          <Heading2 text="User Info" />
          <div className={styles.infoSection}>
            <InfoItem label="Full Name" value="Ayesha Ghani" />
            <InfoItem label="Email" value="ayeshaghani@gmail.com" />
            <InfoItem label="Phone Number" value="+9232-7329748" />
          </div>
        
        </div>
      </div>
    </Layout>
    {
      // TODO YAHAN USER KA DATA PASS KRNA H FOR INITIAL STATE
show && <EditProfile show={show} onHide={()=>setShow(false)} />
    }
    </>
  );
};

export default PassengerProfile;