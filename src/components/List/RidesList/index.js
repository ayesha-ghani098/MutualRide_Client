import React from "react";
import { RequestCard, RideCard } from "../../Cards";

const RidesList = ({ data, type }) => {
  return (
    <>
      {type === "Rides"
        ? data.map((item) => {
            return <RequestCard key={item.id} ride={item} />;
          })
        : data.map((item) => {
            return <RideCard key={item.id} request={item} />;
          })}
    </>
  );
};

export default RidesList;
