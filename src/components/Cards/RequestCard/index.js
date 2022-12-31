import React from "react";
import { useNavigate } from "react-router-dom";
import { MdPeopleOutline } from "react-icons/md";

import Avatar from "../../../assets/avatar.png";
import { TextButton } from "../../Buttons";

const RequestCard = (props) => {
  const { name, image, source, destination, requiredSeats } = props.request;
  const navigate = useNavigate();

  const handleAccept = () => {
    // navigate to tracking
  };

  const handleDecline = () => {
    // send notification to passenger
    navigate("/");
  };

  return (
    <div className="ride-card mb-20">
      <img
        style={{ width: "40px", height: "40px" }}
        src={image ? image : Avatar}
        alt="user-avatar"
      />
      <div className="card-body">
        <h5>{name}</h5>
        <p>source: {source}</p>
        <p>destination: {destination} </p>
        <div className="card-bottom">
          <div>
            <MdPeopleOutline /> {requiredSeats}
          </div>
        </div>
        <div className="card-buttons">
          <TextButton text="Accept" onClick={handleAccept} />
          <TextButton text="Decline" onClick={handleDecline} />
        </div>
      </div>
    </div>
  );
};

export default RequestCard;
