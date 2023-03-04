import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

// Components
import RidesList from "../../../components/List/RidesList";
import Layout from "../../../components/Container";
import { Heading } from "../../../components/Text";

const PassengerHome = () => {
  const web3 = useSelector((state) => state.web3);

  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchRides() {
      if (web3.rideSharingContractObj) {
        let dataReq = await web3.rideSharingContractObj.methods
          .getAllRides()
          .call();
        console.log(dataReq);
        const rides = await Promise.all(
          dataReq.map(async (i) => {
            let locArr = i.location.split("_");
            let timeArr = i.StartTime.split("_");
            console.log(locArr);
            const ride = {
              id: i.rideId,
              address: i.creator,
              startTime: timeArr[1],
              date: timeArr[0],
              requiredSeats: i.seats,
              sourceLong: i.sourceLong,
              sourceLat: i.sourceLat,
              destLong: i.destLong,
              destLat: i.destLat,
              source: locArr[1],
              destination: locArr[2],
              image: "",
              name: "Ayesha Ghani",
              rideId: "",
            };
            return ride;
          })
        );
        setData(rides);
      }
    }

    fetchRides();
  }, [web3]);

  return (
    <>
      <Layout>
        <Heading text="Nearby Rides" />
        <RidesList type="Requests" data={data} />
      </Layout>
    </>
  );
};

export default PassengerHome;
