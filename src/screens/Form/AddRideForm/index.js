import React,{useState} from "react";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import AddressPicker from "../../../components/AddressPicker";
import { addRide } from "../../../redux/web3/actions";
import Layout from "../../../components/Container";
import { Heading } from "../../../components/Text";
import MapContainer from "./googleMap";

const AddRide = () => {
  const initState = {
    availableseats: "",
    time: "",
  };
  const web3 = useSelector((state) => state.web3);
  const dispatch = useDispatch();

  // eslint-disable-next-line no-unused-vars
  const [initialValues, setInitialValues] = React.useState(initState);
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [locationName, setLocationName] = useState("");

  console.log("sadjksakjdbsa")
  const onSubmit = (values, event) => {
    console.log("Values:::", values);
    // name,image,vehicleType would be taken from user account
    // source and destination would be taken from maps work
    // source:{latitude:"",longitude:""}
    // destination:{latitude:"",longitude:""}
    values.source = { latitude: ()=>source.lat(), longitude: ()=> source.lng()};
    values.destination = { latitude: destination.lat, longitude: destination.lng};
    values.locationName=locationName;
    dispatch(addRide(web3.rideSharingContractObj, web3.wallet.address, values));
    //event.target.reset();
  };

  const onError = (error) => {
    console.log("ERROR:::", error);
  };

  const {
    register,
    handleSubmit,
    // getValues,
    // watch,
    // formState: { errors },
  } = useForm({
    mode: "onTouched",
    reValidateMode: "onSubmit",
    // reValidateMode: "onChange",
    defaultValues: initialValues,
  });

  return (
    <Layout>
      <Heading text="Add a Ride" />
      <Form onSubmit={handleSubmit(onSubmit, onError)}>
         {/* <AddressPicker/>  */}
        <Form.Group className="mb-3" controlId="AvailableSeats">
          <Form.Label>Available Seats</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter available seats"
            {...register("availableseats", {
              required: "Available seats is required",
            })}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="Time">
          <Form.Label>Time</Form.Label>
          <Form.Control
            type="time"
            placeholder="Enter time"
            {...register("time", { required: "Time is required" })}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Map">

        <MapContainer setLocationName={setLocationName} locationName={locationName} source={source} destination={destination} setDestination={setDestination} setSource={setSource} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add a Ride
        </Button>
      </Form>

    </Layout>
  );
};

export default AddRide;
