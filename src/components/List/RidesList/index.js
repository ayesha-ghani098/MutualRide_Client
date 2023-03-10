import React from "react";
import { RequestCard, RideCard,MyRideCard } from "../../Cards";
const RidesList = ({ data, type }) => {
  console.log("list",data)

  return (
    <div style={{display:"flex",flexWrap:"wrap"}}>
      {type === "Rides"
        ? data.map((item) => {
            return <RequestCard key={item.id} ride={item} />;
          })
        : type === "Requests"? data.map((item) => {
            return <RideCard key={item.id} request={item} />;
          })
        : data.map((item) => {
          return <MyRideCard key={item.id} data={item} />;
        })
        }
    </div>
  );
};

export default RidesList;
