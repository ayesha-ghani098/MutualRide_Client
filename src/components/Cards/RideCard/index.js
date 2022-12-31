import React from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import { AiOutlineFieldTime } from "react-icons/ai";
import { MdPeopleOutline } from "react-icons/md";

import Avatar from "../../../assets/avatar.png";
import { TextButton } from "../../Buttons";

const RideCard = (props) => {
  const {
    id,
    name,
    image,
    source,
    destination,
    time,
    seatsAvailable,
    costPerKm,
    vehicleType,
  } = props.ride;
  const navigate = useNavigate();

  const handleNavigation = () => {
    console.log(id);
    navigate({
      pathname: "/request-ride",
      search: createSearchParams({
        driverId: id,
      }).toString(),
    });
  };

  return (
    <div className="request-card mb-20">
      <img
        style={{ width: "40px", height: "40px" }}
        src={image ? image : Avatar}
        alt="user-avatar"
      />
      <div className="card-body">
        <h5>{name}</h5>
        <p>source: {source}</p>
        <p>destination: {destination}</p>
        <div className="card-bottom">
          <div>
            <AiOutlineFieldTime />
            {time}
          </div>
          <div>
            <MdPeopleOutline /> {seatsAvailable}
          </div>
          <div>{vehicleType}</div>
          <div>Cost/km: {costPerKm}</div>
        </div>
        <TextButton text="Request a Ride" onClick={handleNavigation} />
      </div>
    </div>
  );
};

export default RideCard;
